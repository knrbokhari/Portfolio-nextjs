import Image from "next/image";
import Link from "next/link";
import React from "react";
import social from "../public/assets/projects/social.jpg";
import superSystem from "../public/assets/projects/super-system.jpg";
import ecom from "../public/assets/projects/ecom.png";
import manufacturer from "../public/assets/projects/manufacturer.jpg";
import gym from "../public/assets/projects/gym.png";
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
            title="Ecommerce Website"
            backgroundImg={ecom}
            projectUrl="/ecommerce"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Social Media App"
            backgroundImg={social}
            projectUrl="/social"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Inventory Management System"
            backgroundImg={superSystem}
            projectUrl="/dashboard"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="Manufacturer Website"
            backgroundImg={manufacturer}
            projectUrl="/manufacturer"
            tech="MERN Stack Project"
          />
          <ProjectItem
            title="GYM Website"
            backgroundImg={gym}
            projectUrl="/gymweb"
            tech="Front-End Project"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
