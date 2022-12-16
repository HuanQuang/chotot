import { MoreIcon } from '../../../../access/image/Image';
import { moreService, moreOthers } from '../../../../utils/constants/Constant';
import { MoreOrderIcon, MoreOrderIcon2, MorePay, MoreLogOutIcon } from '../../../../access/svg/svg';
import { isLogOut } from '../../../../Features/UserSlice';
import { PublicRouter } from '../../../../Routers/Router';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function PopUp() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const handleLogOut = async () => {
        localStorage.removeItem('accessToken');
        const data = {};
        dispatch(isLogOut(data));
        navigate(PublicRouter.Login.path);
    };
    return (
        <div className="w-[300px] bg-[#FFFFFF] border-[1px] border-solid border-[#00000026] popupShadow overflow-y-scroll max-h-[80vh]">
            <div className="flex px-3 pt-3">
                <div className="w-12 h-12 rounded-full">
                    <img
                        className="rounded-full w-full h-full"
                        src="https://cdn.chotot.com/uac2/24191959"
                        alt="avatar"
                    ></img>
                </div>
                <div className="pl-3">
                    <h3 className="text-[#222222] font-bold text-base mb-[10px] mr-12">Quang Huấn</h3>
                    <div className="flex text-xs">
                        <span className="text-[#333333]">0.0</span>
                        <div className="text-[#c0c0c0] mx-1">
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                            <i className="fa-regular fa-star"></i>
                        </div>
                        <span className="text-[#777777]">Chưa có đánh giá</span>
                    </div>
                    <div className="w-full h-[1px] bg-[#e8e8e8] my-2"></div>
                    <div className="flex text-xs justify-between">
                        <div className="text-[#777777]">
                            <span className="text-[#333333] mr-1">0</span>Người theo dõi
                        </div>
                        <div className="text-[#777777]">
                            <span className="text-[#333333] mr-1">0</span>Đang theo dõi
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex py-4 px-3 justify-between gap-x-2">
                <div className="border-[1px] border-solid border-[#f8f8f8] rounded-lg py-2 px-3 flex-grow popupShadow1">
                    <p className="text-[#777777]">Điểm tốt</p>
                    <div className="flex">
                        <span className="text-[#222222] text-base font-bold mt-[2px] mr-1">0</span>
                        <img className="w-4" src={MoreIcon.Point} alt="Điểm"></img>
                    </div>
                </div>
                <div className="border-[1px] border-solid border-[#f8f8f8] rounded-lg py-2 px-3 flex-grow popupShadow1">
                    <p className="text-[#777777]">Đồng tốt</p>
                    <div className="flex">
                        <span className="text-[#222222] text-base font-bold mt-[2px] mr-1">0</span>
                        <img className="w-4" src={MoreIcon.Gold} alt="Đồng"></img>
                    </div>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#777777] text-sm font-bold bg-[#f5f5f5] px-3 py-[10px]">Quản lí đơn hàng</h4>

                <div className="flex py-2 px-3 items-center">
                    <MoreOrderIcon />
                    <span className="text-[#222222] text-sm ml-3">Đơn mua</span>
                </div>
                <div className="flex py-2 px-3 items-center">
                    <MoreOrderIcon2 />
                    <span className="text-[#222222] text-sm ml-3">Đơn bán</span>
                </div>
                <div className="flex py-2 px-3 items-center justify-between bg-[#fff7ea]">
                    <div className="flex items-center">
                        <MorePay />
                        <span className="text-[#222222] text-sm ml-3">Ví bán hàng</span>
                    </div>
                    <a className="text-[#ffba00] text-sm font-bold mr-3">
                        Liên kết ngay
                        <i className="fa-solid fa-angle-right ml-[10px]"></i>
                    </a>
                </div>
            </div>
            <div className="">
                <h4 className="text-[#777777] text-sm font-bold bg-[#f5f5f5] px-3 py-[10px]">Dịch vụ trả phí</h4>
                {moreService.map((item, key) => {
                    const Iconate = item.icon;
                    return (
                        <div className="flex py-2 px-3 items-center cursor-pointer" key={key}>
                            <Iconate />
                            <span className="text-[#222222] text-sm ml-3">{item.title}</span>
                        </div>
                    );
                })}
            </div>
            <div className="">
                <h4 className="text-[#777777] text-sm font-bold bg-[#f5f5f5] px-3 py-[10px]">Khác</h4>
                {moreOthers.map((item, key) => {
                    const Iconate = item.icon;
                    return (
                        <div className="flex py-2 px-3 items-center cursor-pointer" key={key}>
                            <Iconate />
                            <span className="text-[#222222] text-sm ml-3">{item.title}</span>
                        </div>
                    );
                })}
                <div className="flex py-2 px-3 items-center cursor-pointer">
                    <MoreLogOutIcon />
                    <span className="text-[#222222] text-sm ml-3" onClick={handleLogOut}>
                        Đăng xuất
                    </span>
                </div>
            </div>
        </div>
    );
}

export default PopUp;
