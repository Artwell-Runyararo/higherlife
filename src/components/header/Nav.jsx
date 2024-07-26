import React, { useState } from 'react'
import { navLinks } from '../../constants';
import { Link } from 'react-router-dom';
import { Flex, Space } from 'antd';
import picture from '../../assets/images/default-logo.png'

const Nav = () => {
    const [active, setActive] = useState("");
    const [toggle, setToggle] = useState(false);
    const [toggleMobile, setToggleMobile] = useState(false);
    return (
        <>
            <div className='container-fluid w-full top-0 z-50 sticky'>
                <div className='row px-24 bg-white'>
                    <div className='hidden lg:inline-flex'>
                        <div className="col-sm col-md col-lg">
                            <span><img src={picture} className='w-52 py-4 img-fluid' alt="" srcset="" /></span>
                        </div>
                        <div className="col-sm col-md col-lg flex justify-end">
                            <nav>
                                {/* Desktop Navigation */}
                                <ul className="list-none m-0 py-4 w-full sm:flex hidden">
                                    {navLinks.map((nav, index) => (
                                        <li key={nav.id}
                                            className={`cursor-pointer my-2 mr-16 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                                            onClick={() => setActive(nav.title)}
                                        >
                                            <Link to={`${nav.id}`} className="text-black text-uppercase text-decoration-none font-semibold" >{nav.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {/* End of Desktop Navigation */}
                            </nav>
                        </div>
                    </div>

                </div>
                <div className='inline-flex lg:hidden '>
                    <div className="row">
                        <div className="col-sm col-md col-lg">
                            {/* Logo Mobile */}
                            <Flex size={'small'} gap="small" justify='space-around' className='w-full'>
                                {/* <Space>
                        <img src={logo} alt='micfix' className="img-fluid object-contain" width={50} /><span className='text-white font-bold text-3xl'>Micfix Engineering</span>
                    </Space> */}
                                <Space>
                                    {/* Icons Drop down menu items Mobile */}
                                    <span className="inline-block justify-end lg:hidden ">
                                        {toggleMobile ? (
                                            <span
                                                onClick={() => setToggleMobile(!toggleMobile)} >
                                                <i onClick={() => setToggleMobile(!toggleMobile)} className="bi bi-x-lg text-white text-5xl"></i>
                                            </span>
                                        ) : (
                                            <span onClick={() => setToggleMobile(!toggleMobile)} >
                                                <i onClick={() => setToggleMobile(!toggleMobile)} className="bi bi-list text-white text-5xl"></i>
                                            </span>
                                        )}
                                    </span>
                                    {/* End of Icons Drop down menu items Mobile */}
                                </Space>
                            </Flex>
                            {/* End of  Logo Mobile */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Mobile */}
            <div className="m-0 p-0 inline-block lg:hidden flex-1 justify-end z-50  items-center">
                <div className={`${!toggleMobile ? "hidden" : "flex"} w-full p-6  z-50 bg-white animate__animated animate__fadeInDown animate__fast border  absolute top-48 right-0 my-2  sidebar`} >
                    <div className="row m-0 p-0">
                        <div className="col-sm col-md col-lg  inline-block lg:hidden">
                            <nav>
                                {/* Mobile Navigation */}
                                <ul className="list-none bg-white m-0 p-4 w-full inline-block lg:hidden">
                                    {navLinks.map((nav, index) => (
                                        <li key={nav.id}
                                            className={`cursor-pointer my-5 px-5 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                                            onClick={() => setActive(nav.title)}
                                        >
                                            <Link to={`${nav.id}`} className="text-xl text-color-secondary text-decoration-none font-semibold border-b border-slate-900 pr-16 " >{nav.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                                {/* End of Mobile Navigation */}
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/* End of mobile */}
        </>
    )
}

export default Nav;