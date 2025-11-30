export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Pick Your Path
        </h2>
        <p className="text-center text-[#ffb800] text-lg mb-16">
          No carry. No hidden fees. Pure behavior-based filtering.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Platform Tier */}
          <div className="bg-gray-900 border-2 border-[#ffb800] p-12 rounded">
            <h3 className="text-3xl font-bold text-white mb-2">Platform</h3>
            <div className="text-5xl font-bold text-[#ffb800] mb-8">$999<span className="text-xl text-gray-400">/year</span></div>
            
            <div className="bg-red-900 bg-opacity-20 border border-red-700 rounded p-4 mb-8">
              <p className="text-red-300 font-bold">SHOW UP OR CANCEL</p>
              <p className="text-gray-300 text-sm mt-2">
                Monday office hours. Discord active. Execute on the 7 items. If you're not committed, cancel. We'd rather you free up the seat for someone serious.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-white mb-4">Includes:</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✓ Monday office hours (1 hour/week, live)</li>
                <li>✓ Complete video library (every recording ever)</li>
                <li>✓ 750+ Non-Anchor LP database</li>
                <li>✓ 13 months of capital formation playbook</li>
                <li>✓ Unlimited diagnostic tools</li>
                <li>✓ AI narrative builder</li>
                <li>✓ Discord community (142+ real GPs)</li>
              </ul>
            </div>

            <a 
              href="https://buy.stripe.com/fZu14mdow4FEaGL2NfcEw0I"
              className="w-full block text-center bg-[#ffb800] text-black px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
            >
              JOIN PLATFORM NOW
            </a>
            
            <p className="text-gray-400 text-xs mt-4 text-center">
              1-year commitment. Show up or cancel anytime.
            </p>
          </div>

          {/* Premium Tier */}
          <div className="bg-gray-900 border-2 border-[#ffb800] p-12 rounded">
            <h3 className="text-3xl font-bold text-white mb-2">Premium</h3>
            <div className="text-5xl font-bold text-[#ffb800] mb-8">$7,875<span className="text-xl text-gray-400">/year</span></div>
            
            <div className="bg-[#4a5fff] bg-opacity-20 border border-[#4a5fff] rounded p-4 mb-8">
              <p className="text-[#ffb800] font-bold">ALL 7 ITEMS. NON-NEGOTIABLE.</p>
              <p className="text-gray-300 text-sm mt-2">
                Hit every single item. No partial credit. No excuses. Prove you're operationalized, then we introduce you to LPs who matter.
              </p>
            </div>

            <div className="mb-8">
              <h4 className="font-bold text-white mb-4">Everything in Platform PLUS:</h4>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li>✓ Direct LP introductions (~5/month, not 50)</li>
                <li>✓ Family Office & Fund-of-Funds database (70% of North America)</li>
                <li>✓ Executive coaching</li>
                <li>✓ Deal review & portfolio analysis</li>
                <li>✓ Anchor LP strategy</li>
                <li>✓ 2 hours/week minimum commitment</li>
              </ul>
            </div>

            <button 
              onClick={() => alert('Contact team@lpblueprint.com for Premium access')}
              className="w-full block text-center bg-[#ffb800] text-black px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
            >
              APPLY FOR PREMIUM
            </button>

            <p className="text-gray-400 text-xs mt-4 text-center">
              *Must hit ALL 7 items. 90 days minimum enrollment.
            </p>
          </div>
        </div>

        {/* The 7 Items */}
        <div className="mt-16 bg-gradient-to-r from-[#4a5fff] to-[#ffb800] rounded p-1">
          <div className="bg-black rounded p-8">
            <h3 className="text-2xl font-bold text-white mb-4">The 7 Non-Negotiable Items for Premium LP Intros</h3>
            <p className="text-gray-400 mb-8">
              Hit these. Every single one. This is how we know you won't waste an LP's time.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">1. CRM Live & Configured</p>
                <p className="text-gray-300 text-sm">Real pipeline visibility. Not spreadsheets.</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">2. LP Landing Pages Per Type</p>
                <p className="text-gray-300 text-sm">Institutional, family office, fund-of-funds.</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">3. All Partners Enrolled 90+ Days</p>
                <p className="text-gray-300 text-sm">Every partner. Not theoretically. Actively.</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">4. LP Deployed in Your Stage (18 mo)</p>
                <p className="text-gray-300 text-sm">Proof of recent deployment. Find it.</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">5. You Source the Evidence</p>
                <p className="text-gray-300 text-sm">We're not your research department.</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">6. Real Capital Commitment</p>
                <p className="text-gray-300 text-sm">2.5% min ($50M), 2% min ($100M+).</p>
              </div>
              <div className="border-l-4 border-[#ffb800] pl-4 py-2">
                <p className="text-[#ffb800] font-bold">7. You Have Bandwidth</p>
                <p className="text-gray-300 text-sm">3-4 people ($50M), 4-8 ($50-100M), 8+ ($100M+).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
