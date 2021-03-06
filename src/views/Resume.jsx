import React from "react";

import Header from "../components/resume/Header";
import FloatSocial from "../components/resume/FloatSocial";

import Personal from "../components/resume/Personal";
import Education from "../components/resume/Education";
import Contact from "../components/resume/Contact";
import Qualification from "../components/resume/Qualification";
import Award from "../components/resume/Award";
import Job from "../components/resume/Job";
import Certificate from "../components/resume/Certificate";
import Tool from "../components/resume/Tool";
import Footer from "../components/resume/Footer";

export default function Home() {
  return (
    <div>
      <Header />

      <div className="flex flex-wrap justify-center animate__animated animate__fadeInUp">
        <div className="w-full lg:w-full">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-4/12 mx-auto">
            <Personal />
          </div>
        </div>
        <div className="w-full lg:w-5/12">
          <Education />
          <Award />
          <Certificate />
        </div>
        <div className="w-full lg:w-5/12">
          <Contact />
          <Qualification />
          <Job />
        </div>
        <div className="w-full">
          <Tool />
        </div>
      </div>

      <Footer />

      <FloatSocial />
    </div>
  );
}
