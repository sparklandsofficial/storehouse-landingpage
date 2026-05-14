/** 隱私權政策正文（簡體中文，與繁體版對應） */
export default function PrivacyDocZhCN() {
  return (
    <div className="bg-surface-container-lowest cloud-shadow rounded-2xl p-8 md:p-10 border border-outline-variant/5 prose">
      <div className="not-prose bg-primary/6 rounded-xl p-5 border-l-4 border-primary mb-8">
        <p className="text-sm text-on-surface-variant leading-relaxed">
          <strong className="text-on-surface">請注意：</strong>
          當您使用「Spark Space 星域智空間」APP 或相關服務時，即表示您同意本隐私权政策之全部內容。
        </p>
      </div>

      <h2 id="s1">1. 資料收集</h2>
      <p>星域智空間重視您的隐私权。基於提供服務之必要，我們可能收集以下類型的个人資料：</p>
      <h3>基本个人資料</h3>
      <ul>
        <li>姓名、手機號碼、电子邮件地址</li>
        <li>身份驗證資料（用於 APP 账号註冊）</li>
        <li>联系地址及帳單資訊</li>
      </ul>
      <h3>服務使用資料</h3>
      <ul>
        <li>租用记录、合約签署資料（電子簽章）</li>
        <li>付款資訊（信用卡末四碼，完整卡號由金流服務商保管）</li>
        <li>門禁进出记录（時間戳記、密碼使用记录）</li>
        <li>您授權他人进出的相關记录</li>
      </ul>
      <h3>技術資料</h3>
      <ul>
        <li>网站和应用程序使用數據（如 IP 位址、浏览器類型、访问時間等）</li>
        <li>设备識別碼、作業系統版本、APP 使用行為记录</li>
      </ul>
      <h3>影像資料</h3>
      <ul>
        <li>倉位內部及公共區域之監控錄影（詳見第 5 條）</li>
      </ul>

      <h2 id="s2">2. 資料使用</h2>
      <p>我們收集的資料將用於以下目的：</p>
      <ul>
        <li>
          <strong>提供和改進服務：</strong>處理租倉申請、合約管理、进出管理及退租等事項
        </li>
        <li>
          <strong>處理交易和付款：</strong>開立電子發票、處理信用卡扣款、退款作業
        </li>
        <li>
          <strong>身份驗證與安全管理：</strong>確認租戶身份、管控門禁进出權限
        </li>
        <li>
          <strong>与您溝通：</strong>发送缴费提醒、服務通知及客服往來
        </li>
        <li>
          <strong>分析與改善：</strong>分析匿名化使用數據，优化 APP 功能與服務品質
        </li>
        <li>
          <strong>法律遵循：</strong>配合主管機關調查或司法程序之需要
        </li>
      </ul>

      <h2 id="s3">3. 資料保護</h2>
      <p>我們採取適當的技術和組織措施來保護您的个人資料：</p>
      <ul>
        <li>
          <strong>传输加密：</strong>APP 與服务器間之資料传输採用 TLS 加密協定
        </li>
        <li>
          <strong>储存安全：</strong>敏感个人資料在資料庫中以加密方式储存
        </li>
        <li>
          <strong>存取控制：</strong>僅授權人員可存取个人資料，設有多重身份驗證機制
        </li>
        <li>
          <strong>最小化原則：</strong>僅收集履行服務所必要之最少个人資料
        </li>
        <li>
          <strong>事故应变：</strong>若發生个人資料外洩，本公司將依《个人資料保護法》規定通知受影響之當事人並採取補救措施
        </li>
      </ul>

      <h2 id="s4">4. 資料分享</h2>
      <p>除非法律要求或您同意，否則我們不會將您的个人資料贩售或出租予第三方。以下情形我們可能分享您的資料：</p>
      <ul>
        <li>
          <strong>金流服務商：</strong>處理信用卡授權及付款
        </li>
        <li>
          <strong>電子發票服務商：</strong>依稅法規定開立及傳送統一發票
        </li>
        <li>
          <strong>云端服務供應商：</strong>提供 APP 系統及資料储存服務（均受保密協議約束）
        </li>
        <li>
          <strong>法律要求：</strong>依法律規定或主管機關、法院之合法要求
        </li>
        <li>
          <strong>企業交易：</strong>若發生合併或收購，我們將事先通知您
        </li>
      </ul>

      <h2 id="s5">5. 門禁系統與監控影像</h2>
      <h3>門禁进出记录</h3>
      <p>
        每次进出均記錄時間戳記及密碼使用類型，用於安全管理及爭議解決。保存期間為 <strong>180 天</strong>
        ，期滿自動删除。
      </p>
      <h3>監控影像</h3>
      <ul>
        <li>倉位內部影像僅供該倉位租戶本人透過 APP 即時查看，本公司人員非必要不得存取</li>
        <li>
          公共區域影像保存期間為 <strong>30 天</strong>，逾期自動覆蓋
        </li>
        <li>影像僅用於安全保護目的，不得用於廣告或行銷</li>
        <li>司法機關合法調查、消防安檢或安全緊急事件時，本公司得調取影像</li>
      </ul>

      <h2 id="s6">6. 資料保存期限</h2>
      <div className="not-prose overflow-x-auto my-4">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="bg-surface-container">
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">資料類別</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">保存期間</th>
              <th className="text-left px-4 py-3 font-bold text-on-surface border border-outline-variant/20">依據</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-outline-variant/10">
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">租倉合約與交易记录</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">合約終止後 5 年</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">民法消滅時效</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">發票與財務记录</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">開立後 5 年</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">稅捐稽徵法</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">門禁进出记录</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">180 天</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">安全管理必要</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">公共區域監控影像</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">30 天</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">安全管理必要</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">APP 账号資料</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">账号删除後 30 天</td>
              <td className="px-4 py-3 text-on-surface-variant border border-outline-variant/10">個資法</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 id="s7">7. 您的權利</h2>
      <p>依據《个人資料保護法》第 3 條，您享有以下權利：</p>
      <ul>
        <li>
          <strong>查詢或阅览：</strong>確認本公司是否持有您的資料並請求阅览
        </li>
        <li>
          <strong>补充或更正：</strong>若資料不正確，請求补充或更正
        </li>
        <li>
          <strong>停止收集或利用：</strong>符合法定事由時，請求停止處理您的資料
        </li>
        <li>
          <strong>删除：</strong>符合法定事由時，請求删除（依法須保存者除外）
        </li>
      </ul>
      <div className="not-prose bg-surface-container rounded-xl p-4 border border-outline-variant/10 mt-3">
        <p className="text-sm text-on-surface-variant">
          請透過 APP 账号設定或聯繫{" "}
          <a href="mailto:spark@sparklands.co" className="text-primary font-bold">
            spark@sparklands.co
          </a>{" "}
          行使您的權利。本公司將於 <strong className="text-on-surface">30 日內</strong>回覆。
        </p>
      </div>

      <h2 id="s8">8. Cookie 政策</h2>
      <p>本公司网站使用 Cookie 提升使用體驗及分析服務使用狀況：</p>
      <ul>
        <li>
          <strong>必要性 Cookie：</strong>維持登入狀態及基本功能，無法關閉
        </li>
        <li>
          <strong>分析性 Cookie：</strong>了解网站使用狀況，可透過浏览器設定關閉
        </li>
      </ul>

      <h2 id="s9">9. 未成年人保護</h2>
      <p>
        本公司服務限 18 歲（含）以上成年人使用，不會在明知的情況下收集未成年人个人資料。若發現未成年人已提供資料，請立即聯繫我們，本公司將儘速删除。
      </p>

      <h2 id="s10">10. 政策更新</h2>
      <p>
        我們可能不時更新本隐私权政策。任何重大變更將透過 APP 通知及本頁面公佈，修訂後政策於公告後 <strong>7 日</strong>
        起生效。繼續使用本公司服務，即表示您同意修訂後之政策。
      </p>

      <h2 id="s11">11. 联系我們</h2>
      <div className="not-prose bg-surface-container-lowest border border-outline-variant/10 rounded-xl p-5 space-y-3">
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">apartment</span>
          <div>
            <strong className="text-on-surface">公司名稱：</strong>
            <span className="text-on-surface-variant">星域智慧科技股份有限公司</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">location_on</span>
          <div>
            <strong className="text-on-surface">地址：</strong>
            <span className="text-on-surface-variant">台北市松山區延吉街 7-1 號 B1</span>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">mail</span>
          <div>
            <strong className="text-on-surface">電子信箱：</strong>
            <a href="mailto:spark@sparklands.co" className="text-primary font-bold">
              spark@sparklands.co
            </a>
          </div>
        </div>
        <div className="flex items-center gap-3 text-sm">
          <span className="material-symbols-outlined text-primary text-[17px]">call</span>
          <div>
            <strong className="text-on-surface">電話：</strong>
            <a href="tel:02-8177-7085" className="text-primary font-bold">
              (02) 8177-7085
            </a>
          </div>
        </div>
      </div>
      <p className="mt-4 text-xs text-on-surface-variant">
        本政策受中華民國法律管轄。因本政策所生之爭議，雙方同意以台灣台北地方法院為第一審管轄法院。
      </p>
    </div>
  );
}
