import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaMailBulk, FaStackOverflow } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        <meta
          name="description"
          content="I’m a Full Stack Developer with 1 year of hands-on experience in crafting robust web applications. I have working experience in NodeJs, ExpressJs, Nestjs, MongoDB, TypeScript, JavaScript, ReactJS, Redux, Prisma,  Unit Testing, and other technologies."
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6]- w-full flex justify-between items-center'>
          <h2 className='text-center'>Kazi Naeem Rayhan</h2>
          <div className='flex'>
            <a
              href="mailto:kazinaeemrayhan@gmail.com"
            >
              <HiMail size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='http://www.linkedin.com/in/kazinaeemrayhan'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/knrbokhari'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://stackoverflow.com/users/19066276/kazi-naeem-rayhan'
              target='_blank'
              rel='noreferrer'
            >
              <FaStackOverflow size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <p className='text-xl font-bold'>
          Full Stack Development
        </p>
        <div className=''>
          <div className='text-left py-4 pb-2 text-xl font-bold uppercase tracking-wider'>
            <p>
              Summary
            </p>
          </div>
          <p className='text-justify'>
            A dynamic and passionate Full Stack Developer with 1 year of hands-on experience in crafting robust web applications. I have working experience in NodeJs, ExpressJs, Nestjs, MongoDB, JavaScript, TypeScript, ReactJS, Redux, Prisma,  Unit Testing, and other technologies. I am eager to contribute my skills to a forward-thinking team and take on new challenges in the ever-evolving landscape of technology.
          </p>
        </div>

        {/* Skills */}
        <div className='text-left pt-4'>
          <h5 className='text-left uppercase text-[18px] py-2'>Skills</h5>

          <p className='pb-1'>
            <span className='font-bold'>Font-End:</span>
            <span className='pl-2'></span> React.js
            <span className='pl-2'>|</span> Next.js
            <span className='px-2'>|</span> Redux
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> Javascript
            <span className='px-2'>|</span> Tailwind CSS
            <span className='px-2'>|</span> MUI
            <span className='px-2'>|</span> Bootstrap
            <span className='px-2'>|</span> CSS
            <span className='px-2'>|</span> SEO
          </p>
          <p className='pb-1'>
            <span className='font-bold'>Back-End:</span>
            <span className='px-2'></span> Node.js
            <span className='px-2'>|</span> Nest.js
            <span className='px-2'>|</span> Express
            <span className='px-2'>|</span> JWT
            <span className='px-2'>|</span> Unit Testing
            <span className='px-2'>|</span> S3
            <span className='px-2'>|</span> API Documentation
            <span className='px-2'>|</span> Logger
            <span className='px-2'>|</span> Socket.io
            <span className='px-2'>|</span> CI/CD Pipeline
            <span className='px-2'>|</span> OOP
          </p>
          <p className='pb-1'>
            <span className='font-bold'>Database:</span>
            <span className='px-2'></span> MongoDB
            <span className='px-2'>|</span> PostgreSQL
            <span className='px-2'>|</span> MySQL
            <span className='px-2'>|</span> Prisma
          </p>
          <p className='pb-1'>
            <span className='font-bold'>Tool:</span>
            <span className='px-2'></span> Docker
            <span className='px-2'>|</span> Linux
            <span className='px-2'>|</span> Stripe
            <span className='px-2'>|</span> Nginx
            <span className='px-2'>|</span> PM2
            <span className='px-2'>|</span> Termius
            <span className='px-2'>|</span> Postman
            <span className='px-2'>|</span> Git
            <span className='px-2'>|</span> GitHub
            <span className='px-2'>|</span> Slack
            <span className='px-2'>|</span> Jira
            <span className='px-2'>|</span> Vercel
            <span className='px-2'>|</span> Render
            <span className='px-2'>|</span> Figma
          </p>
          <p className='pb-1'>
            <span className='font-bold'>Other Skills:</span>
            <span className='px-2'></span> Data Structures
            <span className='px-2'>|</span> Algorithms
            <span className='px-2'>|</span> SOLID Principles
            <span className='px-2'>|</span>  Problem-Solving
            <span className='px-2'>|</span>  Debugging.
          </p>
        </div>

        {/* Experience */}
        <h5 className='text-left uppercase text-[18px] pt-4'>
          Professional Experience
        </h5>
        <div className=''>
          <p className='italic'>
            <span className='font-bold'>Full Stack Developer</span>
            <span className='px-2'>|</span> 
            <a target="_blank" href="https://ejanani.com/" className='font-bold text-[blue]' rel="noreferrer">Ejanani</a>
          </p>
          <p className='py-1 italic'>Remote ( Mar 2023 – Present)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li className='cursor-default'>Collaborated with cross-functional teams to gather and refine requirements, ensuring the seamless enhancement of existing systems and the successful implementation of new features.</li>
            <li className='cursor-default'>Optimized application performance on both the front-end and back-end, utilizing advanced profiling and performance-tuning techniques to ensure fast response times and smooth user interactions.</li>
            <li className='cursor-default'>Enhanced query performance by implementing efficient data retrieval strategies and optimizing database schema designs.</li>
            <li className='cursor-default'>Designed and maintained database schemas using PostgreSQL and Prisma, ensuring data integrity, and scalability.</li>
            <li className='cursor-default'>Ensuring uninterrupted service and improved user experience.</li>
          </ul>
        </div>

        {/* PROJECT */}
        <h5 className='text-left uppercase text-[18px] pt-4'>
          PROJECT
        </h5>
        <div className=''>
          <p className='italic'>
            <span className='font-bold italic'>
              Ecommerce Website
            </span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://github.com/knrbokhari/mern-ecommerce" rel="noreferrer">GitHub link</a>
            </span>
            <span className='px-2'>|</span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://quiet-cat-ecom.netlify.app/" rel="noreferrer">Live Website</a>
            </span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This website has JWT implemented, email, password, authentication, and a stripe payment system. It has an error log system that stores in MongoDB.
            </li>
            <li>
              Users can add items to the cart, change cart quantity, and remove items from the card. it gives users a notification when the order is shipped.
            </li>
            <li>
              Admin can update product status and restock, add, and delete products. When users order products then the admin gets a notification from it.
            </li>
          </ul>
          <p className='py-1 italic'> <span style={{ fontWeight: 'bold' }}>Technology Used:</span> ReactJS, Redux, NodeJS, ExpressJS, MongoDB, Mongoose, Winston, Jest, JWT, Stripe,  GitHub, Axios, Bootstrap, React-icons, moment.</p>
        </div>

        <div className='pt-2'>
          <p className='italic'>
            <span className='font-bold italic'>
              Social Media App (fuzzy-lamp):
            </span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://github.com/knrbokhari/social-media-app-fuzzy-lamp" rel="noreferrer">GitHub link</a>
            </span>
            <span className='px-2'>|</span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://fuzzylamp.netlify.app/" rel="noreferrer">Live Website</a>
            </span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This project has a real-time database implementation. Users can chat with each other.
            </li>
            <li>
              Users can Follow & UnFollow someone. Users can see someone&apos;s post by following them.
            </li>
            <li>
              Users can update their profile picture, cover photo, and their information.
            </li>
          </ul>
          <p className='py-1 italic'> <span style={{ fontWeight: 'bold' }}>Technology Used:</span> React, Node, Express, MongoDB, Mongoose, Socket.IO, Git, Redux, JWT, Axios.</p>
        </div>

        <div className='pt-2'>
          <p className='italic'>
            <span className='font-bold italic'>
              Inventory management system:
            </span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://github.com/knrbokhari/super-system" rel="noreferrer">Client-Side</a>
            </span>
            <span className='px-2'>|</span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://github.com/knrbokhari/mern-ecommerce/tree/main/server" rel="noreferrer"> Server-Side</a>
            </span>
            <span className='px-2'>|</span>
            <span className='ml-2 font-bold text-[blue]'>
              <a target="_blank" href="https://supersystem.netlify.app/" rel="noreferrer">Live Website</a>
            </span>
          </p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              This website uses aggregation in the backend to create 3 types of charts using recharts.            </li>
            <li>
              Admin can add, update, delete a product, and see all information on this site.
            </li>
          </ul>
          <p className='py-1 italic'> <span style={{ fontWeight: 'bold' }}>Technology Used:</span>ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose,  Redux, JWT, MUI.</p>
        </div>

        {/*  */}
        <h5 className='text-left uppercase text-[18px] pt-4'>
          EDUCATION
        </h5>
        <div className=''>
          <p className='italic'>
            <span className='font-bold'>Bachelor of Science in Computer Science and Engineering</span>
            <span className='px-2'>|</span>2024 - Running
          </p>
          <p className='py-1 italic'>Northern University Bangladesh.</p>
        </div>
        <div className=''>
          <p className='italic'>
            <span className='font-bold'>Diploma in Computer Engineering</span>
            <span className='px-2'>|</span>2016 - 2020
          </p>
          <p className='py-1 italic'>Jhenaidah Polytechnic Institute, Jhenaidah</p>
        </div>

        <h5 className='text-left uppercase text-[18px] pt-4'>
          LANGUAGE
        </h5>
        <div className='mb-9'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Bangla
            </li>
            <li>
              English
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
