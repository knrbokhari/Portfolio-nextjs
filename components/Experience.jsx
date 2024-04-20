import React from 'react'

const Experience = () => {
  return (
    <div
      id="experience"
      className="w-full p-2 pt-14 h-96"
    >
      <div className="max-w-[1240px] mx-auto">
        <div className="w-full">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            Working Experience
          </p>
          <div className='flex flex-wrap justify-between items-center'>
            <h2 className="pt-4 pb-2">Full Stack Developer at Ejanani</h2>
            <span>Mar 2023 - Present</span>
          </div>
          <p className=" text-gray-600 font-semibold">
            Developed, tested, and implemented new features based on client requirements using TypeScript, Node.js, NestJS, Prisma, PostgreSQL, Next.js, and Redux.
          </p>
          <ul className="list-disc pl-10 mt-2">
            <li className='cursor-default'>Collaborated with cross-functional teams to gather and refine requirements, ensuring the seamless enhancement of existing systems and the successful implementation of new features.</li>
            <li className='cursor-default'>Optimized application performance on both the front-end and back-end, utilizing advanced profiling and performance-tuning techniques to ensure fast response times and smooth user interactions.</li>
            <li className='cursor-default'>Enhanced query performance by implementing efficient data retrieval strategies and optimizing database schema designs.</li>
            <li className='cursor-default'>Designed and maintained database schemas using PostgreSQL and Prisma, ensuring data integrity, and scalability.</li>
            <li className='cursor-default'>Ensuring uninterrupted service and improved user experience.</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Experience