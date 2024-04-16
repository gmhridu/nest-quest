import React from "react";
import aboutImg from "../../images/about.jpg"
import aboutImg2 from "../../assets/about2.jpg"

const About = () => {
  return (
    <>
      <section>
        <div
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000"
          className="hero h-[40vh] my-4 bg-blend-color"
          style={{
            backgroundImage: `url(${aboutImg})`,
            backgroundColor: "rgba(17, 40, 72, 0.629)",
          }}
        >
          <div className="hero-content flex-row">
            <div
              data-aos="fade-right"
              data-aos-easing="linear"
              data-aos-duration="1000"
              className="text-white"
            >
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="py-6 line-clamp-3 lg:line-clamp-0">
                At our core, we are passionate about providing exceptional
                service and creating lasting relationships with our clients. Our
                team is dedicated to understanding your needs and exceeding your
                expectations. With a focus on integrity and professionalism, we
                strive to deliver the highest level of satisfaction. We believe
                in transparency, communication, and teamwork to ensure a smooth
                and enjoyable experience for every individual we serve.
              </p>
            </div>
          </div>
        </div>
        <div className="container flex flex-col lg:flex-row items-center justify-between mx-auto gap-x-10 mt-6">
          <div
            data-aos="fade-right"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="my-5"
          >
            <h1 className="text-[#2d3954] text-3xl font-semibold capitalize mb-3">
              Our Agency Story
            </h1>
            <p className="text-xl mb-4 text-[#72809d]">
              Check out our company story and work process
            </p>

            <p className="mt-10 text-gray-600">
              Our agency's story in real estate is one of passion, dedication,
              and a deep understanding of our clients' needs. From humble
              beginnings, we've grown into a trusted name in the industry,
              guided by our commitment to excellence and integrity.
            </p>

            <p className="mt-10 text-gray-600">
              With each transaction, we strive to create unforgettable
              experiences, offering personalized service and expert guidance
              every step of the way. Whether it's finding the perfect home for a
              family or securing the ideal investment property, we're here to
              turn dreams into reality. Welcome to our world of real estate,
              where every story begins with a home.
            </p>

            <button className="btn btn-primary text-xl text-bold text-white rounded-full bg-navColor hover:bg-[#2dd6c1] mt-6">
              More About Us
            </button>
          </div>
          <div
            data-aos="fade-left"
            data-aos-easing="linear"
            data-aos-duration="1000"
            className="flex items-center justify-center"
          >
            <img className="rounded-lg" src={aboutImg2} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
