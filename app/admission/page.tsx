'use client';

import Header from '../components/Header';
import Admission from '../components/Admission';
import Footer from '../components/Footer';

export default function AdmissionPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Admission />
      </div>
      <Footer />
    </div>
  );
}



