import { CategoryImg } from '../../access/image/Image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
function Category() {
    return (
        <div className="py-3 w-full">
            <h4 className="mb-3 pl-3 text-[17px] text-[rgb(34,34,34)] font-bold">Khám phá danh mục</h4>
            <Swiper slidesPerView={6} spaceBetween={0}>
                {CategoryImg.map((item, key) => {
                    return (
                        <SwiperSlide key={key}>
                            <Link className="flex justify-start items-center text-center flex-col w-[135px] max-w-[135px] m-0">
                                <img className="w-[84px]" src={item.src} alt="danh mục"></img>
                                <p className="pt-2 text-[14px] w-28  line-clamp-2 text-ellipsis">{item.title}</p>
                            </Link>
                        </SwiperSlide>
                    );
                })}
            </Swiper>
        </div>
    );
}

export default Category;
