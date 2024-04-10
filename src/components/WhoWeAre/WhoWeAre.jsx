import React from 'react';
import { FaHome } from 'react-icons/fa';
import house1 from "../../assets/house1lg.png";
import house2 from "../../assets/house3lg.png";
import house3 from "../../assets/house4lg.png";

const WhoWeAre = () => {
  return (
    <main className="container mx-auto items-center justify-center lg:flex px-3 mb-12 lg:pt-0 pt-8">
      <div className="lg:w-2/5">
        <p className="text-[#0c4f37] md:text-xl text-lg font-medium">
          WHO ARE WE
        </p>
        <h1 className="lg:text-4xl text-2xl font-medium py-3">
          Assisting individuals in locating the appropriate NestQuest
        </h1>
        <p className="lg:w-4/5 text-[#a5a5a5]">
          Dedicated to personalized assistance, our team helps you find your
          ideal living space, be it a cozy apartment or spacious family home.
          With our expertise, we aim to make your home-finding journey smooth
          and enjoyable.
        </p>
        <div className="lg:block hidden">
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
            <span className="space-y-2">
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Personalized Assistance
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our team helps you find your ideal living space.
              </p>
            </span>
          </div>
          <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
            <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
            <span className="space-y-2">
              <h1 className="text-[#0c4f37] text-lg font-medium">
                Personalized Assistance
              </h1>
              <p className="text-[#a5a5a5] w-4/5">
                Our team helps you find your ideal living space.
              </p>
            </span>
          </div>
        </div>
      </div>

      <div className="lg:w-1/2 flex items-center justify-center gap-4 lg:mt-0 mt-12 lg:h-auto h-[30rem]">
        <img
          src={house1}
          alt=""
          className="rounded-3xl w-1/2 h-4/5 shadow-md object-cover"
        />
        <div className="w-1/2 h-4/5 flex flex-col gap-4 relative -top-20">
          <img
            src={house2}
            alt=""
            className="w-full h-3/5 shadow-md rounded-3xl object-cover"
          />
          <img
            src={house3}
            alt=""
            className="w-full h-3/5 shadow-md rounded-3xl object-cover"
          />
          <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -bottom-8 left-16"></button>
        </div>
      </div>
      <div className="lg:hidden block pt-4 py-16">
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span className="space-y-2">
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Personalized Assistance
            </h1>
            <p className="text-[#a5a5a5] w-4/5">
              Our team helps you find your ideal living space.
            </p>
          </span>
        </div>
        <div className="bg-white shadow-2xl px-4 py-6 rounded-3xl flex items-center gap-x-3 lg:w-4/5 mt-6">
          <FaHome className="text-4xl text-[#0c4f37] w-1/3" />
          <span className="space-y-2">
            <h1 className="text-[#0c4f37] text-lg font-medium">
              Personalized Assistance
            </h1>
            <p className="text-[#a5a5a5] w-4/5">
              Our team helps you find your ideal living space.
            </p>
          </span>
        </div>
      </div>
    </main>
  );
};

export default WhoWeAre;
