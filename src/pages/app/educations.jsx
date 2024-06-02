import React from 'react';

const education = [
  {
    degree: 'Diploma in Electronics and Communication Engineering (DECE)',
    institution: 'Your Institution Name',
    description: 'Completed with a focus on electronic circuits, microprocessors, and communication systems.',
  },
  {
    degree: 'Courses',
    institution: 'ManFree Technology Coimbatore',
    description: 'Completed courses in C, C++, Java',
  },
  {
    degree: 'Courses',
    institution: 'N school Academy Coimbatore',
    description: 'Completed courses in MERN Stack (Html, Css, Bootstrap, Javascript, React, Nodejs, Expressjs,Mongodb).',
  },
];

const Education = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="p-6 rounded-lg shadow-md bg-gradient-to-r from-purple-200 to-blue-100 text-white">
      <div className="space-y-6">
        {education.map((edu, index) => (
          <div key={index} className="bg-white text-purple-400 hover:scale-105 duration-700 p-4 rounded-lg shadow ">
            <h3 className="text-xl font-semibold">{edu.degree}</h3>
            <p className="text-gray-600">{edu.institution}</p>
            <p className="text-gray-700 mt-2">{edu.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
