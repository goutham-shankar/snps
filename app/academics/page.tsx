'use client';

import Header from '../components/Header';
import Academics from '../components/Academics';
import Footer from '../components/Footer';

export default function AcademicsPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-24">
        <Academics />
      </div>
      <Footer />
    </div>
  );
}



