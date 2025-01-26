import React from 'react';

const TechStack: React.FC = () => {
  const technologies = {
    'Frontend': ['React', 'Angular', 'Flutter', 'Tailwind CSS', 'Material UI'],
    'Backend': ['Spring Boot', 'Node.js', 'Express'],
    'Databases': ['MySQL', 'MongoDB'],
    'Cloud & DevOps': ['AWS', 'Docker', 'Kubernetes', 'Jenkins'],
    'Currently Learning': ['Go', 'Python', 'AI/ML'],
  };

  return (
    <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {Object.entries(technologies).map(([category, techs]) => (
        <div key={category} className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{category}</h3>
          <div className="flex flex-wrap gap-2">
            {techs.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TechStack;