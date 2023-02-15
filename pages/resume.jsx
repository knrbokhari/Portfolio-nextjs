import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn, FaMailBulk, FaStackOverflow } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';

const resume = () => {
  return (
    <>
      <Head>
        <title>Resume</title>
        {/* <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        /> */}
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
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
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
            Full Stack Development (MERN)
            </p>
          </div>
          <div className='block sm:hidden'>
            <p className='py-2'>Web Development</p>
            <p>Complex Problem Solving</p>
          </div>
        </div>
        <p>
          I&apos;m a full Stack Web Developer (MERN).  I have intermediate skills in Node, Express, MongoDB, React, Unit Testing, MySql and other technologies. I am a capable and adaptable person looking forward to learning new techniques to gain experience that can be used in a career in the future.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Comfortable:</span>
            <span className='px-2'></span> Node.js
            <span className='px-2'>|</span> Express
            <span className='px-2'>|</span> MongoDB
            <span className='px-2'>|</span> React.js
            <span className='px-2'>|</span> TypeScript
            <span className='px-2'>|</span> Next JS
            <span className='px-2'>|</span> MySQL
            <span className='px-2'>|</span> Unit Testing
            <span className='px-2'>|</span> Redux
            <span className='px-2'>|</span> Logger
            <span className='px-2'>|</span> JWT
            <span className='px-2'>|</span> JavaScript
            <span className='px-2'>|</span> Stripe
            <span className='px-2'>|</span> MUI
            <span className='px-2'>|</span> Tailwind
            <span className='px-2'>|</span> Firebase
            <span className='px-2'>|</span> RESTAPI
          </p>
          <p className='py-2'>
            <span className='font-bold'>Familiar:</span>
            <span className='px-2'></span> OOP
            <span className='px-2'>|</span> Debugging
            <span className='px-2'>|</span> Socket.IO
            <span className='px-2'>|</span> CI/CD Pipeline
            <span className='px-2'>|</span> Docker
            <span className='px-2'>|</span> API Doc
            <span className='px-2'>|</span> Python
          </p>
          <p className='py-2'>
            <span className='font-bold'>Other:</span>
            <span className='px-2'></span> Linux
            <span className='px-2'>|</span> Git
            <span className='px-2'>|</span> Figma
            <span className='px-2'>|</span> Postman
            <span className='px-2'>|</span> Heroku
            <span className='px-2'>|</span> Vercel
            <span className='px-2'>|</span> Render
            <span className='px-2'>|</span> Cloudinary
            <span className='px-2'>|</span> Jira
            <span className='px-2'>|</span> Slack
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
        PROJECT
        </h5>
        {/* PROJECT */}
        <div className='py-6'>
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
          <p className='py-1 italic'> <span style={{fontWeight: 'bold'}}>Technology Used:</span> ReactJS, Redux, NodeJS, ExpressJS, MongoDB, Mongoose, Winston, Jest, JWT, Stripe,  GitHub, Axios, Bootstrap, React-icons, moment.</p>
        </div>

        <div className='py-6'>
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
          <p className='py-1 italic'> <span style={{fontWeight: 'bold'}}>Technology Used:</span> React, Node, Express, MongoDB, Mongoose, Socket.IO, Git, Redux, JWT, Axios.</p>
        </div>

        <div className='py-6'>
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
          <p className='py-1 italic'> <span style={{fontWeight: 'bold'}}>Technology Used:</span>ReactJS, NodeJS, ExpressJS, MongoDB, Mongoose,  Redux, JWT, MUI.</p>
        </div>

        {/*  */}
        <h5 className='text-center underline text-[18px] py-4'>
        EDUCATION
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Diploma in Computer Engineering</span>
            <span className='px-2'>|</span>2016- 2020 
          </p>
          <p className='py-1 italic'>Jhenaidah Polytechnic Institute, Jhenaidah</p>
        </div>
      
        <h5 className='text-center underline text-[18px] py-4'>
        LANGUAGE
        </h5>
        <div className='py-6'>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Bangla
            </li>
            <li>
            English
            </li>
          </ul>
        </div>

        {/* <h5 className='text-center underline text-[18px] py-4'>
          Other Professional Experience
        </h5>
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>CITY OF SHERMAN, TX</span>
            <span className='px-2'>|</span>Sherman, TX
          </p>
          <p className='py-1 italic'>Paramedic / Firefighter (2010 – 2019)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
              Ensured proper implementation of firefighting techniques and
              practices including controlling and extinguishing fires, operating
              hose lines, and fire ground operations, ventilation, and search
              and rescue.
            </li>
            <li>
              Oversaw comprehensive understanding, operation, and maintenance of
              fire engines, ladder trucks, technical rescue apparatus, and
              response trailers.
            </li>
            <li>
              Performed ALS techniques as needed within emergency situations
              including the use of an esophageal or dual lumen airway device and
              oral intubation using laryngoscopy.
            </li>
            <li>
              Collaborated with a talented and high performing team of
              firefighters in high pressure and stressful situations as needed.
            </li>
            <li>
              Utilized proven and demonstrated knowledge of multiple
              certifications including Pediatric Advanced Life Support,
              Prehospital Trauma Life Support, and Advanced Cardiac Life
              Support, among others.
            </li>
          </ul>
        </div> */}
      </div>
    </>
  );
};

export default resume;
