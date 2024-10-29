import React from 'react';
import { FaGraduationCap, FaBook } from 'react-icons/fa'; // Import icons for degree and courses

const education = [
  {
    degree: 'Diploma in Electronics and Communication Engineering (DECE)',
    institution: 'RVS Polytechnic College in Coimbatore',
    description: 'Completed with a focus on electronic circuits, microprocessors, and communication systems.',
    icon: <FaGraduationCap className="text-purple-400 text-2xl" />, // Icon for diploma
    img:"/honey.gif"
  },
  {
    degree: 'Courses',
    institution: 'ManFree Technology Coimbatore',
    description: 'Completed courses in C, C++, Java',
    icon: <FaBook className="text-blue-400 text-2xl" />, // Icon for short courses
    img:'/orangeButterfly.gif'
  },
  {
    degree: 'Courses',
    institution: 'N School Academy Coimbatore',
    description: 'Completed courses in MERN Stack (Html, Css, Bootstrap, Javascript, React, Nodejs, Expressjs, Mongodb).',
    icon: <FaBook className="text-green-400 text-2xl" />, // Icon for short courses
    img:'/pinkFlower.gif'
  },
];

const Education = () => {
  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-delay="100"
      className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-200 to-blue-100 text-white"
    >
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white relative overflow-hidden text-purple-400 duration-700 p-4 rounded-lg shadow flex items-start gap-4">
            {/* {edu.icon} Render the icon */}
            <img src={edu.img} alt="" className=' h-[50px] w-[50px]'/>
            <div className='absolute inset-0 flex justify-center items-center'>
            <img src={"/reactSpin.gif"} alt="" className=' opacity-30 h-[100px] w-[100px] md:w-[80px] md:h-[80px] mx-auto'/>

            </div>
            <div>
              <h3 className="text-xl font-semibold">{edu.degree}</h3>
              <p className="text-gray-600">{edu.institution}</p>
              <p className="text-gray-700 mt-2">{edu.description}</p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
