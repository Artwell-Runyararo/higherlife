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
        <div className='container-fluid w-full top-0 z-50 sticky'>
            <div className="row bg-white">
                <div className="col-sm col-md col-lg">
                    <Space className='flex justify-around'>
                        <span><img src={picture} className='img-fluid w-56' alt="" srcset="" /></span>
                        <nav>
                            {/* Desktop Navigation */}
                            <ul className="list-none m-0 py-4 w-full sm:flex hidden">
                                <Space>

                                    {navLinks.map((nav, index) => (
                                        <li key={nav.id}
                                            className={`cursor-pointer my-2 px-5 ${active === nav.title ? "text-color-primary" : "text-dimWhite"} ${index === navLinks.length - 1 ? "mr-0" : "mr-0"}`}
                                            onClick={() => setActive(nav.title)}
                                        >
                                            <Link to={`${nav.id}`} className="text-black text-uppercase text-decoration-none font-semibold" >{nav.title}</Link>
                                        </li>

                                    ))}
                                    <Link to={`/contact`} className="text-black justify-center my-2 text-decoration-none font-semibold w-100 sm:flex hidden" >CONTACT</Link>
                                </Space>
                            </ul>
                            {/* End of Desktop Navigation */}
                        </nav>
                    </Space>
                </div>
            </div>
        </div>
    )
}

export default Nav;