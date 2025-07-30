import React from 'react';
import { Space } from 'antd';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';

const Services = () => {
  return (
    <>
      {/* Desktop View */}
      <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
        <div className="justify-center hidden min-h-screen mx-44 lg:flex">
          <div>
            <div className="py-32 font-semibold text-center">
              <Space size={'large'}>
                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                <motion.p variants={textVariant(0.3)}>
                  <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>Services</p>
                </motion.p>
              </Space>
            </div>
            <div className="flex flex-row">
              {/* Basic */}
              <div className="p-8 pr-16 text-center text-white shadow-md w-100 -z-10 backdrop-blur-lg bg-slate-800/40 border-inherit border-slate-700 hover:bg-slate-800/40 rounded-3xl">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.3)}><h1 className="text-5xl font-bold yellow-gradient-text">Headhunting</h1></motion.p>
                </div>
                <motion.p variants={textVariant(1.0)}>
                  <div className="flex justify-center text-center text-slate-400">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.1)}>
                  <div className="p-5 text-center">
                    <i className="bi bi-crosshair text-slate-400 text-9xl"></i>
                  </div>
                </motion.p>
              </div>
              {/* Startup card */}
              <div className="p-8 text-center transform scale-110 border-4 shadow-2xl w-100 backdrop-blur-lg bg-slate-800/40 hover:bg-slate-800/40 rounded-3xl">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.5)}>
                    <h1 className="text-5xl font-bold yellow-gradient-text">Executive Search </h1>
                  </motion.p>
                </div>
                <motion.p variants={textVariant(1.1)}>
                  <div className="flex justify-center text-center text-slate-400">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.2)}>
                  <div className="p-5 text-center">
                    <i className="bi bi-search text-9xl text-slate-400"></i>
                  </div>
                </motion.p>
              </div>
              {/* Enterprise card */}
              <div className="p-8 pl-16 text-center text-white shadow-xl w-100 -z-10 backdrop-blur-lg bg-slate-800/40 border-inherit border-slate-700 hover:bg-slate-800/40 rounded-3xl">
                <div className="flex justify-center p-5">
                  <motion.p variants={textVariant(0.7)}><h1 className="text-5xl font-bold yellow-gradient-text">Recruitment</h1></motion.p>
                </div>
                <motion.p variants={textVariant(1.2)}>
                  <div className="flex justify-center text-center text-slate-400">
                    We attract and source highly skilled senior management talent for large organisations
                  </div>
                </motion.p>
                <motion.p variants={textVariant(1.3)}>
                  <div className="p-5 text-center">
                    <i className="bi bi-check-square text-9xl text-slate-400"></i>
                  </div>
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Mobile View */}
      <div className="flex flex-col justify-center min-h-screen md:flex lg:hidden">
        <div className="py-20 font-semibold text-center">
          <Space size={'large'}>
            <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
            <p className='text-4xl font-semibold yellow-gradient-text text-uppercase'>Services</p>
          </Space>
        </div>
        <div className="flex flex-col px-4 space-y-8">

          <div className="w-full p-4 text-center shadow-xl backdrop-blur-lg bg-slate-800/40 border-inherit border-slate-700 hover:bg-slate-800/40 rounded-3xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold yellow-gradient-text">Headhunting</h1>
            </div>
            <div className="flex justify-center text-center text-slate-400">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="p-5 text-center">
              <i className="text-6xl bi bi-crosshair text-slate-400"></i>
            </div>
          </div>

          <div className="w-full p-4 text-center text-white border-4 border-white shadow-xl backdrop-blur-lg bg-slate-800/40 hover:bg-slate-800/40 rounded-3xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold yellow-gradient-text">Executive Search</h1>
            </div>
            <div className="flex justify-center text-center text-slate-400">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="p-5 text-center">
              <i className="text-6xl bi bi-search text-slate-400"></i>
            </div>
          </div>

          <div className="w-full p-4 shadow-xl backdrop-blur-lg bg-slate-800/40 border-inherit border-slate-700 hover:bg-slate-800/40 rounded-3xl">
            <div className="flex justify-center p-5">
              <h1 className="text-3xl font-bold yellow-gradient-text">Recruitment</h1>
            </div>
            <div className="flex justify-center text-center text-slate-400">
              We attract and source highly skilled senior management talent for large organisations
            </div>
            <div className="p-5 text-center">
              <i className="text-6xl bi bi-check-square text-slate-400"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
