import React from 'react';
import { Space } from 'antd';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      {/* Desktop View */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="min-h-screen mx-44 justify-center hidden lg:flex">
          <div>
            <div className="text-center font-semibold py-32">
              <Space size={'large'}>
                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                <motion.p variants={textVariant(0.3)}>
                  <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Services</p>
                </motion.p>
              </Space>
            </div>
            <div className="flex flex-row">
              {/* Basic */}
              <div className="w-100 p-8 -z-10 backdrop-blur-lg bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 text-white text-center rounded-3xl pr-16 shadow-md">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.3)}><h1 className="text-5xl font-bold yellow-gradient-text">Headhunting</h1></motion.p>
                </div>
                <motion.p variants={textVariant(1.0)}>
                  <div className="flex text-center text-slate-400 justify-center">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.1)}>
                  <div className="text-center p-5">
                    <i className="bi bi-crosshair text-slate-400 text-9xl"></i>
                  </div>
                </motion.p>
              </div>
              {/* Startup card */}
              <div className="w-100 p-8  backdrop-blur-lg  bg-slate-900/40 hover:bg-slate-800/40 text-center rounded-3xl border-4 shadow-2xl transform scale-110">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.5)}>
                    <h1 className="text-5xl yellow-gradient-text font-bold">Executive Search </h1>
                  </motion.p>
                </div>
                <motion.p variants={textVariant(1.1)}>
                  <div className="flex text-center text-slate-400 justify-center">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.2)}>
                  <div className="text-center p-5">
                    <i className="bi bi-search text-9xl text-slate-400"></i>
                  </div>
                </motion.p>
              </div>
              {/* Enterprise card */}
              <div className="w-100 p-8 -z-10 backdrop-blur-lg bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 text-white text-center rounded-3xl pl-16 shadow-xl">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.7)}><h1 className="text-5xl yellow-gradient-text font-bold">Recruitment</h1></motion.p>
                </div>
                <motion.p variants={textVariant(1.2)}>
                  <div className="flex text-center text-slate-400 justify-center">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.3)}>
                  <div className="text-center p-5">
                    <i className="bi bi-check-square text-9xl text-slate-400"></i>
                  </div>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <div className="min-h-screen flex flex-col justify-center md:flex lg:hidden">
        <div className="text-center font-semibold py-20">
          <Space size={'large'}>
            <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
            <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Services</p>
          </Space>
        </div>
        <div className="px-4 flex flex-col space-y-8">

          <div className="w-full p-4 backdrop-blur-lg bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 text-center rounded-3xl shadow-xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl yellow-gradient-text font-bold">Headhunting</h1>
            </div>
            <div className="flex text-center text-slate-400 justify-center">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-crosshair text-6xl text-slate-400"></i>
            </div>
          </div>

          <div className="w-full p-4 backdrop-blur-lg bg-slate-900/40 hover:bg-slate-800/40 text-center rounded-3xl text-white border-4 shadow-xl border-white">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold yellow-gradient-text">Executive Search</h1>
            </div>
            <div className="flex text-center justify-center text-slate-400">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-search text-6xl text-slate-400"></i>
            </div>
          </div>

          <div className="w-full p-4 backdrop-blur-lg bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 rounded-3xl shadow-xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold yellow-gradient-text">Recruitment</h1>
            </div>
            <div className="flex text-center justify-center text-slate-400">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="text-center p-5">
              <i className="bi bi-check-square text-6xl text-slate-400"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
