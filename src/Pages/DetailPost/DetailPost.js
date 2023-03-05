import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AxiosClient from '../../utils/Api/Axios';
import LikeButton from './LikeButton';
import {
    ShareIconDetailPost,
    LocationIconDetailPost,
    TimeIconDetailPost,
    SecuryIconDetailPost,
} from '../../access/svg/svg';
import Poster from './Poster';
function DetailPost() {
    const { id } = useParams();
    const [data, setData] = useState({});
    const [currentImg, setCurrentImg] = useState();
    const [active, setActive] = useState();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    useEffect(() => {
        AxiosClient.get(`post/${id}`).then((res) => setData(res.data));
    }, [id]);
    useEffect(() => {
        setCurrentImg(data.img ? data.img[0] : '');
    }, [data]);
    const information = data.information ? Object.entries(data.information) : [];
    return (
        <div className="max-w-[960px] mx-auto text-[#222222] bg-[#f4f4f4]">
            <div className="flex my-4 items-center px-4 bg-[#f4f4f4]">
                <Link className="text-xs text-[#2a5079] whitespace-nowrap" to={'/'}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222] whitespace-nowrap">{data.type}</p>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222] whitespace-nowrap">{data.title}</p>
            </div>
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-2/3 lg:px-4">
                    <div>
                        <div className="flex justify-center bgDetailPost">
                            <img
                                src={currentImg}
                                className="cursor-zoom-in max-h-[456px] h-3/4 object-cover"
                                alt="img"
                            ></img>
                        </div>
                        <div className="bg-[#eeeeee] h-[108px] relative mt-3 overflow-hidden">
                            <div className="flex abssolute h-full w-max">
                                {data?.img?.map((item, key) => {
                                    return (
                                        <img
                                            key={key}
                                            src={item}
                                            className={`h-[104px] w-[112px] mr-2 ${
                                                item === active ? 'border-2 border-solid border-[#fe9900]' : ''
                                            }`}
                                            onMouseMove={() => {
                                                setCurrentImg(item);
                                                setActive(item);
                                            }}
                                            alt="img"
                                        ></img>
                                    );
                                })}
                            </div>
                            <div className="absolute bg-[#000] opacity-80 w-full bottom-0 text-right text-sm p-1 pr-5 text-[#f5f5f5]">
                                Tin đăng lúc {data.createdAt?.substr(0, 10)}
                            </div>
                        </div>
                        <div className="my-1 p-3 bg-[#ffffff]">
                            <h1 className="text-base font-bold">{data.title}</h1>
                            <div className="flex justify-between mb-[10px]">
                                <p className="text-base text-[#c90927] font-bold">{data.information?.price}</p>
                                <div className="flex gap-6 text-xs">
                                    <div className="flex items-center">
                                        <ShareIconDetailPost />
                                        <span className="ml-1">Chia sẻ</span>
                                    </div>
                                    <LikeButton id={id} />
                                </div>
                            </div>
                            <div className="flex items-center">
                                <div className="w-5 h-5">
                                    <LocationIconDetailPost />
                                </div>
                                <span className="ml-1 text-[#777] font-normal text-sm leading-6">{data.address}</span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-5 h-5">
                                    <TimeIconDetailPost />
                                </div>
                                <span className="ml-1 text-[#777] font-normal text-sm leading-6">
                                    {' '}
                                    {data.createdAt?.substr(0, 10)}
                                </span>
                            </div>
                            <div className="flex items-center">
                                <div className="w-5 h-5">
                                    <SecuryIconDetailPost />
                                </div>
                                <span className="ml-1 text-[#777] font-normal text-sm leading-6">
                                    Tin đã được kiểm duyệt.
                                </span>
                                <a
                                    className="ml-2 text-[#2275d3] text-sm"
                                    href="https://trogiup.chotot.com/nguoi-ban/tai-sao-chotot-vn-duyet-tin-truoc-khi-dang/"
                                >
                                    Tìm hiểu thêm
                                </a>
                            </div>
                        </div>
                        <div className="my-2 p-3 bg-[#ffffff]">
                            <h1 className="text-base font-bold">Đặc điểm chi tiết</h1>
                            <p className="lg:flex flex-wrap">
                                {information?.map((item, index) => {
                                    return (
                                        <li key={index} className="text-sm font-normal leading-5 my-2 w-full lg:w-1/2">
                                            {item[1]}
                                        </li>
                                    );
                                })}
                            </p>
                        </div>
                        <div className="my-2 p-3 bg-[#ffffff]">
                            <h1 className="text-base font-bold">Mô tả chi tiết</h1>
                            <p className="text-sm font-normal leading-5">{data.description}</p>
                        </div>
                    </div>
                </div>
                <Poster poster={data.poster} />
            </div>
        </div>
    );
}

export default DetailPost;
