import React from 'react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Java', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Express'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', 'Docker', 'AWS', 'Webpack'],
  },
];

const Skills = () => {
  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-gray-50 p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4">{skillCategory.category}</h2>
              <ul className="list-disc list-inside">
                {skillCategory.items.map((skill, i) => (
                  <li key={i} className="text-gray-700">{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    // </div>
  );
};

export default Skills;
