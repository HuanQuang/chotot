import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import { SliderImg } from '../../access/image/Image';
import 'swiper/css/pagination';
function Slider() {
    return (
        <div className="p-3">
            <Swiper
                slidesPerView={1}
                modules={[Pagination, Autoplay]}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    currentClass: 'text-red',
                    clickable: true,
                }}
                loop={true}
            >
                {SliderImg.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <img src={item.src} alt="img"></img>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Slider;
