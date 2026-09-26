import Image from "next/image";
import React from "react";
import ecommerce from "../public/assets/bg.webp";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import Head from "next/head";

const ContentPilotAI = () => {
  return (
    <>
      <Head>
        <title>Sass ContentPilot AI</title>
        <meta
          name="description"
          content="Full Stack Developer with 2+ years of experience building and launching scalable software, e-commerce, and AI-based web apps. Skilled in creating full-stack solutions using TypeScript, ReactJS, Redux, NodeJS, NestJS, ExpressJS, MongoDB, PostgreSQL, and Prisma from front-end UI through to back-end RESTful APIs, databases, authentication, and payment gateways. Comfortable dealing with clients and collaborating in cross-disciplinary teams to create maintainable software solutions from business requirements. Experience with Docker, Nginx, Linux, Unit Testing Production deployment, and third-party API integration."
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <div className="w-full">
        <div className="w-screen- h-[30vh] relative">
          <div className="absolute top-0 left-0 w-full h-[30vh] bg-black/70 z-10" />
          <Image
            className="absolute z-1"
            layout="fill"
            objectFit="cover"
            width="100%"
            src={ecommerce}
            alt="/"
          />
          <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
            <h2 className="py-2">Sass ContentPilot AI</h2>
            <h3>
              Next JS / Node JS / Nest Js / Postgres / Prisma / Docker /
              Stripe{" "}
            </h3>
          </div>
        </div>

        <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
          <div className="col-span-4">
            <p>Project</p>
            <h2>Overview</h2>
            <div>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Designed and developed a
                multi-tenant SaaS platform for analyzing website pages and
                generating AI-powered website improvement recommendations.
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Implemented
                organization-based architecture with separate administrative and
                organization-level dashboards.
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Implemented audit scoring
                across categories including SEO, content, readability,
                accessibility, performance, and technical quality.
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Designed organization
                team management, role-based access control, audit history,
                subscription plans, and reporting workflows.
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Planned AI-powered
                features including recommendations, content generation,
                competitor analysis, and conversational website analysis.
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Implemented Stripe
                Payment & Subscription Systems
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Implemented
                Authentication & dynamic Role-Based Access Control (RBAC)
              </p>

              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> AI-Powered Application
                Development
              </p>
            </div>

            <a
              href="https://github.com/knrbokhari/AI-Content-Audit-SaaS"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Client</button>
            </a>
            <a
              href="https://github.com/knrbokhari/AI-Content-Audit-SaaS-api"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4 mr-8">Server</button>
            </a>
            <a
              href="https://ai-content-audit-saa-s.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              <button className="px-8 py-2 mt-4">Live</button>
            </a>
          </div>
          <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
            <div className="p-2">
              <p className="text-center font-bold pb-2">Technologies</p>
              <div className="grid grid-cols-3 md:grid-cols-1">
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> React
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NodeJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> NestJS
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> PostgresSQL
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Docker
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Tailwind
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> Open AI API
                </p>
                <p className="text-gray-600 py-2 flex items-center">
                  <RiRadioButtonFill className="pr-1" /> JWT
                </p>
              </div>
            </div>
          </div>
          <Link href="/#projects">
            <p className="underline cursor-pointer">Back</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ContentPilotAI;
