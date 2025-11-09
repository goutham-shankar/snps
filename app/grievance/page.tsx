'use client';

import Header from '../components/Header';
import Footer from '../components/Footer';
import Grievance from '../components/Grievance';

export default function GrievancePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-20 md:pt-10">
        <Grievance />
      </div>
      <Footer />
    </div>
  );
}