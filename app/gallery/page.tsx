'use client';

import Header from '../components/Header';
import Gallery from '../components/Gallery';
import Footer from '../components/Footer';

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Gallery />
      </div>
      <Footer />
    </div>
  );
}



