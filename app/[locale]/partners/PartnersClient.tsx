"use client";

import { Link } from "@/i18n/navigation";
import { useState, useRef, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useTranslations } from "next-intl";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_RE = /^(0[2-9]\d{7,8}|09\d{8})$/;

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
}

function validateForm(form: HTMLFormElement, tr: (key: string) => string): FormErrors {
  const errors: FormErrors = {};
  const name = (form.elements.namedItem("name") as HTMLInputElement)?.value.trim();
  const email = (form.elements.namedItem("email") as HTMLInputElement)?.value.trim();
  const phone = (form.elements.namedItem("phone") as HTMLInputElement)?.value.replace(/[\s\-]/g, "");

  if (!name) errors.name = tr("errors.nameRequired");
  else if (name.length > 50) errors.name = tr("errors.nameLen");

  if (!email) errors.email = tr("errors.emailRequired");
  else if (!EMAIL_RE.test(email)) errors.email = tr("errors.emailInvalid");

  if (!phone) errors.phone = tr("errors.phoneRequired");
  else if (!PHONE_RE.test(phone)) errors.phone = tr("errors.phoneInvalid");

  return errors;
}

type SubmitStatus = "idle" | "loading" | "success" | "error";

const WHY_META = [
  { icon: "smartphone", bg: "bg-primary-fixed", color: "text-primary" },
  { icon: "trending_up", bg: "bg-secondary-container", color: "text-secondary" },
  { icon: "auto_fix_high", bg: "bg-tertiary-fixed", color: "text-on-tertiary-container" },
  { icon: "shield_lock", bg: "bg-primary-fixed", color: "text-primary" },
  { icon: "analytics", bg: "bg-secondary-container", color: "text-secondary" },
  { icon: "public", bg: "bg-tertiary-fixed", color: "text-on-tertiary-container" },
] as const;

type WhyCard = { title: string; desc: string };
type RoiStat = { stat: string; label: string; desc: string };
type Opt = { value: string; label: string };
type PartnerTypeOpt = { value: string; label: string };

export default function PartnersClient() {
  const t = useTranslations("PartnersPage");
  const formRef = useRef<HTMLFormElement>(null);
  const [fieldErrors, setFieldErrors] = useState<FormErrors>({});
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const whyCards = t.raw("whyCards") as WhyCard[];
  const roiStats = t.raw("roiStats") as RoiStat[];
  const cities = t.raw("cities") as Opt[];
  const areas = t.raw("areas") as Opt[];
  const partnerTypes = t.raw("partnerTypes") as PartnerTypeOpt[];

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const errors = validateForm(form, t);
    setFieldErrors(errors);
    if (Object.keys(errors).length > 0) return;

    setSubmitStatus("loading");
    setErrorMessage("");

    const data = new FormData(form);
    const partnerTypesVal = data.getAll("type") as string[];
    const payload = {
      name: (data.get("name") as string)?.trim(),
      email: (data.get("email") as string)?.trim(),
      phone: (data.get("phone") as string)?.trim(),
      location: (data.get("location") as string)?.trim(),
      area: (data.get("area") as string)?.trim(),
      partnerTypes: partnerTypesVal,
      message: (data.get("message") as string)?.trim(),
      website: (data.get("website") as string) ?? "",
    };

    try {
      const res = await fetch("/api/frontend/landingpage-partners-submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (res.ok && result.success) {
        setSubmitStatus("success");
        form.reset();
        setFieldErrors({});
      } else {
        setSubmitStatus("error");
        setErrorMessage(result.message || t("form.errSubmit"));
        if (result.errors) setFieldErrors(result.errors as FormErrors);
      }
    } catch {
      setSubmitStatus("error");
      setErrorMessage(t("form.errNetwork"));
    }
  };

  return (
    <div className="pt-20">
      <section className="min-h-[70vh] flex items-center relative overflow-hidden be-1">
        <div className="hero-dark absolute inset-0 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center opacity-25"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format,compress&fit=crop&q=80&w=1920')",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-6 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 border border-primary-container/40 text-primary-container px-4 py-1.5 rounded-full text-xs font-label font-bold tracking-widest uppercase mb-8">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container inline-block" />
              {t("hero.kicker")}
            </div>
            <h1 className="font-headline text-5xl md:text-7xl font-black text-white leading-[1.0] tracking-tight mb-6">
              {t("hero.h1Line1")}
              <br />
              <span className="text-primary-container">{t("hero.h1Highlight")}</span>
            </h1>
            <p className="text-white/70 text-xl leading-relaxed mb-10 max-w-xl">{t("hero.body")}</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact-form"
                className="butler-gradient text-white px-8 py-4 rounded-xl font-bold text-base cloud-shadow flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                <span className="material-symbols-outlined text-[20px]">handshake</span>
                {t("hero.ctaApply")}
              </a>
              <a
                href="#why"
                className="bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl font-bold text-base flex items-center justify-center gap-2 hover:bg-white/20 transition-colors"
              >
                <span className="material-symbols-outlined text-[20px]">info</span>
                {t("hero.ctaLearn")}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="why" className="py-24 px-6 lg:px-12 bg-surface be-2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("why.kicker")}</span>
            <h2 className="font-headline text-4xl md:text-5xl font-black text-on-surface tracking-tight">
              {t("why.h2Line1")}
              <br />
              {t("why.h2Line2")}
            </h2>
            <p className="text-on-surface-variant mt-4 text-lg max-w-xl mx-auto">{t("why.sub")}</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyCards.map((c, i) => {
              const m = WHY_META[i] ?? WHY_META[0];
              return (
                <div key={c.title} className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 border border-outline-variant/5">
                  <div className={`w-12 h-12 ${m.bg} rounded-xl flex items-center justify-center mb-5`}>
                    <span className={`material-symbols-outlined ${m.color} text-2xl`}>{m.icon}</span>
                  </div>
                  <h3 className="font-headline font-bold text-lg text-on-surface mb-2">{c.title}</h3>
                  <p className="text-on-surface-variant text-sm leading-relaxed">{c.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-24 px-6 lg:px-12 bg-surface-container-low relative overflow-hidden be-3">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -mr-48 -mt-48" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("roi.kicker")}</span>
            <h2 className="font-headline text-3xl md:text-5xl font-black text-on-surface tracking-tight">{t("roi.h2")}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {roiStats.map((r) => (
              <div
                key={r.label}
                className="bg-surface-container-lowest p-8 rounded-3xl border border-outline-variant/10 cloud-shadow text-center"
              >
                <div className="text-primary font-headline text-5xl font-black mb-2">{r.stat}</div>
                <div className="font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">{r.label}</div>
                <p className="mt-4 text-sm text-on-surface-variant">{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="py-24 px-6 lg:px-12">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <span className="font-label text-primary font-bold tracking-widest uppercase text-xs block mb-3">{t("form.kicker")}</span>
            <h2 className="font-headline text-3xl md:text-4xl font-black text-on-surface tracking-tight mb-4">{t("form.h2")}</h2>
            <p className="text-on-surface-variant text-lg">{t("form.sub")}</p>
          </div>
          <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5">
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-6 flex items-start gap-3 bg-primary/10 border border-primary/30 text-primary rounded-xl px-5 py-4"
                >
                  <span className="material-symbols-outlined text-[22px] mt-0.5 shrink-0">check_circle</span>
                  <div>
                    <p className="font-bold text-sm">{t("form.successTitle")}</p>
                    <p className="text-xs mt-0.5 text-primary/80">{t("form.successBody")}</p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {submitStatus === "error" && errorMessage && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mb-6 flex items-start gap-3 bg-error/10 border border-error/30 text-error rounded-xl px-5 py-4"
                >
                  <span className="material-symbols-outlined text-[22px] mt-0.5 shrink-0">error</span>
                  <p className="text-sm">{errorMessage}</p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} noValidate className="space-y-6">
              <div aria-hidden="true" style={{ position: "absolute", left: "-9999px", width: 0, height: 0, overflow: "hidden" }}>
                <label htmlFor="hp-website">Website</label>
                <input id="hp-website" type="text" name="website" tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.name")}</label>
                  <input
                    type="text"
                    name="name"
                    placeholder={t("placeholders.name")}
                    onChange={() => fieldErrors.name && setFieldErrors((p) => ({ ...p, name: undefined }))}
                    className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.name ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                  />
                  {fieldErrors.name && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.name}</p>}
                </div>
                <div>
                  <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.phone")}</label>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="0912-345-678"
                    onChange={() => fieldErrors.phone && setFieldErrors((p) => ({ ...p, phone: undefined }))}
                    className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.phone ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                  />
                  {fieldErrors.phone && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.phone}</p>}
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.email")}</label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  onChange={() => fieldErrors.email && setFieldErrors((p) => ({ ...p, email: undefined }))}
                  className={`w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 text-sm transition-shadow ${fieldErrors.email ? "ring-2 ring-error/60 focus:ring-error/60" : "focus:ring-primary/30"}`}
                />
                {fieldErrors.email && <p className="text-error text-xs mt-1.5 font-label">{fieldErrors.email}</p>}
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.location")}</label>
                <select
                  name="location"
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  defaultValue=""
                >
                  <option value="">{t("form.emptySelect")}</option>
                  {cities.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.area")}</label>
                <select
                  name="area"
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm"
                  defaultValue=""
                >
                  <option value="">{t("form.emptySelect")}</option>
                  {areas.map((o) => (
                    <option key={o.value} value={o.value}>
                      {o.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.types")}</label>
                <div className="flex flex-wrap gap-4">
                  {partnerTypes.map((pt) => (
                    <label key={pt.value} className="flex items-center gap-2 cursor-pointer">
                      <input type="checkbox" name="type" value={pt.value} className="accent-primary w-4 h-4" />
                      <span className="text-sm text-on-surface">{pt.label}</span>
                    </label>
                  ))}
                </div>
              </div>
              <div>
                <label className="font-label text-xs font-bold uppercase tracking-wide text-on-surface-variant block mb-2">{t("labels.message")}</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder={t("placeholders.message")}
                  className="w-full px-4 py-3 bg-surface-container rounded-xl text-on-surface placeholder-on-surface-variant/40 focus:outline-none focus:ring-2 focus:ring-primary/30 text-sm resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={submitStatus === "loading"}
                className="w-full butler-gradient text-white py-4 rounded-xl font-bold text-base cloud-shadow hover:scale-[1.01] active:scale-[0.99] transition-transform flex items-center justify-center gap-2 disabled:opacity-60 disabled:scale-100 disabled:cursor-not-allowed"
              >
                {submitStatus === "loading" ? (
                  <>
                    <span className="material-symbols-outlined text-[20px] animate-spin">progress_activity</span>
                    {t("submitting")}
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined text-[20px]">send</span>
                    {t("submit")}
                  </>
                )}
              </button>
              <p className="text-xs text-on-surface-variant text-center font-label">
                {t("form.footerPrefix")}
                <a href="mailto:spark@sparklands.co" className="text-primary font-bold hover:underline">
                  spark@sparklands.co
                </a>
                ·
                <a href="tel:02-8177-7085" className="text-primary font-bold hover:underline">
                  (02) 8177-7085
                </a>
              </p>
            </form>
          </div>
        </div>
      </section>

      <div className="max-w-4xl mx-auto px-6 lg:px-12 pb-8 text-center">
        <Link href="/" className="inline-flex items-center gap-2 text-primary font-bold font-label text-sm hover:gap-3 transition-all">
          <span className="material-symbols-outlined text-[18px]">arrow_back</span>
          {t("backHome")}
        </Link>
      </div>
    </div>
  );
}
