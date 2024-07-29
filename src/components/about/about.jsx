import { Space } from 'antd';
import React from 'react'
import CountUp from 'react-countup';
import man from '../../assets/images/img.jpg';
import { StarFilled } from '@ant-design/icons';

const About = () => {
    const features = [
        {
            name: 'Quality Professional Recruiting',
            description: 'Experienced recruitment professionals complemented by an in-depth understanding of the complexities of the hiring process. We boast educated recruiters with experience in developing tailored interviewing and assessment techniques for a broad variety of roles across Information Technology, Engineering, Healthcare or Biotech and Business.',
            icon: StarFilled,
        },
        {
            name: 'Recruitment Expertise and Industry Knowledge',
            description: 'We keep in tune with current and future trends in a wide variety of Recruitment Service Practice Areas.',
            icon: StarFilled,
        },
        {
            name: 'Meaningful candidate profiles and outstanding candidates',
            description: 'All our candidate submissions come with meaningful candidate profiles. The Applicant Summary has been designed so that it may be used as a stand-alone document or accompanied by a resume.',
            icon: StarFilled,
        },
        {
            name: 'Reference Checks/Background Verification',
            description: 'A reference is a great way of confirming a candidate’s skills and qualifications; therefore, references are essential to the quality commitment as well.',
            icon: StarFilled,
        },
    ]
    return (
        <>
            {/* Desktop View */}
            <div className='container-fluid hidden lg:block'>
                <div className="row px-44">
                    <div className="col-sm col-md col-lg">
                        <div className="text-left font-semibold pt-28">
                            <h1 className="text-8xl text-white font-extrabold"></h1>
                            <Space size={'large'}>
                                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                                <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>About Us</p>
                            </Space>
                        </div>
                        <p className='text-slate-400 py-14 '>
                            Higher Life Personnel Solutions is a 100% Black owned recruitment consultancy whose strategic focus is matching the right candidates to the
                            right opportunities. We focus on understanding and matching the expectations and cultures of our clients with the skills, experience and
                            personalities of our candidates. This allows us to constantly deliver a world-class service to meet diverse customer and candidate needs.
                            We have expertise in managing the entire life cycle of a recruitment flow. From concept to execution, from need identification to role defining,
                            from budgeting to job offer, from market research to interview, from sourcing to reference checks, we are capable of managing it all.
                        </p>
                        <div className="backdrop-blur-lg bg-slate-900/40 rounded-3xl border-inherit border-slate-700 hover:bg-slate-800/40">
                            <div className="row m-0 p-5 text-white ">
                                <div className="col-sm col-md col-lg">
                                    <span>
                                        <p className='m-0 text-4xl font-bold yellow-gradient-text'><CountUp className='m-0 text-4xl font-bold' end={100} /> %</p>
                                        <p className='m-0 text-base'>Black Owned</p>
                                    </span>
                                </div>
                                <div className="col-sm col-md col-lg">
                                    <span>
                                        <p className='m-0 text-4xl font-bold yellow-gradient-text'><CountUp className='m-0 text-4xl font-bold' end={50} /> yrs</p>
                                        <p className='m-0 text-base'>Years(Combined expertise)</p>
                                    </span>
                                </div>
                                <div className="col-sm col-md col-lg">
                                    <span>
                                        <p className='m-0 text-4xl yellow-gradient-text font-bold'><CountUp className='m-0 text-4xl font-bold' end={6} /> yrs</p>
                                        <p className='m-0 text-base'>Years(Operational)</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm col-md col-lg p-5">
                        <div className="p-5">
                            <h2 className="text-base font-semibold leading-7 py-3 text-white">Higherlife</h2>
                            <Space size={'large'}>
                                <p style={{ height: '40px', width: '3px' }} className='bg-white'><p style={{ height: '20px', width: '3px' }} className='bg-yellow-500'></p></p>
                                <p className='yellow-gradient-text text-4xl text-uppercase font-semibold'>Why Higher Life Personnel Solutions?</p>
                            </Space>
                            <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-slate-400 lg:max-w-none">
                                {features.map((feature) => (
                                    <div key={feature.name} className="relative pl-9">
                                        <dt className="inline font-semibold text-white">
                                            <feature.icon aria-hidden="true" className="absolute left-1 top-1 h-5 w-5 text-slate-400" />
                                            {feature.name}
                                        </dt>
                                        <dd className="inline"> &ensp;{feature.description}</dd>
                                    </div>
                                ))}
                            </dl>
                        </div>
                    </div>
                </div>
                <div className="row px-44">
                    <div className="col-sm col-md col-lg">
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-shield-check text-slate-400 text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Integrity</span>
                            </Space>
                            <p className='font-medium pt-2 text-slate-400 md:text-base'>
                                Authentic, honest, and transparent
                                practice that fosters dependability,
                                accountability and professionalism
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-crosshair text-slate-400 text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Tenacity</span>
                            </Space>
                            <p className='font-medium pt-2 text-slate-400 md:text-base'>
                                The strength of will driven by persistence,
                                determination, resilience, commitment and
                                passion to achieve professional excellence.
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-star text-xl md:text-2xl text-slate-400"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Best Practice</span>
                            </Space>
                            <p className='font-medium text-slate-400 pt-2 md:text-base'>
                                Defining, executing and enhancing
                                methodologies for maximum efficiency
                                towards organizations strategic goals
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40  border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-award text-slate-400 text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Achievement</span>
                            </Space>
                            <p className='font-medium pt-2 text-slate-400 md:text-base'>
                                Strategic intent with discipline and
                                effort, and a deep sense of commitment,
                                perseverance and accountability.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm col-md col-lg px-5">
                        <img src={man} className='w-100 img-fluid' alt="Man" srcset="" />
                    </div>
                </div>
            </div>

            {/* Mobile View */}
            <div className='container-fluid lg:hidden'>
                <div className="row px-4 md:px-12">
                    <div className="col-sm col-md col-lg">
                        <div className="text-left font-semibold pt-20 md:pt-40">
                            <h1 className="text-4xl md:text-6xl text-white font-extrabold">About Us</h1>
                        </div>
                        <p className='text-slate-400 py-10 md:py-20 text-base md:text-lg'>
                            Higher Life Personnel Solutions is a 100% Black owned recruitment consultancy whose strategic focus is matching the right candidates to the
                            right opportunities. We focus on understanding and matching the expectations and cultures of our clients with the skills, experience and
                            personalities of our candidates. This allows us to constantly deliver a world-class service to meet diverse customer and candidate needs.
                            We have expertise in managing the entire life cycle of a recruitment flow. From concept to execution, from need identification to role defining,
                            from budgeting to job offer, from market research to interview, from sourcing to reference checks, we are capable of managing it all.
                        </p>
                        <div className="backdrop-blur-lg bg-slate-900/40 rounded-3xl border-inherit border-slate-700 hover:bg-slate-800/40 my-20 md:my-40">
                            <div className="row bg-color-secondary m-0 p-3 md:p-5 text-white">
                                <div className="col-6 flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text'><CountUp className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text' end={100} /> %</p>
                                        <p className='m-0 md:text-lg'>Black Owned</p>
                                    </span>
                                </div>
                                <div className="col-6 flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text'><CountUp className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text' end={6} /> yrs</p>
                                        <p className='m-0 text-sm md:text-lg'>Years(Operational)</p>
                                    </span>
                                </div>
                                <div className="col-6 flex justify-center py-3">
                                    <span>
                                        <p className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text'><CountUp className='m-0 text-3xl md:text-5xl font-bold yellow-gradient-text' end={50} /> yrs</p>
                                        <p className='m-0 text-sm md:text-lg'>Years(Combined expertise)</p>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row px-4 md:px-12">
                    <div className="col-sm col-md col-lg">
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-shield-check text-slate-400  text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Integrity</span>
                            </Space>
                            <p className='font-medium text-slate-400 pt-2 text-sm md:text-base'>
                                Authentic, honest, and transparent
                                practice that fosters dependability,
                                accountability and professionalism
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-crosshair text-slate-400  text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Tenacity</span>
                            </Space>
                            <p className='font-medium text-slate-400 pt-2 text-sm md:text-base'>
                                The strength of will driven by persistence,
                                determination, resilience, commitment and
                                passion to achieve professional excellence.
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-star text-slate-400  text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Best Practice</span>
                            </Space>
                            <p className='font-medium text-slate-400 pt-2 text-sm md:text-base'>
                                Defining, executing and enhancing
                                methodologies for maximum efficiency
                                towards organizations strategic goals
                            </p>
                        </div>
                        <div className="backdrop-blur-sm bg-slate-900/40 border-inherit border-slate-700 hover:bg-slate-800/40 px-8 md:px-16 py-4 my-4 rounded-3xl">
                            <Space>
                                <span><i className="bi bi-award text-slate-400  text-xl md:text-2xl"></i></span>
                                <span className='font-semibold yellow-gradient-text text-xl md:text-2xl'>Achievement</span>
                            </Space>
                            <p className='font-medium text-slate-400 pt-2 text-sm md:text-base'>
                                Strategic intent with discipline and
                                effort, and a deep sense of commitment,
                                perseverance and accountability.
                            </p>
                        </div>
                    </div>
                    <div className="col-sm col-md col-lg my-5">
                        <img src={man} className='w-100 img-fluid' alt="Man" srcset="" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default About