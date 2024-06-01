import React from 'react';

const skills = [
  {
    category: 'Programming Languages',
    items: ['JavaScript', 'Java', 'C++'],
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React', 'Next.js', 'Mobx', 'DND', 'Express'],
  },
  {
    category: 'Tools & Technologies',
    items: ['Git', "Vercel",'Render.com'],
  },
];

const Skills = () => {
  return (
    // <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-4xl w-full mx-auto p-6 rounded-lg bg-gradient-to-r from-purple-200 to-blue-100 text-white shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skillCategory, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-4 text-purple-400">{skillCategory.category}</h2>
              <ul className="list-disc list-inside text-[#918d8d]">
                {skillCategory.items.map((skill, i) => (
                  <li key={i} className="font-medium">{skill}</li>
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
