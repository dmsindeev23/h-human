import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Hero } from '@/sections/home/Hero';
import { WhatIsIt } from '@/sections/home/WhatIsIt';
import { HowItWorks } from '@/sections/home/HowItWorks';
import { Consultation } from '@/sections/home/Consultation';
import { Subscription } from '@/sections/home/Subscription';
import { About } from '@/sections/home/About';

export function Home() {
  return (
    <div className="min-h-screen bg-cream">
      <Navigation />
      <main>
        <Hero />
        <WhatIsIt />
        <HowItWorks />
        <Consultation />
        <Subscription />
        <About />
      </main>
      <Footer />
    </div>
  );
}
