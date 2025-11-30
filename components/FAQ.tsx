'use client';
import { useState } from 'react';

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);
  const faqs = [
    { q: "I'm not raising yet. Why join now?", a: "Because you're already behind. If you want to raise in 2 years, you're scouting your anchor now. Join now. Stay in formation." },
    { q: "I'm first-time. Will this work?", a: "Yes. Capital formation mechanics are the same. We work with fundless, angels, PE, VC. Playbook works at every stage." },
    { q: "How quickly will I see results?", a: "Week 1: clarity on what's killing your fundraise. Week 2-3: narrative sharpened. Month 1: first strategic LP conversations." },
  ];

  return (
    <section className="bg-gradient-to-b from-black to-[#1a1a1a] py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Questions?</h2>
        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="border border-gray-800 rounded">
              <button onClick={() => setOpen(open === i ? null : i)} className="w-full p-6 text-left flex justify-between hover:bg-gray-900 bg-gray-800">
                <h3 className="font-bold">{faq.q}</h3>
                <span className="text-[#ffb800] text-2xl">{open === i ? '−' : '+'}</span>
              </button>
              {open === i && <div className="p-6 bg-gray-950 border-t border-gray-800 text-gray-300">{faq.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
