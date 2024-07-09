import React, { useState } from 'react';
import picture from '../../assets/images/img2.png';
import picture1 from '../../assets/images/img.jpg';
import picture2 from '../../assets/images/img1.jpg';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import { Parallax, EffectFade, Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Link } from 'react-router-dom';
import '../../assets/css/style.css'; // Import your CSS file for animations
import Design from '../design/Design';

const Slideshow = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <>
            {/* Desktop */}
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
                        <SwiperSlide key={index}  style={{ backgroundImage: `url(${pic})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                            {/* Overlay div */}
                            <div className="absolute inset-0 bg-slate-900/60 bg-opacity-80 w-full h-full m-0 p-0">
                                {/* <Design /> */}
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                {/* Text Content */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                    <div className="relative text-center text-white">
                        <div className="title-content px-24 animate__animated animate__bounce">
                            <div className="row">
                                <div className="col-sm col-md col-lg">
                                    <p className="text-9xl font-bold">HIRING SIMPLIFIED, EXCELLENCE AMPLIFIED.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end of Desktop */}




        </>
    );
}

export default Slideshow;