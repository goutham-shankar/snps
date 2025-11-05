'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Management from '../components/Management';

export default function ManagementPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20">
        <Management />
      </div>
      <Footer />
    </div>
  );
}
