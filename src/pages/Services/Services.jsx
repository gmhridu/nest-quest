import React from 'react';
import serviceImg from '../../images/services.jpg'
import h1 from '../../images/h1.png'
import h2 from '../../images/h2.png'
import h3 from '../../images/h3.png'
import h4 from '../../images/h4.png'
import h6 from '../../images/h6.png'

const Services = () => {
  return (
    <section
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1000"
      className="px-3 md:px-0"
    >
      <div
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="hero h-[40vh] my-4 bg-blend-color rounded-lg"
        style={{
          backgroundImage: `url(${serviceImg})`,
          backgroundColor: "rgba(17, 40, 72, 0.629)",
        }}
      >
        <div
          data-aos="fade-right"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="hero-content flex-row"
        >
          <div className="text-white">
            <h1 className="text-5xl font-bold">Services</h1>
            <p className="py-6 line-clamp-3 lg:line-clamp-0">
              Explore our services for all your real estate needs. From buying
              and selling to rentals and investments, we're here to guide you
              with personalized expertise and dedication.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-left"
        data-aos-easing="linear"
        data-aos-duration="1000"
        className="flex flex-col lg:flex-row items-center justify-center gap-6 my-10 transition"
      >
        {/* card 1 */}
        <div>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50  w-80 text-gray-800">
            <img
              src={h1}
              alt=""
              className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
            />
            <div className="space-y-4 text-center">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold">Family House</h2>
                <p className="px-5 text-xs sm:text-base text-gray-600">
                  122 Property
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 2 */}
        <div>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 w-80 text-gray-800">
            <img
              src={h2}
              alt=""
              className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
            />
            <div className="space-y-4 text-center">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold">House & Villa</h2>
                <p className="px-5 text-xs sm:text-base text-gray-600">
                  155 Property
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 3 */}
        <div>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 w-80 text-gray-800">
            <img
              src={h3}
              alt=""
              className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
            />
            <div className="space-y-4 text-center">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold">Apartment</h2>
                <p className="px-5 text-xs sm:text-base text-gray-600">
                  300 Property
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 4 */}
        <div>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl sm:px-12 bg-gray-50 w-80 text-gray-800">
            <img
              src={h4}
              alt=""
              className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
            />
            <div className="space-y-4 text-center">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold">Office & Studio</h2>
                <p className="px-5 text-xs sm:text-base text-gray-600">
                  80 Property
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* card 5 */}
        <div>
          <div className="flex flex-col justify-center max-w-xs p-6 shadow-md rounded-xl w-80 sm:px-12 bg-gray-50 text-gray-800">
            <img
              src={h6}
              alt=""
              className="w-32 h-32 mx-auto rounded-full bg-white aspect-square"
            />
            <div className="space-y-4 text-center">
              <div className="my-2 space-y-1">
                <h2 className="text-xl font-semibold">Vill & Condo</h2>
                <p className="px-5 text-xs sm:text-base text-gray-600">
                  80 Property
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;