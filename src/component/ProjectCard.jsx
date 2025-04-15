import React from "react";

const ProjectCard = ({ image, title, description, url }) => {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      <div className="bg-gray-100 rounded-2xl transition-all duration-300 hover:shadow-lg hover:-translate-y-2 hover:bg-gray-200">
        <div className="p-4">
          <img
            src={image}
            alt={title}
            className="w-full rounded-lg mb-4 drop-shadow-sm"
          />

          <div className="flex flex-col justify-center p-5">
            <h3 className="text-xl font-medium text-gray-800">{title}</h3>
            <p className="text-gray-600">{description}</p>
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;