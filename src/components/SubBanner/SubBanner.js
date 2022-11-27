import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { SubBannerImg } from '../../access/image/Image';
function SubBanner() {
    return (
        <div className="flex w-full h-[73px] px-3">
            <Swiper
                slidesPerView={8}
                breakpoints={{
                    200: {
                        slidesPerView: 2,
                    },
                    375: {
                        slidesPerView: 3,
                    },
                    520: {
                        slidesPerView: 4,
                    },
                    640: {
                        slidesPerView: 5,
                    },
                    960: {
                        slidesPerView: 8,
                        spaceBetween: 15,
                    },
                }}
            >
                {SubBannerImg.map((item, key) => {
                    return (
                        <SwiperSlide>
                            <Link className="flex flex-col justify-start items-center text-center w-[111px]" key={key}>
                                <img className="w-[33px]" src={item.src} alt="img"></img>
                                <p className="text-[14px] my-[2px]">{item.title}</p>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default SubBanner;
