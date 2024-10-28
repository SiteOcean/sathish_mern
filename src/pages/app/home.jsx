import React from 'react';
import Head from 'next/head';
import Navbar from '@/components/navbar';
import Skills from './skills';
import Experiences from './experiences';
import Education from './educations';
import Footer from '@/components/footer';
import { FaWhatsapp } from "react-icons/fa";
import ProjectsSection from './projects';
import ContactSection from './contactSection';

export default function AppHome() {

const handleRedirect = () => {
  const whatsappURL = `https://wa.me/${9856535653}?text=${'Hi, Sathish '}`;
  window.location.href = whatsappURL;
};


  return (
    <div>
      <Head>
        <title>Sathish MERN</title>
        <meta name="description" content="My professional resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-purple-300 text-blue-500 min-h-screen p-2 space-y-8 relative">
        <span onClick={handleRedirect} className='fixed cursor-pointer animate-bounce bottom-5 right-4 md:right-8 p-3 rounded-full bg-purple-400
        text-[30px] text-white z-50'><FaWhatsapp/></span>
        {/* Banner */}
        <div className="container flex mx-auto min-h-[80vh] justify-center items-center bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row space-y-6 justify-center items-center">
            <div className="flex-1 space-y-1">
              <>
                <h1 className="text-[30px] font-bold group uppercase duration-500 bg-gradient-to-r from-purple-400 to-blue-300 text-white p-3">Hi, I am <span className='group-hover:underline duration-300 group-hover:leading-snug'>SathishKumar R</span></h1>
                <h3 className="text-[20px] mern">MERN Stack developer</h3>
              </>
              <p className="text-[16px] text-gray-400 leading-relaxed font-semibold">
                with 3 years of experience in designing, implementing, and maintaining robust web applications. Proven ability to translate complex business requirements into scalable and efficient technical solutions. Strong understanding of front-end and back-end development principles, with a passion for creating seamless user experiences. Skilled in developing dynamic web applications with real-time updates and interactive interfaces.
              </p>
            </div>
            <div className="flex-1 grid justify-center items-center" data-aos="flip-left">
              <img src={'/sathish.jpg'} alt="img" width={100} height={100} className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] rounded-full hover:scale-95 duration-1000" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="container flex flex-col sectionScrollInSmall md:sectionScrollInLg mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg  p-3 md:p-6 mt-5" id="education">
          <h2 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Education</h2>
          <Education />
        </div>

        {/* Skills */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg  p-3 md:p-6" id="skills">
          <h1 className="text-3xl font-bold mb-6 text-center text-purple-500 underline underline-offset-4">Skills</h1>
          <Skills />
        </div>

        {/* Experiences */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg  p-3 md:p-6" id="experiences">
          <h2 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Experiences</h2>
          <Experiences />
        </div>

        {/* projects */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg p-3 md:p-6" id="projects">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Projects</h1>

        <ProjectsSection/>
        </div>

      {/* contact section */}
      <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[82vh] justify-center items-center bg-white shadow-lg rounded-lg p-3 md:p-6" id="contact">
        <h1 className="text-3xl font-bold mb-4 text-center text-purple-500 underline underline-offset-4">Get in Touch</h1>
        <ContactSection/>
      </div>
      </main>
      <Footer />
    </div>
  );
}
