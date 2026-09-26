import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kazi Naeem Rayhan</title>
        <meta
          name="description"
          content="Full Stack Developer with 2+ years of experience building and launching scalable software, e-commerce, and AI-based web apps. Skilled in creating full-stack solutions using TypeScript, ReactJS, Redux, NodeJS, NestJS, ExpressJS, MongoDB, PostgreSQL, and Prisma from front-end UI through to back-end RESTful APIs, databases, authentication, and payment gateways. Comfortable dealing with clients and collaborating in cross-disciplinary teams to create maintainable software solutions from business requirements. Experience with Docker, Nginx, Linux, Unit Testing Production deployment, and third-party API integration."
        />
        <link rel="icon" href="/logo.webp" />
      </Head>
      <Main />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
