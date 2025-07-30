import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/default-01.png'
import { Button, Divider } from 'antd'

const Footer = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row backdrop-blur-md bg-slate-900 ps-4 p-lg-5">
                    <div className="my-5 text-sm row">
                        <div className="col-sm-12 col-md-12 col-lg">
                            <span className="pl-3"><img src={logo} alt="HigherLife" className="object-contain img-fluid w-50" /></span>
                            <p className="px-2 py-5 text-2xl font-normal text-white">Professional Recruiters there for you every <br /> step of the way</p>
                        </div>
                        <div className="col-sm col-md col-lg">
                            <div className="row">
                                <div className="text-white col-sm col-md col-lg">
                                    <ul >
                                        <li className="py-2 font-semibold list-none">Candidates</li>
                                        <li className="py-2"><Link href={'#'} className='text-white text-decoration-none hover:text-yellow-600'>Jobs</Link></li>
                                        <li className="py-2"><Link href={'#'} className='text-white text-decoration-none hover:text-yellow-600'>CV Services</Link></li>
                                        <li className="py-2"><Link href={'#'} className='text-white text-decoration-none hover:text-yellow-600'>Upload Resume</Link></li>
                                    </ul>
                                </div>
                                <div className="text-white col-sm col-md col-lg">
                                    <ul>
                                        <li className="py-2 font-semibold">Clients</li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-white text-decoration-none' href={'##'}>Services</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-white text-decoration-none' href={'##'}>Benefits</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-white text-decoration-none' href={'##'}>Process</Link></li>
                                    </ul>
                                </div>
                                <div className="text-white col-sm col-md col-lg">
                                    <ul>
                                        <li className="py-2 font-semibold">Company</li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-white text-decoration-none' href={'###'}>About Us</Link></li>
                                        <li className="py-2 hover:text-yellow-600"><Link className='text-white text-decoration-none' href={'###'}>Privacy</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <Divider className='bg-gray-100' />
                            <div className="row">
                                <Button shape='round' className='py-4 text-xl font-bold bg-yellow-500 border-0'>CONTACT US</Button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="px-12 py-3 font-medium bg-white row">
                    <div className="col-sm col-md col-lg">
                        <p className="text-sm text-black">Copyright © 2013-2025 Powered by HigherLife Recruitment. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer