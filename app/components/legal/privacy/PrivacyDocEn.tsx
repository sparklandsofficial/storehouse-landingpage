/** Privacy policy body (English) — informational translation; IDs match TOC anchors */
export default function PrivacyDocEn() {
  return (
    <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5 prose">
      <div className="not-prose bg-primary/6 rounded-xl p-5 border-l-4 border-primary mb-8">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">Please note:</strong> By using the Spark Space app or related services, you agree to this Privacy Policy in full.
        </p>
      </div>

      <h2 id="s1">1. Data we collect</h2>
      <p>To operate Spark Space, we may collect the following categories of personal data:</p>
      <h3>Basic profile</h3>
      <ul>
        <li>Name, mobile number, email address</li>
        <li>Identity verification data used for account registration</li>
        <li>Contact and billing information</li>
      </ul>
      <h3>Service usage</h3>
      <ul>
        <li>Rental records and e-contract / e-signature data</li>
        <li>Payment data (e.g., last four digits of card; full PAN is held by the payment processor)</li>
        <li>Access logs (timestamps, credential usage)</li>
        <li>Records of guests or movers you authorize</li>
      </ul>
      <h3>Technical data</h3>
      <ul>
        <li>Website/app usage (IP address, browser type, timestamps)</li>
        <li>Device identifiers, OS version, in-app analytics</li>
      </ul>
      <h3>Video</h3>
      <ul>
        <li>In-unit and common-area CCTV as described in Section 5</li>
      </ul>

      <h2 id="s2">2. How we use data</h2>
      <p>We use data to:</p>
      <ul>
        <li>
          <strong>Provide and improve the service:</strong> rentals, contracts, access, move-out
        </li>
        <li>
          <strong>Process payments:</strong> e-invoices, card charges, refunds
        </li>
        <li>
          <strong>Security:</strong> verify tenants and manage access rights
        </li>
        <li>
          <strong>Communicate:</strong> billing reminders, service notices, support
        </li>
        <li>
          <strong>Analytics:</strong> aggregated usage to improve the app
        </li>
        <li>
          <strong>Legal compliance:</strong> lawful requests from authorities or courts
        </li>
      </ul>

      <h2 id="s3">3. Protection</h2>
      <p>We apply appropriate technical and organizational measures, including:</p>
      <ul>
        <li>
          <strong>Encryption in transit (TLS)</strong> between the app and our servers
        </li>
        <li>
          <strong>Encrypted storage</strong> for sensitive fields where applicable
        </li>
        <li>
          <strong>Access controls</strong> and authentication for staff
        </li>
        <li>
          <strong>Data minimization</strong>—only what we need to deliver the service
        </li>
        <li>
          <strong>Incident response</strong> consistent with Taiwan&apos;s Personal Data Protection Act
        </li>
      </ul>

      <h2 id="s4">4. Sharing</h2>
      <p>We do not sell your personal data. We may share data with:</p>
      <ul>
        <li>
          <strong>Payment processors</strong> for authorization and settlement
        </li>
        <li>
          <strong>E-invoice providers</strong> as required by tax law
        </li>
        <li>
          <strong>Cloud/hosting vendors</strong> under confidentiality obligations
        </li>
        <li>
          <strong>Legal requests</strong> when required by law
        </li>
        <li>
          <strong>Corporate transactions</strong>—with prior notice on mergers or acquisitions
        </li>
      </ul>

      <h2 id="s5">5. Access logs & video</h2>
      <h3>Access logs</h3>
      <p>
        Each entry/exit may be logged with timestamps and credential type for security and dispute resolution. Logs are kept for <strong>180 days</strong> then deleted.
      </p>
      <h3>Video</h3>
      <ul>
        <li>In-unit live view is available to the renting tenant; staff access is limited to what is necessary.</li>
        <li>Common-area footage is retained about <strong>30 days</strong> then overwritten.</li>
        <li>Video is for security—not for advertising.</li>
        <li>We may disclose footage for lawful investigations, safety inspections, or emergencies.</li>
      </ul>

      <h2 id="s6">6. Retention</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface-container">
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Category</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Retention</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">Basis</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Contracts & transactions</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">5 years after contract ends</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Civil statute of limitations</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Invoices & finance</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">5 years from issue</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Tax law</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Access logs</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">180 days</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Security necessity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Common-area video</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">30 days</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Security necessity</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">Account data</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">30 days after deletion</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">PDPA</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="s7">7. Your rights</h2>
      <p>Under Taiwan&apos;s PDPA you may request to access, correct, restrict processing, or delete data where applicable.</p>
      <div className="not-prose bg-surface-container rounded-xl p-4 border border-outline-variant/10 mt-3">
        <p className="text-sm text-on-surface-variant">
          Contact{" "}
          <a href="mailto:spark@sparklands.co" className="text-primary font-bold">
            spark@sparklands.co
          </a>{" "}
          or use in-app settings. We respond within <strong className="text-on-surface">30 days</strong>.
        </p>
      </div>

      <h2 id="s8">8. Cookies</h2>
      <p>Our website may use cookies for essential functionality and analytics. You can disable analytics cookies in your browser.</p>

      <h2 id="s9">9. Minors</h2>
      <p>Our service is for adults 18+. We do not knowingly collect data from minors. Contact us if you believe a minor submitted data.</p>

      <h2 id="s10">10. Updates</h2>
      <p>
        We may update this policy. Material changes will be announced in the app and on this page and take effect <strong>7 days</strong> after posting. Continued use means you accept the updated policy.
      </p>

      <h2 id="s11">11. Contact</h2>
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
      </div>
      <p className="mt-4 text-xs text-on-surface-variant">
        This policy is governed by the laws of Taiwan (R.O.C.). Disputes shall be submitted to the Taipei District Court as the court of first instance.
      </p>
    </div>
  );
}
