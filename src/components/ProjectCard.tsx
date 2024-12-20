import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
      <div className="flex items-center gap-4 mb-4">
        <div className="text-blue-400">
          {icon}
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ProjectCard;