import LineIcon from "@/app/components/LineIcon";
/** Terms of Service body (English) — informational translation */
export default function TermsDocEn() {
  const prohibited = [
    "Living things (including plants) or remains of any kind",
    "Food, perishables, or items affecting hygiene",
    "Flammable oils, solvents, or industrial chemicals",
    "Explosives, fireworks, gas, weapons",
    "Hazardous chemicals, radioactive/biohazard/toxic waste",
    "Items causing odor, noise, or vibration",
    "Illegal items or items against public order",
    "Cash, antiques, jewelry, securities over NTD 50,000 per item",
  ];
  return (
    <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5 prose">
      <div className="not-prose bg-primary/6 rounded-xl p-5 border-l-4 border-primary mb-8">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Please note:</strong> By downloading the Spark Space app or renting a unit, you agree to these Terms. If you disagree, do not use the service.
        </p>
      </div>

      <h2 id="t1">1. Use of service</h2>
      <p>Spark Space provides self-service smart storage rentals completed in the app—rental, contract, payment, access, and move-out.</p>
      <ul>
        <li>
          For users <strong>18 years or older</strong> only.
        </li>
        <li>Use constitutes acceptance of these Terms and applicable laws of Taiwan (R.O.C.).</li>
        <li>We may refuse or terminate users who violate these Terms.</li>
        <li>Storage rental is not residential or business registration use.</li>
      </ul>

      <h2 id="t2">2. Account responsibility</h2>
      <ul>
        <li>You must protect your login and dynamic access credentials.</li>
        <li>You are responsible for all activity on your account, including guests you authorize.</li>
        <li>Report unauthorized use immediately via LINE or phone.</li>
        <li>No sharing, lending, or transferring accounts.</li>
      </ul>

      <h2 id="t3">3. Term & fees</h2>
      <h3>Rental term</h3>
      <ul>
        <li>Contracts take effect after rent and deposit are paid.</li>
        <li>
          Renew at least <strong>14 days</strong> before expiry via the app with payment completed.
        </li>
        <li>If you do not move out before the term ends, we may auto-renew one month at list price.</li>
      </ul>
      <h3>Deposit</h3>
      <ul>
        <li>
          Deposit refunds within <strong>7 days</strong> after move-out, inspection, and settlement (card refund).
        </li>
      </ul>
      <h3>Plans</h3>
      <div className="not-prose overflow-x-auto my-3">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface-container">
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Plan</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Promo</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Notes</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Monthly</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">List price</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Most flexible</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Quarterly (3 mo)</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">5% off</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Paid upfront for 3 months</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Yearly (12 mo)</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">20% off</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Paid upfront for 12 months</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="t4">4. Late fees</h2>
      <ul>
        <li>
          If rent is unpaid for <strong>5 days</strong>, a daily late fee of <strong>1%</strong> of base rent begins on day 6.
        </li>
        <li>
          If unpaid for <strong>1 month</strong>, we may terminate the contract and treat stored goods as abandoned per policy.
        </li>
      </ul>

      <h2 id="t5">5. Move-out & early termination</h2>
      <h3>Monthly billing</h3>
      <ul>
        <li>Move out anytime in the app; unused days in the month are refunded daily.</li>
        <li>
          <strong>One month deposit</strong> may be retained as a cancellation fee; remainder refunded.
        </li>
      </ul>
      <h3>Quarterly / yearly promos</h3>
      <ul>
        <li>
          Early termination refunds list-price months not used (not the promo price), minus <strong>one month deposit</strong> as cancellation fee.
        </li>
      </ul>

      <h2 id="t6">6. Restrictions</h2>
      <ul>
        <li>No blocking common areas or disturbing others.</li>
        <li>No living, farming, illegal, or immoral use of units.</li>
        <li>No modifications without approval.</li>
        <li>Damage must be reimbursed.</li>
      </ul>
      <p>
        Upper-level units: total stored weight must not exceed <strong>200 kg</strong>.
      </p>

      <h2 id="t7">7. Prohibited items</h2>
      <div className="not-prose bg-red-50 border border-red-200 rounded-xl p-5 my-3">
        <p className="text-sm font-bold text-red-800 mb-3">The following are strictly prohibited. Violations may result in immediate termination:</p>
        <ul className="space-y-1.5 text-sm text-red-700">
          {prohibited.map((item) => (
            <li key={item} className="flex items-start gap-2">
              <span className="text-red-500 font-bold mt-0.5">✗</span>
              {item}
            </li>
          ))}
        </ul>
      </div>

      <h2 id="t8">8. Risk of loss</h2>
      <ul>
        <li>Use units with reasonable care; you are liable for damage you cause.</li>
        <li>We are not liable for high-value items (cash, antiques, jewelry, art over NTD 50,000 per item).</li>
      </ul>

      <h2 id="t9">9. Remedies</h2>
      <ul>
        <li>We may disable app access until rent is paid.</li>
        <li>
          If late fees exceed the deposit, we may terminate after <strong>10 days</strong> notice.
        </li>
      </ul>

      <h2 id="t10">10. Disclaimer</h2>
      <ul>
        <li>Service is provided as-is; we are not liable for indirect damages.</li>
        <li>No liability for outages due to force majeure.</li>
      </ul>

      <h2 id="t11">11. Intellectual property</h2>
      <p>Spark Space trademarks, logos, app, and website content are protected by IP laws.</p>

      <h2 id="t12">12. Service changes</h2>
      <p>
        We may modify, suspend, or discontinue features with <strong>30 days</strong> notice to active tenants where practicable.
      </p>

      <h2 id="t13">13. Changes to terms</h2>
      <p>
        Revised terms take effect <strong>7 days</strong> after posting. Continued use constitutes acceptance.
      </p>

      <h2 id="t14">14. Governing law & venue</h2>
      <p>
        Governed by the laws of Taiwan (R.O.C.). Disputes shall be heard by the <strong>Taipei District Court</strong> as the court of first instance.
      </p>

      <h2 id="t15">15. Contact</h2>
      <div className="not-prose bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">apartment</span>
          <div>
            <strong className="text-on-surface">Company:</strong>{" "}
            <span className="text-on-surface-variant">Spark Intelligence Technology Co., Ltd.</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">location_on</span>
          <div>
            <strong className="text-on-surface">Address:</strong>{" "}
            <span className="text-on-surface-variant">B1, No. 7-1, Yanji St., Songshan Dist., Taipei</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">mail</span>
          <div>
            <strong className="text-on-surface">Email:</strong>{" "}
            <a href="mailto:spark@sparklands.co" className="text-primary font-bold">
              spark@sparklands.co
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">call</span>
          <div>
            <strong className="text-on-surface">Phone:</strong>{" "}
            <a href="tel:02-8177-7085" className="text-primary font-bold">
              (02) 8177-7085
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <LineIcon className="h-[17px] w-[17px] text-primary" />
          <div>
            <strong className="text-on-surface">LINE:</strong>{" "}
            <a href="https://lin.ee/zL7pC2r" target="_blank" rel="noopener noreferrer" className="text-primary font-bold">
              Add friend
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
