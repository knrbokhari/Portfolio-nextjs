import Image from 'next/image';
import React from 'react';
import ecommerce from '../public/assets/bg.avif';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const social = () => {
    return (
        <div className='w-full'>
          <div className='w-screen- h-[30vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[30vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              width="100%"
              src={ecommerce}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>Social Media App</h2>
              <h3>React JS / Node JS / Express / MomgoDB</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <div>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> This project has a real-time database implementation. Users can chat with each other.
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> Users can Follow & UnFollow someone. Users can see someone post by following them.
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> Users can update their profile picture, cover photo, and their information.
                    </p>
                </div>
                
              <a
                href='https://github.com/knrbokhari/social-media-app-fuzzy-lamp'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Code</button>
              </a>
              <a
                href='https://fuzzylamp.netlify.app/'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4'>Live</button>
              </a>
            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Technologies</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> React
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> NodeJS
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> ExpressJS
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> MongoDB
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Socket.IO
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> JWT
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Redux
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> SCSS
                  </p>
                </div>
              </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
      );
}

export default social