import React from 'react';

const Services = () => {

    return (
        <>
            <div className="min-h-screen flex justify-center">
                <div>
                    <div className="text-center font-semibold py-44">
                        <h1 className="text-8xl text-white font-extrabold">Services</h1>
                    </div>
                    <div className="px-72 flex flex-row">
                        {/* Basic */}
                        <div className="w-100 p-8 bg-white text-center rounded-3xl pr-16 shadow-xl">
                            <div className="row">
                                <div className="col-sm col-md col-lg flex justify-center p-5">
                                    <h1 className='text-6xl font-bold'>Headhunting</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-md col-lg">
                                    <span className='flex text-center justify-center'>We attract and source highly skilled senior management talent for large organisations</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md col-lg">
                                    <p className='text-center p-5'>
                                        <i class="bi bi-crosshair text-9xl"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Startup card */}
                        <div className="w-100 p-8 bg-gray-900 text-center rounded-3xl text-white border-4 shadow-xl border-white transform scale-125">
                            <div className="row">
                                <div className="col-sm col-md col-lg flex justify-center p-5">
                                    <h1 className='text-6xl font-bold'>Executive Search</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-md col-lg">
                                    <span className='flex text-center justify-center'>We attract and source highly skilled senior management talent for large organisations</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md col-lg">
                                    <p className='text-center p-5'>
                                        <i className="bi bi-search text-9xl"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                        {/* Enterprise card */}
                        <div className="w-100 p-8 bg-white text-center rounded-3xl pl-16 shadow-xl">
                            <div className="row">
                                <div className="col-sm col-md col-lg flex justify-center p-5">
                                    <h1 className='text-6xl font-bold'>Recruitment</h1>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm col-md col-lg">
                                    <span className='flex text-center justify-center'>We attract and source highly skilled senior management talent for large organisations</span>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg col-md col-lg">
                                    <p className='text-center p-5'>
                                        <i class="bi bi-check-square text-9xl"></i>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Services