import React from "react";
import Hero from "../components/Home/Hero";
import WhyUs from "../components/Home/WhyUs";
import Features from "../components/Home/Features";
import CompanyStats from "../components/Home/CompanyStats";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Navbar />
      <Hero />
      <WhyUs />
      <Features />
      <CompanyStats />
      <Footer />
    </div>
  );
};

export default Home;
