export default function TimeMatters() {
  return (
    <section className="bg-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-white">
          Time is Money. Delay is Destruction.
        </h2>
        <p className="text-center text-[#ffb800] text-lg mb-16">
          Every month you delay raising Fund II costs you millions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-gray-900 rounded p-8 border border-gray-800">
            <p className="text-gray-400 text-sm mb-2">MANAGEMENT FEES LOST</p>
            <p className="text-4xl font-bold text-red-400">$4M</p>
            <p className="text-gray-400 text-sm mt-4">Each year you delay Fund II deployment</p>
          </div>

          <div className="bg-gray-900 rounded p-8 border border-gray-800">
            <p className="text-gray-400 text-sm mb-2">LP RETURNS LOST (IRR DRAG)</p>
            <p className="text-4xl font-bold text-red-400">$4M-$8M</p>
            <p className="text-gray-400 text-sm mt-4">200-400 bps drag per delayed year</p>
          </div>

          <div className="bg-gray-900 rounded p-8 border-2 border-[#ffb800]">
            <p className="text-[#ffb800] text-sm mb-2 font-bold">TOTAL 3-YEAR COST</p>
            <p className="text-4xl font-bold text-[#ffb800]">$17M-$29M</p>
            <p className="text-gray-400 text-sm mt-4">Gone forever. Destroyed by delay.</p>
          </div>
        </div>

        <div className="bg-[#4a5fff] bg-opacity-10 border border-[#4a5fff] rounded p-8 text-center">
          <p className="text-white text-xl font-bold mb-4">
            This is why we filter for BEHAVIOR, not money.
          </p>
          <p className="text-gray-300">
            We don't charge a high upfront fee because that's a weak filter. It only tests liquidity, not commitment. We filter for time commitment and execution because time is the only resource that actually predicts success. Show up. Execute. Earn results.
          </p>
        </div>
      </div>
    </section>
  );
}
