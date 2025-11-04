'use client';

import Header from '../components/Header';
import Achievements from '../components/Achievements';
import Footer from '../components/Footer';

export default function AchievementsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Achievements />
      </div>
      <Footer />
    </div>
  );
}



