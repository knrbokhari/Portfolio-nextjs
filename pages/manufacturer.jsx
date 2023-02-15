import Image from 'next/image';
import React from 'react';
import ecommerce from '../public/assets/bg.avif';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const manufacturer = () => {
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
              <h2 className='py-2'>Manufacturer Website</h2>
              <h3>React JS / Node JS / Express / MomgoDB</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
                <p>Project</p>
                <h2>Overview</h2>
                <div>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> You can register, login and order anything from this website and it has a card payment system.
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> It has a Dashboard for admin and user. User can view his order, cancel the order, update his profile and leave a comment.
                    </p>
                    <p className='text-gray-600 py-2 flex items-center'>
                        <RiRadioButtonFill className='pr-1' /> admin add new product, update product,  delete product, see all users and make someone admin.
                    </p>
                </div>
                
              <a
                href='https://github.com/knrbokhari/manufacturer-website-client-V2'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Client</button>
              </a>
              <a
                href='https://github.com/knrbokhari/manufacturer-server-side-V2'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Server</button>
              </a>
              <a
                href='https://manufacturer-25224.web.app/'
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
                    <RiRadioButtonFill className='pr-1' /> Firebase
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Tailwind
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Axios
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> JWT
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

export default manufacturer