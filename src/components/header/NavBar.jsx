import { Space } from 'antd'
import React from 'react';
import { useNavigate, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className='container-fluid text-white'>
            <div className="row py-4 px-20">
                {/* Desktop */}
                <div className="col-sm col-md col-lg-9 hidden lg:inline-flex ">
                    <Space className='mx-3'>
                        <span className=''><i className="bi bi-telephone-fill text-lg text-color"></i></span>
                        <span>
                            <p className='m-0 text-white text-[10px]'>Phone No</p>
                            <p className='m-0 text-color text-[10px]'>011 568 0825</p>
                        </span>
                    </Space>
                    <Space className='mx-3'>
                        <span className=''><i className="bi bi-envelope-fill text-lg text-color"></i></span>
                        <span>
                            <p className='m-0 text-white text-[10px]'>Email Address</p>
                            <p className='m-0 text-color text-[10px]'>info@higherlifepersonnel.co.za </p>
                        </span>
                    </Space>
                    <Space className='mx-3'>
                        <span className=''><i className="bi bi-geo-alt-fill text-lg text-color"></i></span>
                        <span>
                            <p className='m-0 text-white text-[10px]'>Address</p>
                            <p className='m-0 text-color text-[10px]'>Clearwater Office Park, Building 3 ,Millenium Road, West Rand, 1735</p>
                        </span>
                    </Space>
                </div>
                <div className="col-sm col-md col-lg-3 hidden lg:inline-flex justify-end">
                    <Space className='mx-2'>
                        <span className=''><i className="bi bi-linkedin text-lg text-color"></i></span>
                        <span>
                            <p className='m-0 text-white text-[10px]'>LinkedIn</p>
                        </span>
                    </Space>
                    <Space className='mx-2'>
                        <span className=''><i className="bi bi-facebook text-lg text-color"></i></span>
                        <span>
                            <p className='m-0 text-white text-[10px]'><Link className='text-white text-decoration-none' to={'https://www.facebook.com/higherlifepersonnel'}>Facebook</Link></p>
                        </span>
                    </Space>
                </div>
                {/* End of Desktop */}
            </div>
        </div>
    )
}

export default NavBar