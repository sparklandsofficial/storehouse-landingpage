import type { AbstractIntlMessages } from "next-intl";
import { common, isAppLocale, type AppLocale } from "./blocks/common";
import { pricing } from "./blocks/pricing";
import { process } from "./blocks/process";
import { locations } from "./blocks/locations";
import { faqPage } from "./blocks/faqPage";
import { faqSidebar } from "./blocks/faqSidebar";
import { misc, resetPassword, paylink, downloads } from "./blocks/misc";
import { homeBranch } from "./blocks/homeBranch";
import { homePage } from "./blocks/homePage";
import { privacyPage } from "./blocks/privacyPage";
import { termsPage } from "./blocks/termsPage";
import { aboutPage } from "./blocks/aboutPage";
import { partnersPage } from "./blocks/partnersPage";
import { franchise } from "./blocks/franchise";
import { branchDetailPage } from "./blocks/branchDetailPage";
import { cabinetPage } from "./blocks/cabinetPage";

export function buildMessages(locale: string): AbstractIntlMessages {
  const l: AppLocale = isAppLocale(locale) ? locale : "zh-TW";
  const c = common[l];
  const m = misc[l];
  return {
    metadata: c.metadata,
    nav: c.nav,
    footer: c.footer,
    misc: m,
    PricingPage: pricing[l],
    ProcessPage: process[l],
    LocationsPage: locations[l],
    FaqPage: faqPage[l],
    FaqSidebar: faqSidebar[l],
    ResetPasswordPage: resetPassword[l],
    PaylinkPage: paylink[l],
    DownloadsPage: downloads[l],
    HomeBranchPage: homeBranch[l],
    HomePage: homePage[l],
    PrivacyPage: privacyPage[l],
    TermsPage: termsPage[l],
    AboutPage: aboutPage[l],
    PartnersPage: partnersPage[l],
    Franchise: franchise[l],
    BranchDetailPage: branchDetailPage[l],
    CabinetPage: cabinetPage[l],
  } as unknown as AbstractIntlMessages;
}

export type { AppLocale };
