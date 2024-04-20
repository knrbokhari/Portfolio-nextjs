import Head from "next/head";
import About from "../components/About";
import Contact from "../components/Contact";
import Main from "../components/Main";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Kazi Naeem Rayhan</title>
        <meta
          name="description"
          content="I’m a Full Stack Developer with 1 year of hands-on experience in crafting robust web applications. I have working experience in NodeJs, ExpressJs, Nestjs, MongoDB, TypeScript, JavaScript, ReactJS, Redux, Prisma,  Unit Testing, and other technologies."
        />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
