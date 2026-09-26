import React from "react";
import Head from "next/head";
import {
  FaGithub,
  FaLinkedinIn,
  FaMailBulk,
  FaStackOverflow,
} from "react-icons/fa";
import { HiMail } from "react-icons/hi";

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="Full Stack Developer with 2+ years of experience building and launching scalable software, e-commerce, and AI-based web apps. Skilled in creating full-stack solutions using TypeScript, ReactJS, Redux, NodeJS, NestJS, ExpressJS, MongoDB, PostgreSQL, and Prisma from front-end UI through to back-end RESTful APIs, databases, authentication, and payment gateways. Comfortable dealing with clients and collaborating in cross-disciplinary teams to create maintainable software solutions from business requirements. Experience with Docker, Nginx, Linux, Unit Testing Production deployment, and third-party API integration."
        />
        <link rel="icon" href="/logo.webp" />
      </Head>

      <div className="max-w-[940px] mx-auto p-2 pt-[120px]">
        <h2 className="text-center">Resume</h2>
        <div className="bg-[#d0d4d6]- w-full flex justify-between items-center">
          <h2 className="text-center">Kazi Naeem Rayhan</h2>
          <div className="flex">
            <a href="mailto:kazinaeemrayhan@gmail.com">
              <HiMail size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="http://www.linkedin.com/in/kazinaeemrayhan"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://github.com/knrbokhari"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a
              href="https://stackoverflow.com/users/19066276/kazi-naeem-rayhan"
              target="_blank"
              rel="noreferrer"
            >
              <FaStackOverflow size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
        <p className="text-xl font-bold">Full Stack Development</p>
        <div className="">
          <div className="text-left py-4 pb-2 text-xl font-bold uppercase tracking-wider">
            <p>Summary</p>
          </div>
          <p className="text-justify">
            Full Stack Developer with 2+ years of experience building and
            launching scalable software, e-commerce, and AI-based web apps.
            Skilled in creating full-stack solutions using TypeScript, ReactJS,
            Redux, NodeJS, NestJS, ExpressJS, MongoDB, PostgreSQL, and Prisma
            from front-end UI through to back-end RESTful APIs, databases,
            authentication, and payment gateways. Comfortable dealing with
            clients and collaborating in cross-disciplinary teams to create
            maintainable software solutions from business requirements.
            Experience with Docker, Nginx, Linux, Unit Testing Production
            deployment, and third-party API integration.
          </p>
        </div>

        {/* Skills */}
        <div className="text-left pt-4">
          <h5 className="text-left uppercase text-[18px] py-2">Skills</h5>

          <p className="pb-1">
            <span className="font-bold">Font-End:</span>
            <span className="pl-2"></span> React.js
            <span className="pl-2">|</span> Next.js
            <span className="px-2">|</span> Redux
            <span className="px-2">|</span> TypeScript
            <span className="px-2">|</span> Javascript
            <span className="px-2">|</span> Tailwind CSS
            <span className="px-2">|</span> MUI
            <span className="px-2">|</span> Bootstrap
            <span className="px-2">|</span> CSS
            <span className="px-2">|</span> SEO
          </p>
          <p className="pb-1">
            <span className="font-bold">Back-End:</span>
            <span className="px-2"></span> Node.js
            <span className="px-2">|</span> Nest.js
            <span className="px-2">|</span> Express
            <span className="px-2">|</span> JWT
            <span className="px-2">|</span> Unit Testing
            <span className="px-2">|</span> OpenAI API
            <span className="px-2">|</span> REST APIs
            <span className="px-2">|</span> S3
            <span className="px-2">|</span> API Documentation
            <span className="px-2">|</span> Logger
            <span className="px-2">|</span> Socket.io
            <span className="px-2">|</span> CI/CD Pipeline
            <span className="px-2">|</span> OOP
          </p>
          <p className="pb-1">
            <span className="font-bold">Database:</span>
            <span className="px-2"></span> MongoDB
            <span className="px-2">|</span> PostgreSQL
            <span className="px-2">|</span> MySQL
            <span className="px-2">|</span> Prisma
          </p>
          <p className="pb-1">
            <span className="font-bold">Tool:</span>
            <span className="px-2"></span> Docker
            <span className="px-2">|</span> Linux
            <span className="px-2">|</span> Stripe
            <span className="px-2">|</span> BKash
            <span className="px-2">|</span> SSL Commerz
            <span className="px-2">|</span> Nginx
            <span className="px-2">|</span> PM2
            <span className="px-2">|</span> Termius
            <span className="px-2">|</span> Postman
            <span className="px-2">|</span> Git
            <span className="px-2">|</span> GitHub
            <span className="px-2">|</span> Slack
            <span className="px-2">|</span> Jira
            <span className="px-2">|</span> Vercel
            <span className="px-2">|</span> Render
            <span className="px-2">|</span> Figma
          </p>
          <p className="pb-1">
            <span className="font-bold">Other Skills:</span>
            <span className="px-2"></span> Deploying Production applications
            <span className="px-2">|</span> Maintaining Production applications
            <span className="px-2">|</span> Code Review
            <span className="px-2">|</span> Agile Methodology
            <span className="px-2">|</span> Data Structures
            <span className="px-2">|</span> Algorithms
            <span className="px-2">|</span> SOLID Principles
            <span className="px-2">|</span> Problem-Solving
            <span className="px-2">|</span> Debugging.
          </p>
        </div>

        {/* Experience */}
        <h5 className="text-left uppercase text-[18px] pt-4">
          Professional Experience
        </h5>
        <div className="">
          <p className="italic">
            <span className="font-bold">Web Developer</span>
            <span className="px-2">|</span>
            <a
              target="_blank"
              href="https://www.letsphish.com"
              className="font-bold text-[blue]"
              rel="noreferrer"
            >
              LetsPhish
            </a>
          </p>
          <p className="py-1 italic">Remote ( Aug 2024 – Jun 2026 )</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="cursor-default">
              Contributed to the development of LetsPhish, an AI-powered
              cybersecurity and security awareness platform focused on phishing
              simulation and employee security awareness.
            </li>
            <li className="cursor-default">
              Engineered interactive cybersecurity interfaces using Next.js to
              streamline administrator risk management.
            </li>
            <li className="cursor-default">
              Developed AI-driven simulation modules that generate highly
              realistic phishing, smishing, vishing, and deepfake scenarios for
              enterprise security training.
            </li>
            <li className="cursor-default">
              Collaborated with other developers to analyze requirements,
              implement features, debug issues, and improve existing
              functionality.
            </li>
          </ul>
        </div>
        <div className="">
          <p className="italic">
            <span className="font-bold">Full Stack Developer</span>
            <span className="px-2">|</span>
            <a
              target="_blank"
              href="https://ejanani.com/"
              className="font-bold text-[blue]"
              rel="noreferrer"
            >
              Ejanani
            </a>
          </p>
          <p className="py-1 italic">Remote ( Mar 2023 – Present )</p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li className="cursor-default">
              Collaborated with cross-functional teams to gather and refine
              requirements, ensuring the seamless enhancement of existing
              systems and the successful implementation of new features.
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

        {/* PROJECT */}
        <h5 className="text-left uppercase text-[18px] pt-4">PROJECT</h5>
        <div className="">
          <p className="italic">
            <span className="font-bold italic">Ecommerce Website</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/AI-Content-Audit-SaaS"
                rel="noreferrer"
              >
                GitHub Client link
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/AI-Content-Audit-SaaS-api"
                rel="noreferrer"
              >
                GitHub Server link
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://ai-content-audit-saa-s.vercel.app"
                rel="noreferrer"
              >
                Live Website
              </a>
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              Designed and developed a multi-tenant SaaS platform for analyzing
              website pages and generating AI-powered website improvement
              recommendations.
            </li>
            <li>
              Implemented organization-based architecture with separate
              administrative and organization-level dashboards.
            </li>
            <li>
              Implemented audit scoring across categories including SEO,
              content, readability, accessibility, performance, and technical
              quality.
            </li>
            <li>
              Planned AI-powered features including recommendations, content
              generation, competitor analysis, and conversational website
              analysis.
            </li>

            <li>
              Planned AI-powered features including recommendations, content
              generation, competitor analysis, and conversational website
              analysis.
            </li>
            <li>
              Implemented Authentication & dynamic Role-Based Access Control
              (RBAC)
            </li>
          </ul>
          <p className="py-1 italic">
            {" "}
            <span style={{ fontWeight: "bold" }}>Technology Used:</span>{" "}
            ReactJS, Redux, NodeJS, NestJS, PostgreSQL, Prisma, Jest, Stripe,
            Tailwind CSS, OpenAI, Docker, JWT.
          </p>
        </div>

        <div className="">
          <p className="italic">
            <span className="font-bold italic">Ecommerce Website</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/mern-ecommerce"
                rel="noreferrer"
              >
                GitHub link
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://quiet-cat-ecom.netlify.app/"
                rel="noreferrer"
              >
                Live Website
              </a>
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              This website has JWT implemented, email, password, authentication,
              and a stripe payment system. It has an error log system that
              stores in MongoDB.
            </li>
            <li>
              Users can add items to the cart, change cart quantity, and remove
              items from the card. it gives users a notification when the order
              is shipped.
            </li>
            <li>
              Admin can update product status and restock, add, and delete
              products. When users order products then the admin gets a
              notification from it.
            </li>
          </ul>
          <p className="py-1 italic">
            {" "}
            <span style={{ fontWeight: "bold" }}>Technology Used:</span>{" "}
            ReactJS, Redux, NodeJS, ExpressJS, MongoDB, Mongoose, Winston, Jest,
            JWT, Stripe, GitHub, Axios, Bootstrap, React-icons, moment.
          </p>
        </div>

        <div className="pt-2">
          <p className="italic">
            <span className="font-bold italic">
              Social Media App (fuzzy-lamp):
            </span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/social-media-app-fuzzy-lamp"
                rel="noreferrer"
              >
                GitHub link
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://fuzzylamp.netlify.app/"
                rel="noreferrer"
              >
                Live Website
              </a>
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              This project has a real-time database implementation. Users can
              chat with each other.
            </li>
            <li>
              Users can Follow & UnFollow someone. Users can see someone&apos;s
              post by following them.
            </li>
            <li>
              Users can update their profile picture, cover photo, and their
              information.
            </li>
          </ul>
          <p className="py-1 italic">
            {" "}
            <span style={{ fontWeight: "bold" }}>Technology Used:</span> React,
            Node, Express, MongoDB, Mongoose, Socket.IO, Git, Redux, JWT, Axios.
          </p>
        </div>

        <div className="pt-2">
          <p className="italic">
            <span className="font-bold italic">
              Inventory management system:
            </span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/super-system"
                rel="noreferrer"
              >
                Client-Side
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://github.com/knrbokhari/mern-ecommerce/tree/main/server"
                rel="noreferrer"
              >
                {" "}
                Server-Side
              </a>
            </span>
            <span className="px-2">|</span>
            <span className="ml-2 font-bold text-[blue]">
              <a
                target="_blank"
                href="https://supersystem.netlify.app/"
                rel="noreferrer"
              >
                Live Website
              </a>
            </span>
          </p>
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>
              This website uses aggregation in the backend to create 3 types of
              charts using recharts.{" "}
            </li>
            <li>
              Admin can add, update, delete a product, and see all information
              on this site.
            </li>
          </ul>
          <p className="py-1 italic">
            {" "}
            <span style={{ fontWeight: "bold" }}>Technology Used:</span>ReactJS,
            NodeJS, ExpressJS, MongoDB, Mongoose, Redux, JWT, MUI.
          </p>
        </div>

        {/*  */}
        <h5 className="text-left uppercase text-[18px] pt-4">EDUCATION</h5>
        <div className="">
          <p className="italic">
            <span className="font-bold">
              Bachelor of Science in Computer Science and Engineering
            </span>
            <span className="px-2">|</span>2024 - Running
          </p>
          <p className="py-1 italic">Northern University Bangladesh.</p>
        </div>
        <div className="">
          <p className="italic">
            <span className="font-bold">Diploma in Computer Engineering</span>
            <span className="px-2">|</span>2016 - 2020
          </p>
          <p className="py-1 italic">
            Jhenaidah Polytechnic Institute, Jhenaidah
          </p>
        </div>

        <h5 className="text-left uppercase text-[18px] pt-4">LANGUAGE</h5>
        <div className="mb-9">
          <ul className="list-disc list-outside px-7 py-1 leading-relaxed">
            <li>Bangla</li>
            <li>English</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
