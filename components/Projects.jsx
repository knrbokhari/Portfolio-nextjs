import React from "react";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I&apos;ve Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Sass ContentPilot AI"
            backgroundImg="/assets/projects/content.png"
            projectUrl="/content-pilot-ai"
            tech="AI Project"
          />
          <ProjectItem
            title="Ecommerce Website"
            backgroundImg="/assets/projects/ecom.png"
            projectUrl="/ecommerce"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg="/assets/projects/social.jpg"
            projectUrl="/social"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Inventory Management System"
            backgroundImg="/assets/projects/super-system.jpg"
            projectUrl="/dashboard"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Manufacturer Website"
            backgroundImg="/assets/projects/manufacturer.jpg"
            projectUrl="/manufacturer"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="GYM Website"
            backgroundImg="/assets/projects/gym.png"
            projectUrl="/gymweb"
            tech="Front-End Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
