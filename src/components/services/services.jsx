import React from 'react';

const Services = () => {
  return (
    <>
      {/* Desktop View */}
      <div className="min-h-screen flex justify-center hidden lg:flex">
        <div>
          <div className="text-center font-semibold py-44">
            <h1 className="text-8xl text-white font-extrabold">Services</h1>
          </div>
          <div className="px-72 flex flex-row">
            {/* Basic */}
            <div className="w-100 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
              <div className="flex justify-center p-5">
                <h1 className="text-6xl font-bold">Headhunting</h1>
              </div>
              <div className="flex text-center justify-center">
                We attract and source highly skilled senior management talent for large organisations
              </div>
              <div className="text-center p-5">
                <i className="bi bi-crosshair text-9xl"></i>
              </div>
            </div>
            {/* Startup card */}
            <div className="w-100 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
              <div className="flex justify-center p-5">
                <h1 className="text-6xl font-bold">Executive Search</h1>
              </div>
              <div className="flex text-center justify-center">
                We attract and source highly skilled senior management talent for large organisations
              </div>
              <div className="text-center p-5">
                <i className="bi bi-search text-9xl"></i>
              </div>
            </div>
            {/* Enterprise card */}
            <div className="w-100 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
              <div className="flex justify-center p-5">
                <h1 className="text-6xl font-bold">Recruitment</h1>
              </div>
              <div className="flex text-center justify-center">
                We attract and source highly skilled senior management talent for large organisations
              </div>
              <div className="text-center p-5">
                <i className="bi bi-check-square text-9xl"></i>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="min-h-screen flex flex-col justify-center md:flex lg:hidden">
        <div className="text-center font-semibold py-20">
          <h1 className="text-4xl text-white font-extrabold">Services</h1>
        </div>
        <div className="px-4 flex flex-col space-y-8">
          {/* Basic */}
          <div className="w-full p-4 bg-white text-center rounded-3xl shadow-xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold">Headhunting</h1>
            </div>
            <div className="flex text-center justify-center">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-crosshair text-6xl"></i>
            </div>
          </div>
          {/* Startup card */}
          <div className="w-full p-4 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold">Executive Search</h1>
            </div>
            <div className="flex text-center justify-center">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-search text-6xl"></i>
            </div>
          </div>
          {/* Enterprise card */}
          <div className="w-full p-4 bg-white text-center rounded-3xl shadow-xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold">Recruitment</h1>
            </div>
            <div className="flex text-center justify-center">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-check-square text-6xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
