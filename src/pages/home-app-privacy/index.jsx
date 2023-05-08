import React, { useEffect, useRef } from 'react';
//= Scripts
import navbarScrollEffect from "common/navbarScrollEffect";
//= Layout
import MainLayout from 'layouts/Main';
//= Components
import TopNav from 'components/Navbars/TopNav';
import Navbar from 'components/Navbars/AppNav';
import Services from 'components/App/Services';
import About from 'components/App/About';
import Business from 'components/App/Businesses';
import BusinessOffers from 'components/App/BusinessOffers';
import PrivacyPolicy from 'components/App/PrivacyPolicy';
import Testimonials from 'components/App/Testimonials';
import Footer from 'components/App/Footer';

const PrivacyPolicies = () => {
  const navbarRef = useRef(null);

  useEffect(() => {
    navbarScrollEffect(navbarRef.current);
  }, [navbarRef]);

  return (
    <MainLayout>
      <TopNav style="4" />
      <Navbar navbarRef={navbarRef} />
      <main className="services-page style-5">
        <PrivacyPolicy />
        {/* <Services /> */}
        {/* <Business /> */}
        {/* <BusinessOffers /> */}
        {/* <About noFirstContent noIntegration noWave /> */}
        {/* <Testimonials /> */}
      </main>
      <Footer noWave />
    </MainLayout>
  )
}

export const Head = () => {
  return (
    <>
      <title>Juiceme.Inc</title>
      <link rel="stylesheet" href="/assets/css/lib/bootstrap.min.css" />
      <link rel="stylesheet" href="/assets/css/style.css" />
    </>
  )
}

export default PrivacyPolicies;