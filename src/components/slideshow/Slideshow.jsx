import React, { useState } from 'react';
import picture from '../../assets/images/img.jpg';
import picture1 from '../../assets/images/img1.jpg';
import picture2 from '../../assets/images/img2.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Parallax, EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import '../../assets/css/style.css'; // Import your CSS file for animations
import Design from '../design/Design';
import { Button } from 'antd';
import { navVariants, slideIn, staggerContainer, textVariant, textVariant2, textContainer, fadeIn, zoomIn, footerVariants } from '../../utils/motion';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const navigate = useNavigate();
    const onRead = () => {
        navigate('/services')
    }
    return (
        <>
            {/* Desktop */}
            <motion.div variants={staggerContainer} initial="hidden" whileInView={'show'} viewport={{ once: false, amount: 0.25 }}>
                <div className="relative h-800px">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                            height: '800px'
                        }}
                        spaceBetween={30}
                        effect={'fade'}
                        navigation={true}
                        autoplay={{
                            delay: 8000,
                            disableOnInteraction: false,
                        }}
                        pagination={{
                            clickable: true,
                        }}
                        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                        modules={[EffectFade, Navigation, Pagination, Autoplay]}
                        className="mySwiper p-0 m-0 hidden lg:block"
                    >
                        {[picture, picture1, picture2].map((pic, index) => (
                            <SwiperSlide key={index} style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                                {/* Overlay div */}
                                <div className="absolute inset-0 bg-slate-900/80  w-full h-full m-0 p-0">
                                    {/* <Design /> */}
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    {/* Text Content */}
                    <div className="absolute inset-0 flex items-center -top-12 justify-center z-20  ">
                        <div className="relative text-center text-white hidden lg:block">
                            <div className="title-content px-24">
                                <div className="row">
                                    <div className="col-sm col-md col-lg">
                                        <motion.p variants={zoomIn(0.2, 1)} style={{ overflow: 'hidden', position: 'relative' }}>
                                            <p className="text-9xl font-bold">HIRING SIMPLIFIED, <span className='yellow-gradient-text text-9xl font-bold'>EXCELLENCE AMPLIFIED.</span></p>
                                        </motion.p>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <Button size='large' shape='round' className='w-25 h-20 bg-yellow-500 border-0 text-xl font-semibold text-black' onClick={onRead} >Read More</Button>
                        </div>
                    </div>
                </div>
            </motion.div>
            {/* end of Desktop */}

            {/* Mobile */}
            <div className="relative h-800px">
                <Swiper
                    style={{
                        '--swiper-navigation-color': '#fff',
                        '--swiper-pagination-color': '#fff',
                        height: '500px'
                    }}
                    spaceBetween={30}
                    effect={'fade'}
                    navigation={true}
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        clickable: true,
                    }}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                    modules={[EffectFade, Navigation, Pagination, Autoplay]}
                    className="mySwiper m-0 p-0 block lg:hidden"
                >
                    {[picture, picture1, picture2].map((pic, index) => (
                        <SwiperSlide key={index} style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Overlay div */}
                            <div className="absolute inset-0 bg-slate-900/80  w-full h-full m-0 p-0">
                                {/* <Design /> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative text-center text-white block lg:hidden">
                        <div className="title-content px-24 animate__animated animate__bounce">
                            <div className="row">
                                <div className="col-sm col-md col-lg">
                                    <p className="text-6xl font-bold">HIRING SIMPLIFIED, <span className='yellow-gradient-text text-6xl font-bold'>EXCELLENCE AMPLIFIED.</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of Mobile */}

        </>
    );
}

export default Slideshow;
