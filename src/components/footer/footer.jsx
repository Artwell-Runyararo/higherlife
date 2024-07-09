import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/default-01.png'
import { Button, Divider } from 'antd'

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row  backdrop-blur-md bg-slate-900 ps-4 p-lg-5">
                    <div className="row text-sm my-5">
                        <div className="col-sm-12 col-md-12 col-lg">
                            <span className="pl-3"><img src={logo} alt="HigherLife" className="object-contain img-fluid w-50" /></span>
                            <p className="text-white text-2xl px-2 font-normal py-5">Professional Recruiters there for you every <br /> step of the way</p>
                        </div>
                        <div className="col-sm col-md col-lg">
                            <div className="row">
                                <div className="col-sm col-md col-lg text-white">
                                    <ul >
                                        <li className="py-2 list-none font-semibold">Candidates</li>
                                        <li className="py-2"><Link href={'#'} className='text-decoration-none text-white hover:text-yellow-600'>Jobs</Link></li>
                                        <li className="py-2"><Link href={'#'} className='text-decoration-none text-white hover:text-yellow-600'>CV Services</Link></li>
                                        <li className="py-2"><Link href={'#'} className='text-decoration-none text-white hover:text-yellow-600'>Upload Resume</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm col-md col-lg text-white">
                                    <ul>
                                        <li className="py-2 font-semibold">Clients</li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-decoration-none text-white' href={'##'}>Services</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-decoration-none text-white' href={'##'}>Benefits</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-decoration-none text-white' href={'##'}>Process</Link></li>
                                    </ul>
                                </div>
                                <div className="col-sm col-md col-lg text-white">
                                    <ul>
                                        <li className="py-2 font-semibold">Company</li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-decoration-none text-white' href={'###'}>About Us</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-decoration-none text-white' href={'###'}>Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Divider className='bg-gray-100' />
                            <div className="row">
                                <Button shape='round' className='bg-yellow-500 border-0 font-bold py-4 text-xl'>CONTACT US</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row bg-white py-3 px-12 font-medium">
                    <div className="col-sm col-md col-lg">
                        <p className="text-sm">Copyright © 2013-2024 Powered by HigherLife Recruitment. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer