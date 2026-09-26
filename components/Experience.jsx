import React from "react";

const Experience = () => {
  return (
    <div id="experience" className="w-full p-2 pt-14 mb-5">
      <div className="max-w-[1240px] mx-auto">
        <div className="w-full">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Working Experience
          </p>

          <div className="flex flex-wrap justify-between items-center">
            <h2 className="pt-4 pb-2">
              Web Developer at LetsPhish{" "}
              <span className="text-xl text-gray-500">
                <i>(Part-Time)</i>
              </span>
            </h2>
            <span>Aug 2024 - Jun 2026</span>
          </div>
          <ul className="list-disc pl-10 mt-2">
            <li className="cursor-default">
              Contributed to the development of Plex Security, an AI-powered
              cybersecurity and security-awareness platform focused on phishing
              simulation and employee security awareness.
            </li>
            <li className="cursor-default">
              Implemented and maintained platform modules including courses,
              collections, assignments, interactive learning modules, reviews,
              risk-related features, and administrative workflows.
            </li>
            <li className="cursor-default">
              Developed interactive educational content and user-facing learning
              experiences with completion tracking and assessment workflows.
            </li>
            <li className="cursor-default">
              Collaborated with other developers to analyze requirements,
              implement features, debug issues, and improve existing
              functionality.
            </li>
          </ul>

          <div className="flex flex-wrap justify-between items-center">
            <h2 className="pt-4 pb-2">
              Full Stack Developer at Ejanani{" "}
              <span className="text-xl text-gray-500">
                <i>(Part-Time)</i>
              </span>
            </h2>
            <span>Mar 2023 - Present</span>
          </div>
          <p className=" text-gray-600 font-semibold">
            Developed, tested, and implemented new features based on client
            requirements using TypeScript, Node.js, NestJS, Prisma, PostgreSQL,
            Next.js, and Redux.
          </p>
          <ul className="list-disc pl-10 mt-2">
            <li className="cursor-default">
              Collaborated with cross-functional teams to gather and refine
              requirements, ensuring the seamless enhancement of existing
              systems and the successful implementation of new features.
            </li>
            <li className="cursor-default">
              Containerized applications using Docker and Docker Compose and
              managed production services using Nginx, PM2, and Linux servers.
            </li>
            <li className="cursor-default">
              Performed database backup and server maintenance tasks to improve
              application reliability and operational stability.{" "}
            </li>
            <li className="cursor-default">
              Optimized application performance on both the front-end and
              back-end, utilizing advanced profiling and performance-tuning
              techniques to ensure fast response times and smooth user
              interactions.
            </li>
            <li className="cursor-default">
              Enhanced query performance by implementing efficient data
              retrieval strategies and optimizing database schema designs.
            </li>
            <li className="cursor-default">
              Designed and maintained database schemas using PostgreSQL and
              Prisma, ensuring data integrity, and scalability.
            </li>
            <li className="cursor-default">
              Ensuring uninterrupted service and improved user experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
