import { Link } from 'react-router-dom';
// import { useState, useEffect} from 'react';
import {
    HomeIcon,
    PersonIcon,
    CartIcon,
    ChatIcon,
    NotifyIcon,
    MenuIcon,
    SearchIcon,
    AvatarIcon,
    NoteIcon,
} from '../../access/svg/svg';
import { PublicRouter } from '../../Routers/Router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

// Home Icon
const HomeBtn = function ({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.HomePage} className={props ? mobileResponsive : pc}>
            <HomeIcon />
            Trang chủ
        </Link>
    );
};

// Quản lí tin Btn
const SocialBtn = function ({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.AdsPage} className={props ? mobileResponsive : pc}>
            <PersonIcon />
            Quản lý tin
        </Link>
    );
};

// Đơn hàng Btn
const Orderbtn = function () {
    return (
        <Tippy
            content={
                <ul className="">
                    <Link to={PublicRouter.BuyerPage} className="w-full block pr-8 py-2 hover:bg-[#f7f7f7]">
                        Đơn mua
                    </Link>
                    <Link to={PublicRouter.SellerPage} className="block pr-8 py-2 hover:bg-[#f7f7f7]">
                        Đơn bán
                    </Link>
                </ul>
            }
            interactive={true}
            theme="light"
        >
            <Link className="hidden lg:flex items-center px-6 gap-x-2">
                <CartIcon />
                Đơn hàng
            </Link>
        </Tippy>
    );
};

// Chat Btn
const ChatBtn = function ({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.ChatPage} className={props ? mobileResponsive : pc}>
            <ChatIcon />
            Chat
        </Link>
    );
};

// Thông báo Btn
const NotifyBtn = function ({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link className={props ? mobileResponsive : pc}>
            <NotifyIcon />
            Thông báo
        </Link>
    );
};

// More Btn
const More = function ({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link className={props ? mobileResponsive : pc}>
            <MenuIcon />
            Thêm
        </Link>
    );
};

// Search Place
const SearchBtn = function () {
    return (
        <div className="w-full flex lg:w-2/3 bg-white rounded justify-between items-center duration-200">
            <input
                className="h-9 bg-white rounded text-[#222222] text-sm pr-9 pl-[10px] grow"
                placeholder="Tìm kiếm trên Chợ Tốt"
            ></input>
            <div className=" text-white bg-[#ff8800] py-[7px] px-4 mx-1 rounded cursor-pointer">
                <SearchIcon />
            </div>
        </div>
    );
};

// Login Place
const SignInBtn = function () {
    // const [isLogin, setIslogin] = useState(false);
    let test = false;
    return (
        <Link
            to={test ? PublicRouter.Profile : PublicRouter.Login}
            className="hidden lg:flex items-center gap-x-2 cursor-pointer"
        >
            <AvatarIcon />
            <span className="text-[14px] font-bold tracking-[0.2px]">{test ? 'Quang Huấn' : 'Đăng nhập'}</span>
        </Link>
    );
};

// Đăng tin Place
const PostNewBtn = function () {
    return (
        <Tippy
            content={
                <div className="text-white text-[14px] leading-5 tracking-[0.2px]">
                    Tin đăng của bạn trên Chợ Tốt sẽ được tiếp cận đến hơn 10 triệu người dùng tiềm năng. Đăng tin kẻo
                    lỡ!
                </div>
            }
            placement="bottom"
            maxWidth={250}
        >
            <Link className="hidden lg:flex items-center cursor-pointer gap-x-2 bg-[#ff8800] text-white px-4 py-2 rounded hover:opacity-80">
                <NoteIcon />
                <span className="text-[14px] font-bold">ĐĂNG TIN</span>
            </Link>
        </Tippy>
    );
};

export const HeaderComponent = {
    HomeBtn,
    SocialBtn,
    ChatBtn,
    NotifyBtn,
    More,
    SearchBtn,
    SignInBtn,
    PostNewBtn,
    Orderbtn,
};
