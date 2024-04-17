import React, { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { MdMaximize } from "react-icons/md";
import { VscSettings } from "react-icons/vsc";
import { IoSearch } from "react-icons/io5";
import Marquee from "react-fast-marquee";
import { marqueeImg, sliderImageUrl } from "../../utils/dataProvider";

const responsive = {
  module: {
    breakpoint: { max: 4000, min: 0 },
    items: 1,
  },
};

const Banner = ({ jsonData } ) => {
  const [searchInput, setSearchInput] = useState("");

  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "" : "text-white"} onClick={() => onClick()}>
        <MdMaximize className="text-5xl" />
      </li>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };

  return (
    <main className="mb-12">
      <div className="bg-gradient-to-t from-[#bce6e4] to-[#f8fdfe] rounded-[500px] rounded-t-none">
        <div className="container mx-auto px-3 lg:flex justify-between  items-center lg:h-screen lg:p-4">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="lg:w-2/5"
          >
            <p className="text-[#0c4f37] md:text-xl lg:font-medium">
              Nest Quest
            </p>
            <h1 className="lg:text-6xl text-3xl font-medium pt-3 pb-12">
              Find a perfect home you love..!
            </h1>
            <p className="text-[#808080] lg:text-base text-sm pb-8">
              Discover your dream home with Nest Quest. Explore our curated
              listings and start your journey towards finding your ideal living
              space today!
            </p>
            {/* carousel */}
            <div>
              <Carousel
                className="z-20"
                responsive={responsive}
                autoPlay={true}
                swipeable={true}
                draggable={false}
                showDots
                arrows
                ssr={true}
                infinite={true}
                autoPlaySpeed={2000}
                keyBoardControl={true}
                customTransition="all .5"
                transitionDuration={500}
                customDot={<CustomDot />}
                partialVisible={false}
                dotListClass="custom-dot-list-style"
              >
                {sliderImageUrl.map((imageUrl, index) => {
                  return (
                    <div className="slider" key={index}>
                      <img
                        className="rounded-xl"
                        src={imageUrl.url}
                        alt="pic"
                      />
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
          {/*dropdown form */}
          <form
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            onSubmit={handleSubmit}
            className="bg-white shadow-2xl rounded-3xl py-8 lg:w-1/3 relative lg:mt-0 mt-12"
          >
            <div className="flex justify-between border-b border-[#aaaaaa] h-12 lg:px-8 px-3">
              <button className="btn btn-ghost w-1/2 border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer text-[#808080]">
                For Sale
              </button>
              <button className="btn btn-ghost w-1/2 border-b-2 focus:text-[#0ca39a] focus:border-[#0ca39a] cursor-pointer text-[#808080]">
                For Rent
              </button>
            </div>
            <div className="py-12 flex flex-col gap-8 lg:px-12 px-4">
              <input
                type="text"
                placeholder="New York, San Francisco, etc"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <select
                placeholder="Select Property Type"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              >
                <option>Select Property Type</option>
              </select>
              <select
                placeholder="Price Range"
                className="h-16 outline-none rounded-3xl bg-[#f6f6f6] border border-[#e5e5e5] px-6"
              >
                <option>Price Range</option>
              </select>
              <span className="flex items-center text-[#0ca39a] gap-x-2">
                <VscSettings className="text-2xl" />
                <p>Advance Search</p>
              </span>
              <button
                type="submit"
                className="w-full flex justify-center items-center gap-x-2 rounded-full h-14 text-white bg-[#0ca39a]"
              >
                <IoSearch />
                Search
              </button>
            </div>
            <button className="bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-12 w-12 cursor-auto absolute -top-2 -right-2"></button>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Banner;
