// src/components/pages/Home.tsx

import AboutTeaser from '../home/AboutTeaser';
import BestOfPhotosSection from '../home/BestOfPhotosSection';
import ExploreSection from '../home/ExploreSection';
import FinalCtaHome from '../home/FinalCtaHome';
import Hero from '../home/Hero';
// import JournalTeaser from '../home/JournalTeaser';

export default function Home() {
  return (
    <div>
      <Hero />
      <BestOfPhotosSection />
      <ExploreSection />
      {/* <JournalTeaser /> */}
      <AboutTeaser />
      <FinalCtaHome />
    </div>
  );
}
