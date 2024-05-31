import React from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '@/components/navbar';
import Skills from './skills';
import Experiences from './experiences';
import Education from './educations';
import Footer from '@/components/footer';
import {useScrollRestoration} from '../../components/useScrollRestoration'; // Adjust the path as needed

export default function AppHome() {
//   useScrollRestoration();

  return (
    <div>
      <Head>
        <title>My Resume</title>
        <meta name="description" content="My professional resume" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="bg-purple-200 text-blue-500 min-h-screen p-4 space-y-8">
        {/* Banner */}
        <div className="container flex mx-auto min-h-[85vh] justify-center items-center bg-white shadow-lg rounded-lg p-6">
          <div className="flex flex-col md:flex-row space-y-6 justify-center items-center">
            <div className="flex-1 space-y-1">
              <>
                <h1 className="text-[30px] font-bold uppercase bg-gradient-to-r from-purple-300 to-blue-200 text-white p-3">Hi, I am <span >SathishKumar R</span></h1>
                <h3 className="text-[23px]">MERN Stack developer</h3>
              </>
              <p className="text-[17px] text-gray-500 leading-relaxed">
                with 2.5 years of experience in designing, implementing, and maintaining robust web applications. Proven ability to translate complex business requirements into scalable and efficient technical solutions. Strong understanding of front-end and back-end development principles, with a passion for creating seamless user experiences. Skilled in developing dynamic web applications with real-time updates and interactive interfaces.
              </p>
            </div>
            <div className="flex-1 grid justify-center items-center">
              <img src={'/sathish.jpg'} alt="img" width={100} height={100} className="w-[400px] h-[400px] rounded-full" />
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="container flex flex-col sectionScrollInSmall md:sectionScrollInLg mx-auto min-h-[85vh] justify-center items-center bg-white shadow-lg rounded-lg p-6 mt-5" id="education">
          <h2 className="text-2xl font-bold mb-4 text-center">Education</h2>
          <Education />
        </div>

        {/* Skills */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[85vh] justify-center items-center bg-white shadow-lg rounded-lg p-6" id="skills">
          <h1 className="text-3xl font-bold mb-6 text-center">Skills</h1>
          <Skills />
        </div>

        {/* Experiences */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[85vh] justify-center items-center bg-white shadow-lg rounded-lg p-6" id="experiences">
          <h2 className="text-2xl font-bold mb-4 text-center">Experiences</h2>
          <Experiences />
        </div>

        {/* Projects */}
        <div className="container sectionScrollInSmall md:sectionScrollInLg flex flex-col mx-auto min-h-[85vh] justify-center items-center bg-white shadow-lg rounded-lg p-6" id="projects">
          <h1 className="text-3xl font-bold mb-4 text-center">Projects</h1>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 p-6">
            <Link href={'/app/todos'} className="rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/todos.jpg'} alt="img" width={100} height={100} className="w-[200px] rounded-md h-[200px]" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>ToDos</p>
            </Link>
            <Link href={'/app/reactdnd'} className="rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/social.png'}  quality={100} alt="img" className="w-[200px] h-[200px] rounded-md" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>React Drag & Drop</p>
            </Link>
            <Link href={'https://www.hospiron.in/'} className="rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/hospiron.png'} alt="img" width={100} height={100} className="w-[200px] rounded-md h-[200px]" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>Website 1</p>
            </Link>
            <Link href={'https://www.siteocean.in/'} className="rounded-md shadow-md  hover:scale-105 duration-500">
              <img src={'/siteocean.png'} alt="img" width={100} height={100} className="w-[200px] rounded-md h-[200px]" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>Website 2</p>
            </Link>
            <Link href={'https://kalai-mobiles.vercel.app/'} className="rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/website.png'} alt="img" width={100} height={100} className="w-[200px] rounded-md h-[200px]" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>Web App</p>
            </Link>
            <Link href={'https://chat-app-steel-theta.vercel.app/'} className="rounded-md shadow-md hover:scale-105 duration-500">
              <img src={'/chat.jpg'} alt="img" width={100} height={100} className="w-[200px] rounded-md h-[200px]" />
              <p className='font-bold p-2 text-gray-500 text-[19px]'>Chat App</p>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
