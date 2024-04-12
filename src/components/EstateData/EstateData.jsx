import React, { useEffect, useState } from "react";
import { BiArea, BiBath, BiBed } from "react-icons/bi";
import "react-multi-carousel/lib/styles.css";
import { Link } from "react-router-dom";

const EstateData = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const [estateData, setEstateData] = useState([]);

  useEffect(() => {
    if (data && data?.estates) {
      setEstateData(data?.estates);
    }
  }, [data]);


  const displayedData = showAll ? estateData : estateData?.slice(0, 6);

  return (
    <>
      <main className="container mx-auto px-6">
        <div className="lg:flex justify-between items-center">
          <div className="lg:3/5">
            <h1 className="text-[#6f9789] lg:text-xl uppercase">
              Check our new
            </h1>
            <h1 className="lg:text-4xl text-2xl font-medium capitalize py-3">
              Latest listed property
            </h1>
            <p className="text-[#808080] lg:text-base text-sm lg:w-3/5">
              Explore our latest listed properties and discover your next dream
              home. From cozy apartments to spacious family houses, we have a
              diverse range of options to suit every lifestyle and preference.
              Start your search today and find the perfect property for you!
            </p>
          </div>
          <div className="flex gap-x-4 lg:w-2/5 lg:pt-0 pt-6">
            <button
              className="px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white"
              onClick={() => setShowAll(true)}
            >
              All
            </button>
            <button className="px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
              Sell
            </button>
            <button className="px-6 py-2 hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
              Rent
            </button>
          </div>
        </div>

        <section className="mt-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3">
            {displayedData?.map((estate, index) => (
              <div key={index}>
                <Link to={`/details/${estate?.id}`} className="mx-2 my-1">
                  <div className="bg-white shadow-lg p-5 rounded-lg rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer hover:shadow-2xl transition">
                    <figure>
                      <img src={estate?.image_url} alt="" className="mb-2" />
                    </figure>
                    <div>
                      <div className="mb-2 flex items-center gap-x-2 text-sm text-center">
                        <div className="bg-green-500 rounded-full text-white px-3 py-2">
                          {estate?.segment_name}
                        </div>
                        <div className="bg-violet-500 rounded-full text-white px-3 py-2 text-nowrap">
                          {estate?.country}
                        </div>
                      </div>
                      <div className="text-lg font-semibold max-w-[260px]">
                        {estate?.address}
                      </div>
                      <div className="flex gap-x-4 my-4">
                        <div className="flex items-center text-gray-600 gap-1">
                          <div className="text-[20px]">
                            <BiBed />
                          </div>
                          <div>{estate?.bedrooms}</div>
                        </div>
                        <div className="flex items-center text-gray-600 gap-1">
                          <div className="text-[20px]">
                            <BiBath />
                          </div>
                          <div>{estate?.bathrooms}</div>
                        </div>
                        <div className="flex items-center text-gray-600 gap-1">
                          <div className="text-[20px]">
                            <BiArea />
                          </div>
                          <div>{estate?.surface}</div>
                        </div>
                      </div>
                      <div className="text-lg font-semibold text-violet-600 mb-3">
                        ${estate?.price}
                      </div>
                      <div>
                        <Link to={`/details/${estate?.id}`}>
                          <button className="px-6 py-2 bg-[#0ca39a] rounded-full text-xl font-medium hover:bg-[#0ca39a] hover:text-white focus:bg-[#0ca39a] focus:text-white">
                            View Details
                          </button>
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
          {!showAll && (
            <div className="text-center mt-4">
              <button
                className="btn btn-primary"
                onClick={() => setShowAll(true)}
              >
                Show All
              </button>
            </div>
          )}
        </section>
      </main>
    </>
  );
};

export default EstateData;
