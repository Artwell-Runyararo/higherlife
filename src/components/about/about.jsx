import { Space } from 'antd';
import React from 'react'
import CountUp from 'react-countup';
import man from '../../assets/images/man.png'

const About = () => {
    return (
        <>
            <div className='container-fluid '>
                <div className="row px-44">
                    <div className="col-sm col-md col-lg">
                        <div className="text-left font-semibold py-24">
                            <h1 className="text-8xl text-white font-extrabold">About Us</h1>
                        </div>
                        <p className='text-white  text-[25px]'>
                            Higher Life Personnel Solutions is a 100% Black owned recruitment consultancy whose strategic focus is matching the right candidates to the
                            right opportunities. We focus on understanding and matching the expectations and cultures of our clients with the skills, experience and
                            personalities of our candidates. This allows us to constantly deliver a world-class service to meet diverse customer and candidate needs.
                            We have expertise in managing the entire life cycle of a recruitment flow. From concept to execution, from need identification to role defining,
                            from budgeting to job offer, from market research to interview, from sourcing to reference checks, we are capable of managing it all.
                        </p>
                        <div className="bg-slate-900 my-44">
                            <div className="row bg-color-secondary m-0 p-5 text-white ">
                                <div className="col-sm col-md col-lg flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={10} /> +</p>
                                        <p className='m-0 text-xl '>Professional Experience</p>
                                    </span>
                                </div>
                                <div className="col-sm col-md col-lg flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={250} /> +</p>
                                        <p className='m-0 text-xl '>Our Satisfied Clients &ensp;&ensp;&ensp;&ensp;&ensp;</p>
                                    </span>
                                </div>
                                <div className="col-sm col-md col-lg flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={100} /> +</p>
                                        <p className='m-0 text-xl '>Employees in current tea</p>
                                    </span>
                                </div>
                                <div className="col-sm col-md col-lg flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-6xl font-bold font-bolder'><CountUp className='m-0 text-6xl font-bold font-bolder' end={15} /> +</p>
                                        <p className='m-0 text-xl '>Years Industry Experience</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row px-44">
                    <div className="col-sm col-md col-lg">
                        <div className="bg-white px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-shield-check text-2xl"></i></span>
                                <span className='font-semibold text-2xl'>Integrity</span>
                            </Space>
                            <p className='f font-medium pt-2'>
                                Authentic, honest, and transparent
                                practice that fosters dependability,
                                accountability and professionalism
                            </p>
                        </div>
                        <div className="bg-white px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-crosshair text-2xl"></i></span>
                                <span className='font-semibold text-2xl'>Tenacity</span>
                            </Space>
                            <p className='f font-medium pt-2'>
                                The strength of will driven by persistence,
                                determination, resilience, commitment and
                                passion to achieve professional excellence.
                            </p>
                        </div>
                        <div className="bg-white px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-star text-2xl"></i></span>
                                <span className='font-semibold text-2xl'>Best Practice</span>
                            </Space>
                            <p className='f font-medium pt-2'>
                                Defining, executing and enhancing
                                methodologies for maximum efficiency
                                towards organizations strategic goals
                            </p>
                        </div>
                        <div className="bg-white px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-award text-2xl"></i></span>
                                <span className='font-semibold text-2xl'>Achievement</span>
                            </Space>
                            <p className='f font-medium pt-2'>
                                Strategic intent with discipline and
                                effort, and a deep sense of commitment,
                                perseverance and accountability.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm col-md col-lg">
                        <img src={man} className='w-100 img-fluid' alt="Man" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About