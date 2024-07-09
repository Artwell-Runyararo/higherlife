import { Space } from 'antd'
import React from 'react'

const NavBar = () => {
    return (
        <div className='container-fluid text-white'>
            <div className="row p-5 ">
                {/* Desktop */}
                <div className="col-sm-12 col-md-12 col-lg flex justify-center">
                    <span className="hidden lg:inline-flex">
                        <Space size={'large'}>
                            <div className="col-sm col-md col-lg">
                                <Space>
                                    <span className=''><i className="bi bi-telephone-fill text-xl text-color-primary"></i></span>
                                    <span>
                                        <p className='m-0 text-white'>Phone No</p>
                                        <p className='m-0 text-color-primary'>+011 568 0825  </p>
                                    </span>
                                </Space>
                            </div>
                            <div className="col-sm col-md col-lg">
                                <Space>
                                    <span className=''><i className="bi bi-envelope-fill text-xl text-color-primary"></i></span>
                                    <span>
                                        <p className='m-0 text-white'>Email Address</p>
                                        <p className='m-0 text-color-primary'>info@higherlifepersonnel.co.za </p>
                                    </span>
                                </Space>
                            </div>
                            <div className="col-sm col-md col-lg">
                                <Space>
                                    <span className=''><i className="bi bi-geo-alt-fill text-xl text-color-primary"></i></span>
                                    <span>
                                        <p className='m-0 text-white'>Address</p>
                                        <p className='m-0 text-color-primary'>489, Nyabira Shopping Centre Nyabira</p>
                                    </span>
                                </Space>
                            </div>
                        </Space>
                    </span>
                </div>
                <div className="col-sm col-md col-lg flex justify-end">
                    <span className="hidden lg:inline-flex">
                        <Space  size={'large'}>
                            <div className="col-sm col-md col-lg">
                                <Space>
                                    <span className=''><i className="bi bi-linkedin text-3xl text-color-primary"></i></span>
                                    <span>
                                        <p className='m-0 text-white'>LinkedIn</p>
                                    </span>
                                </Space>
                            </div>
                            <div className="col-sm col-md col-lg">
                                <Space>
                                    <span className=''><i className="bi bi-facebook text-3xl text-color-primary"></i></span>
                                    <span>
                                        <p className='m-0 text-white'>Facebook</p>
                                    </span>
                                </Space>
                            </div>
                        </Space>
                    </span>
                </div>
                {/* End of Desktop */}
            </div>
        </div>
    )
}

export default NavBar