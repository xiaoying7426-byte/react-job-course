import React from "react";
import Hero from "../components/Hero";
import HomeCards from "../components/HomeCards";
import JobListings from "../components/JobListings";

const HomePage = () => (
  <>
    <Hero />
    <HomeCards />
    <JobListings isHome />
  </>
);

export default HomePage;