import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import RootLayout from "./components/RootLayout";
import Home from "./pages/Home";
import Cars from "./pages/Cars";
import Contact from "./pages/Contact";
import ScrollToTop from "./components/ScrollToTop";
import Checkout from "./pages/Checkout";
import Services from "./pages/Services";
import CarFleet from "./pages/CarFleet";
import { ReactLenis } from 'lenis/react';
import { scroller } from "react-scroll";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import PrivacyPolicy from "./pages/PrivacyPolicy";
gsap.registerPlugin(ScrollTrigger);

export const backendUrl = import.meta.env.VITE_BACKEND_URL

function App() {
  const location = useLocation();
  const [scrollToSection, setScrollToSection] = useState(null);

  useEffect(() => {
    if (location.pathname === "/" && scrollToSection) {
      scroller.scrollTo(scrollToSection, {
        duration: 500,
        smooth: true,
        offset: -130,
      });
      setScrollToSection(null); // Reset after scrolling
    }
  }, [location, scrollToSection]);

  useEffect(() => {
    // Kill previous ScrollTriggers
    ScrollTrigger.getAll().forEach((trigger) => trigger.kill());

    // Select elements and reinitialize animations
    const elements = gsap.utils.toArray(".reveal-up");

    elements.forEach((element) => {
      gsap.fromTo(
        element,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 2.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "bottom 80%",
            toggleActions: "restart none none none",
          },
        }
      );
    });

  }, [location.pathname]); // Re-run animation when route changes

  return (
    <ReactLenis root>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<RootLayout setScrollToSection={setScrollToSection} />}>
          <Route index element={<Home />} />
          <Route path="cars/oneway/:source" element={<Cars />} />
          <Route path="cars/roundtrip/:source" element={<Cars />} />
          <Route path="cars/local/:source/:packageType" element={<Cars />} />
          <Route path="car-fleet" element={<CarFleet />} />
          <Route path="services" element={<Services />} />
          <Route path="contact" element={<Contact />} />
          <Route path="privacy-policy" element={<PrivacyPolicy />} />
          <Route path="cars/checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </ReactLenis>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}