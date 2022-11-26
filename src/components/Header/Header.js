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
import { Image } from '../../access/image/Image';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';

export default function Header() {
    return (
        <div className="w-full h-[100px] bg-[#ffba00] fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[936px] mx-auto">
                <div className="w-full h-[52px] flex items-center">
                    <img className="w-[96px] h-9 cursor-pointer" src={Image.logo} alt="Logo"></img>
                    <ul className="flex justify-end grow text-sm tracking-[0.1px]">
                        <Link
                            to={PublicRouter.HomePage.path}
                            className="flex items-center px-6 gap-x-2 hover:opacity-80"
                        >
                            <HomeIcon />
                            Trang chủ
                        </Link>
                        <Link
                            to={PublicRouter.AdsPage.path}
                            className="flex items-center px-6 gap-x-2 hover:opacity-80"
                        >
                            <PersonIcon />
                            Quản lý tin
                        </Link>
                        <Tippy
                            content={
                                <ul className="">
                                    <Link
                                        to={PublicRouter.BuyerPage.path}
                                        className="w-full block pr-8 py-2 hover:bg-[#f7f7f7]"
                                    >
                                        Đơn mua
                                    </Link>
                                    <Link
                                        to={PublicRouter.SellerPage.path}
                                        className="block pr-8 py-2 hover:bg-[#f7f7f7]"
                                    >
                                        Đơn bán
                                    </Link>
                                </ul>
                            }
                            interactive={true}
                            theme="light"
                        >
                            <Link className="flex items-center px-6 gap-x-2">
                                <CartIcon />
                                Đơn hàng
                            </Link>
                        </Tippy>
                        <Link
                            to={PublicRouter.ChatPage.path}
                            className="flex items-center px-6 gap-x-2 hover:opacity-80"
                        >
                            <ChatIcon />
                            Chat
                        </Link>
                        <Link className="flex items-center px-6 gap-x-2 hover:opacity-80">
                            <NotifyIcon />
                            Thông báo
                        </Link>
                        <Link className="flex items-center pl-6 gap-x-2 hover:opacity-80">
                            <MenuIcon />
                            Thêm
                        </Link>
                    </ul>
                </div>
                <div className="w-full flex items-center justify-between">
                    <div className="flex w-2/3 bg-white rounded justify-between items-center">
                        <input
                            className="h-9 bg-white rounded text-[#222222] text-sm pr-9 pl-[10px] grow"
                            placeholder="Tìm kiếm trên Chợ Tốt"
                        ></input>
                        <div className=" text-white bg-[#ff8800] py-[7px] px-4 mx-1 rounded cursor-pointer">
                            <SearchIcon />
                        </div>
                    </div>
                    <Link className="flex items-center gap-x-2 cursor-pointer">
                        <AvatarIcon />
                        <span className="text-[14px] font-bold tracking-[0.2px]">Đăng nhập</span>
                    </Link>
                    <Tippy
                        content={
                            <div className="text-white text-[14px] leading-5 tracking-[0.2px]">
                                Tin đăng của bạn trên Chợ Tốt sẽ được tiếp cận đến hơn 10 triệu người dùng tiềm năng.
                                Đăng tin kẻo lỡ!
                            </div>
                        }
                        placement="bottom"
                        maxWidth={250}
                    >
                        <Link className="flex items-center cursor-pointer gap-x-2 bg-[#ff8800] text-white px-4 py-2 rounded hover:opacity-80">
                            <NoteIcon />
                            <span className="text-[14px] font-bold">ĐĂNG TIN</span>
                        </Link>
                    </Tippy>
                </div>
            </div>
        </div>
    );
}
