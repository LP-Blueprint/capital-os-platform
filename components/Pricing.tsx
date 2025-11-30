export default function Pricing() {
  return (
    <section id="pricing" className="bg-black py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Pick Your Path</h2>
        <div className="bg-gray-900 border-2 border-[#ffb800] p-12 rounded">
          <h3 className="text-3xl font-bold mb-2">Annual Access</h3>
          <div className="text-5xl font-bold text-[#ffb800] mb-8">$999<span className="text-2xl text-gray-400">/year</span></div>
          <ul className="space-y-3 text-gray-300 mb-12">
            <li>✓ Weekly 1-on-1 feedback on YOUR capital formation strategy</li>
            <li>✓ 13 months of capital formation playbook</li>
            <li>✓ Non-anchor LP Directory (segmented, mapped, ready)</li>
            <li>✓ Unlimited diagnostic tools</li>
            <li>✓ AI narrative builder</li>
            <li>✓ Discord community (142+ GPs)</li>
            <li>✓ Priority support</li>
          </ul>
          <a 
            href="https://buy.stripe.com/fZu14mdow4FEaGL2NfcEw0I"
            className="w-full block text-center bg-[#ffb800] text-black px-8 py-4 font-bold text-lg hover:bg-opacity-90 transition"
          >
            GET STARTED NOW
          </a>
        </div>
      </div>
    </section>
  );
}
