import React from "react";
import Image from "next/image";
import Link from "next/link";
import AboutImg from "../public/assets/about.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full md:h-screen-not p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2 className="py-4">Who I Am</h2>
          <ul className="">
            <li className="d-flex">
              <span>Name:</span> <span>Kazi Naeem Rayhan</span>
            </li>
            <li className="d-flex">
              <span>Address:</span> <span>Dhaka, Banglasesh</span>
            </li>
            <li className="d-flex">
              <span>Email:</span> <span>Kazinaeemrayhan@gmail.com</span>
            </li>
            <li className="d-flex">
              <span>Phone: </span> <span>+880 1751 449559 </span>
            </li>
          </ul>
          <p className="py-2 mt-4 text-gray-600">
            I am very dedicated and passionate about programming. I am an
            adaptable person who is looking forward to learning new techniques,
            skills, and methods in order to gain experience that can be used in
            a career in the near and distant future.
          </p>

          <p className="my-3">
            <a
              href="Kazi_Naeem_Rayhan_Resume.pdf"
              className="py-3 px-3 bg-violet-600 text-white rounded-2xl"
              download
            >
              Download Resume
            </a>
          </p>

          <Link href="/#projects">
            <p className="py-2 text-gray-600 underline cursor-pointer">
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image src={AboutImg} className="rounded-xl" alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
