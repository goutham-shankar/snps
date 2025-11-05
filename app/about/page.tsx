'use client';

import Header from '../components/Header';
import About from '../components/About';
import Footer from '../components/Footer';

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-10">
        <About />
      </div>
      <Footer />
    </div>
  );
}



