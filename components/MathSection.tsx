export default function MathSection() {
  const metrics = [
    { label: "Total Out-of-Pocket Cost", sprint: "$0 upfront + 1% carry (~$1M-$5M due)", os: "$2,997" },
    { label: "Fund II Close Timeline", sprint: "18-24 months (2.6 years industry average)", os: "6 months" },
    { label: "Management Fees Lost", sprint: "$4M (delayed Fund II deployment)", os: "$0 (deployed on schedule)" },
    { label: "LP Returns Lost", sprint: "$4M-$8M (IRR drag of 200-400 bps)", os: "$0 (full returns realized)" },
  ];

  return (
    <section className="bg-gradient-to-b from-[#1a1a1a] to-black py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">Total 3-Year Comparison</h2>
        <p className="text-center text-[#ffb800] text-2xl font-bold mb-12">$17M-$29M in Capital OS's favor</p>
        <div className="space-y-4 mb-16">
          {metrics.map((m, i) => (
            <div key={i} className="grid grid-cols-3 gap-4 bg-gray-900 rounded p-4">
              <div className="font-bold">{m.label}</div>
              <div className="text-gray-400">{m.sprint}</div>
              <div className="text-[#ffb800] font-bold">{m.os}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
