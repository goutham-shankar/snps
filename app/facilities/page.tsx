'use client';

import Header from '../components/Header';
import Facilities from '../components/Facilities';
import Footer from '../components/Footer';

export default function FacilitiesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-20">
        <Facilities />
      </div>
      <Footer />
    </div>
  );
}



