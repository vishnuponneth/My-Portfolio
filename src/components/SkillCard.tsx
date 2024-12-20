import React from 'react';

interface SkillCardProps {
  icon: React.ReactNode;
  title: string;
  skills: string[];
}

const SkillCard: React.FC<SkillCardProps> = ({ icon, title, skills }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <ul className="space-y-2">
        {skills.map((skill, index) => (
          <li key={index} className="text-gray-300">{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;