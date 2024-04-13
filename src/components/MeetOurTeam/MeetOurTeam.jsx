import React from "react";

const MeetOurTeam = ({ data }) => {
  const firstSixAgents = data?.estates?.slice(0, 4);
  return (
    <section className="py-6 bg-gradient-to-r from-[#bce6e4] to-[#f8fdfe] text-gray-800 my-8">
      <div className="container flex flex-col items-center justify-center p-4 mx-auto space-y-8 sm:p-10">
        <h1 className="text-4xl font-bold leading-none text-center sm:text-5xl">
        Meet Our team
        </h1>
        <p className="max-w-2xl text-center text-gray-600">
          Meet our talented team members!
        </p>
        <div className="flex flex-wrap justify-center">
          {firstSixAgents?.map((estate, index) => (
            <div
              key={index}
              className="flex flex-col justify-center m-8 text-center"
            >
              <img
                alt=""
                className="self-center flex-shrink-0 w-24 h-24 mb-4 bg-center bg-cover rounded-full bg-gray-500"
                src={estate?.agent?.image}
              />
              <p className="text-xl font-semibold leading-tight">
                {estate?.agent?.name}
              </p>
              <p className="text-gray-600">{estate?.agent?.phone}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MeetOurTeam;
