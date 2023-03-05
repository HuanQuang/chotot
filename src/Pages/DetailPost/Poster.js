import {
    StarIconDetailPost,
    PrivateIconDetailPost,
    CallIconDetailPost,
    MessageIconDetailPost,
    SupportIconDetailPost,
    WarningIconDetailPost,
} from '../../access/svg/svg';
import { Link } from 'react-router-dom';
import { useRef, useState, useEffect } from 'react';
function Poster({ poster }) {
    const [width, setWidth] = useState(0);
    const [active, setActive] = useState();
    const [phone, setPhone] = useState(false);
    const [top, setTop] = useState();
    const ref = useRef(null);
    useEffect(() => {
        if (window) {
            const width = ref.current.clientWidth;
            setWidth(width + 'px');
            window.addEventListener('scroll', () => {
                if (window.scrollY >= 100 && window.scrollY < 600) {
                    setActive('lg:fixed lg:top-[100px]');
                    setTop(100);
                } else if (window.scrollY >= 600) {
                    setActive(`lg:absolute lg:left-0`);
                    setTop(600);
                } else setActive('');
            });
        }
    }, []);
    return (
        <div className="w-full lg:w-1/3 relative" ref={ref}>
            <div
                style={{ width: width, top: top + 'px' }}
                className={`${active} border-t-[1px] border-solid border-[#e5e5e5]}`}
            >
                <div className="mb-[10px] p-3 flex bg-[#ffffff]">
                    <div className="w-[50px] h-[50px]">
                        <img src={poster?.avatar} alt="avatar" className="w-full rounded-full h-full"></img>
                    </div>
                    <div className="pl-2 flex-grow">
                        <div className="flex my-[5px] justify-between items-center">
                            <h1 className=" text-sm leading-4 font-bold">{poster?.fullName || poster?.phone}</h1>
                            <Link
                                to={`/users/${poster?.userId}`}
                                className="text-[#ff6d25] border-[1px] border-solid border-[#ff6d25] rounded-3xl text-xs leading-[8px] py-[7px] px-[10px] outline-none"
                            >
                                Xem trang {'>'}
                            </Link>
                        </div>
                        <div className="flex items-center text-[#9b9b9b] text-xs leading-5">
                            <PrivateIconDetailPost />
                            <span className="ml-1">Cá nhân</span>
                        </div>
                        <div className="flex items-center text-[#9b9b9b] text-xs leading-5">
                            <span className="w-4 text-[34px] flex items-center justify-center">•</span>
                            <span className="ml-1">Chưa hoạt động</span>
                        </div>
                        <div className="flex">
                            <div className="flex gap-1 mb-7">
                                <StarIconDetailPost />
                                <StarIconDetailPost />
                                <StarIconDetailPost />
                                <StarIconDetailPost />
                                <StarIconDetailPost />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="bg-[#fff] overflow-hidden mb-2">
                    <div className="flex p-3  justify-between items-center">
                        <div className="font-bold text-base text-[#222] ">Liên hệ với người bán</div>
                        <span className="text-xs text-[#9b9b9b]">Phản hồi: --</span>
                    </div>
                    <div className="w-full overflow-x-scroll -webkit-inline-box mb-1 mx-3">
                        <p className="bg-[#f4f4f4] py-[6px] px-3 mr-3 text-sm rounded-[20px] cursor-pointer w-max">
                            Sản phẩm này còn không ạ?
                        </p>
                        <p className="bg-[#f4f4f4] py-[6px] px-3 mr-3 text-sm rounded-[20px] cursor-pointer w-max">
                            Sản phẩm này chính chủ hay được uỷ quyền ạ?
                        </p>
                        <p className="bg-[#f4f4f4] py-[6px] px-3 mr-3 text-sm rounded-[20px] cursor-pointer w-max">
                            Giá cả có thể thương lượng không ạ?
                        </p>
                        <p className="bg-[#f4f4f4] py-[6px] px-3 mr-3 text-sm rounded-[20px] cursor-pointer w-max">
                            Sản phẩm này có chính sách bảo hành như thế nào?
                        </p>
                        <p className="bg-[#f4f4f4] py-[6px] px-3 mr-3 text-sm rounded-[20px] cursor-pointer w-max">
                            Các thủ tục và giao dịch như thế nào?
                        </p>
                    </div>
                    <div className="py-2 px-3">
                        <div className="text-[#fff] bg-[#589f39] flex rounded justify-between hover:bg-[#386e21]">
                            <div className="flex py-[10px] rounded px-[10px] text-sm font-bold items-center">
                                <CallIconDetailPost /> <span className="ml-2">{phone ? '0' + poster.phone : ''}</span>
                            </div>
                            <button
                                onClick={() => (phone ? setPhone(false) : setPhone(true))}
                                className="text-sm font-bold flex items-center px-[10px]"
                            >
                                {phone ? 'Ẩn' : 'BẤM ĐỂ HIỆN SỐ'}
                            </button>
                        </div>
                    </div>
                    <div className="bg-[#fff] hover:bg-[#f4f4f4] mx-3 my-2 font-bold py-2 px-[10px] flex justify-between rounded text-base text-[#589f39] border-[1px] border-solid border-[#ccc]">
                        <MessageIconDetailPost /> <span className="text-sm leading-6">CHAT VỚI NGƯỜI BÁN</span>
                    </div>
                </div>
                <div className="flex justify-between my-[14px] text-[#777] px-[6px]">
                    <a href="https://trogiup.chotot.com" className="flex items-center cursor-pointer">
                        <SupportIconDetailPost />
                        <span className="ml-[10px] text-sm">Cần trợ giúp</span>
                    </a>
                    <div className="flex items-center cursor-pointer">
                        <WarningIconDetailPost />
                        <span className="ml-[10px] text-sm">Báo cáo tin này</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Poster;
