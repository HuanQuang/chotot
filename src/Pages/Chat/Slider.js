import { Swiper, SwiperSlide } from 'swiper/react';
import { ChatIcon } from '../../access/image/Image';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
function Slider() {
    const slide = ChatIcon.map((item, key) => {
        return (
            <SwiperSlide key={key} className="w-[400px] mx-auto">
                <img className="w-[400px]" src={item.src} alt="img"></img>
                <h3 className="text-base font-bold text-center w-[400px]">{item.title}</h3>
            </SwiperSlide>
        );
    });
    return (
        <Swiper
            slidesPerView={1}
            modules={[Pagination, Autoplay]}
            speed={700}
            autoplay={{
                delay: 4000,
                disableOnInteraction: false,
            }}
            pagination={{
                currentClass: 'text-red',
                clickable: true,
            }}
            loop={true}
        >
            {slide}
        </Swiper>
    );
}

export default Slider;
