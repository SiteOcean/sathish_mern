import React from 'react';

const experience = [
  {
    role: 'ReactJS Front End Developer',
    company: 'Zettastack in coimbatore',
    duration: '1 year',
    description: 'Developed dynamic and interactive web applications using ReactJS, HTML, CSS, and JavaScript. Worked closely with designers to implement responsive and user-friendly interfaces.',
  },
  {
    role: 'MERN Stack Developer',
    company: 'Siteocean pvt ltd in coimbatore',
    duration: '1.5 years',
    description: 'Built full-stack web applications using MongoDB, Express, React, and Node.js. Implemented RESTful APIs and integrated third-party services. Worked on improving performance and scalability of applications.',
  },
  {
    role: 'Trainer, Full-Stack',
    company: 'StateStreetIt in coimbatore',
    duration: '3 months',
    description: 'I had three months of experience as a MERN stack trainer at StateStreetIT. In this role, my responsibility was to train students to become full-stack web developers.',
  },
];

const Experiences = () => {
  return (
    <div data-aos="fade-up"
    data-aos-anchor-placement="top-center" data-aos-delay="100" className="bg-gradient-to-r from-purple-200 to-blue-100 p-6 rounded-lg shadow-md">
      <div className="space-y-6">
        {experience.map((exp, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow hover:scale-105 duration-700">
            <h3 className="text-xl font-semibold text-purple-400">{exp.role}</h3>
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
