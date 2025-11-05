'use client';

import Header from '../components/Header';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-24">
        <Contact />
      </div>
      <Footer />
    </div>
  );
}



