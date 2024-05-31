import React from 'react';

const experience = [
  {
    role: 'ReactJS Front End Developer',
    company: 'Company A',
    duration: '1 year',
    description: 'Developed dynamic and interactive web applications using ReactJS, HTML, CSS, and JavaScript. Worked closely with designers to implement responsive and user-friendly interfaces.',
  },
  {
    role: 'MERN Stack Developer',
    company: 'Company B',
    duration: '1.5 years',
    description: 'Built full-stack web applications using MongoDB, Express, React, and Node.js. Implemented RESTful APIs and integrated third-party services. Worked on improving performance and scalability of applications.',
  },
];

const Experiences = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
            <h3 className="text-xl font-semibold">{exp.role}</h3>
            <p className="text-gray-600">{exp.company}</p>
            <p className="text-gray-500">{exp.duration}</p>
            <p className="text-gray-700 mt-2">{exp.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiences;
