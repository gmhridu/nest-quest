import React from 'react';
import { Link } from 'react-router-dom';
import errorImg from '../../../public/404.svg'

const Error = () => {
  return (
    <section className="flex h-screen items-center justify-center p-16 bg-gray-50 text-gray-800">
      <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
        <div className="max-w-lg text-center">
          <img src={errorImg} alt="" />
          <p className="text-2xl font-semibold md:text-3xl">
            Oops! Page Not Found.
          </p>
          <p className="mt-4 mb-8 text-gray-600">
            The page you are looking for is not available or has been moved. Try
            a different page or go to homepage with the button below.
          </p>
          <Link
            to={"/"}
            className="px-8 py-3 font-semibold rounded bg-violet-600 text-gray-50"
          >
            Back to homepage
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;