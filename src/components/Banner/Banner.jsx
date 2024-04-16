import React from "react";
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




const Banner = () => {
  const CustomDot = ({ onClick, active }) => {
    return (
      <li className={active ? "" : "text-white"} onClick={() => onClick()}>
        <MdMaximize className="text-5xl" />
      </li>
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
                type="button"
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

      <div className="lg:flex justify-center lg:-mt-9 mt-6 z-20 md:gap-x-8 space-y-6 md:space-y-0 lg:px-0 px-3">
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="rounded-full py-2 lg:px-8 px-3 flex items-center justify-center gap-x-4 shadow-2xl bg-white"
        >
          <div className="flex items-center justify-center relative h-10 w-44">
            <div className="avatar-group -space-x-6 rtl:space-x-reverse  border border-white absolute">
              <div className="avatar border">
                <div className="w-12">
                  <img src="https://i.ibb.co/vjNtRRn/profileee.jpg" />
                </div>
              </div>
              <div className="avatar border">
                <div className="w-12">
                  <img src="https://i.ibb.co/vjNtRRn/profileee.jpg" />
                </div>
              </div>
              <div className="avatar border">
                <div className="w-12">
                  <img src="https://i.ibb.co/vjNtRRn/profileee.jpg" />
                </div>
              </div>
              <div className="avatar placeholder border">
                <div className="w-12 bg-neutral text-neutral-content">
                  <span>+99</span>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="w-36 text-xl font-medium">72k+ Happy Customers</p>
          </div>
        </div>

        <div
          data-aos="fade-left"
          data-aos-easing="linear"
          data-aos-duration="1500"
          className="flex gap-3 bg-white p-4 rounded-full shadow-2xl"
        >
          <img
            src="/src/assets/apart.jpg"
            alt=""
            className="w-12 h-12 rounded-full"
          />
          <p className="md:text-xl font-medium">
            200+ New <br />
            Listings Everyday!
          </p>
        </div>
      </div>

      <div
        data-aos="fade-up"
        data-aos-easing="linear"
        data-aos-duration="1500"
        className="lg:block hidden container mx-auto px-3 py-16"
      >
        <span className="lg:flex items-end gap-x-60 lg:text-left text-center">
          <button className="lg:block hidden bg-gradient-to-r from-[#8bd3ce] to-[#eff9f9] rounded-full h-24 w-24 cursor-auto"></button>
          <p className="text-[#a5a5a5]">
            Trusted by 100+ compaies across the globe
          </p>
        </span>

        {/* marquee */}
        <div className="py-14">
          <Marquee
            autoFill={true}
            speed={50}
            gradient={true}
            gradientColor={"rgb(248, 251, 253)"}
            gradientWidth={200}
          >
            {marqueeImg?.map((img, index) => (
              <img src={img.url} alt="" key={index} className="mr-16 h-10" />
            ))}
          </Marquee>
        </div>
      </div>
    </main>
  );
};

export default Banner;
