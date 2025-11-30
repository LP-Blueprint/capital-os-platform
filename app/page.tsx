'use client';

import Hero from '@/components/Hero';
import Comparison from '@/components/Comparison';
import MathSection from '@/components/MathSection';
import Pricing from '@/components/Pricing';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Comparison />
      <MathSection />
      <Pricing />
      <FAQ />
      <Footer />
    </main>
  );
}
