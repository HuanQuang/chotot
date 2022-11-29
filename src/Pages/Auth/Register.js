import { Link } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import { LoginImg } from '../../access/image/Image';
import { LoginFbIcon, LoginAppleIcon, LoginGoogleIcon } from '../../access/svg/svg';
function Register() {
    return (
        <div className="max-w-[960px] mx-auto backgroundLogin min-h-[530px]">
            <div className="hidden lg:flex mt-4 items-center ">
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.Login}>
                    Đăng nhập
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222222]">Đăng kí</p>
            </div>
            <div className="w-[340px] lg:bg-[#fff] mx-auto loginShadow p-5">
                <div className="flex justify-between mb-1">
                    <div className="">
                        <h3 className="text-xl text-[#ffba00] font-bold">Đăng ký</h3>
                        <p className="text-sm text-[#9b9b9b] mb-2">Tạo tài khoản chợ tốt ngay</p>
                    </div>
                    <img className="" src={LoginImg.logo} alt="logo"></img>
                </div>
                <form className="flex-col flex">
                    <input
                        className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm"
                        placeholder="Nhập SĐT của bạn"
                    ></input>
                    <input
                        className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm my-4"
                        placeholder="Tạo một mật khẩu có ít nhất 5 kí tự"
                    ></input>
                    <button className="rounded font-normal bg-[#cacaca] text-[#fff] text-sm py-2 px-4">Đăng ký</button>
                </form>
                <div className="pt-2 flex flex-col items-center mb-4">
                    <p className="text-xs mb-2 text-[#222] text-center">
                        Bằng việc Đăng ký, bạn đã đồng ý với{' '}
                        <a
                            className="text-[#38699f] cursor-pointer"
                            href="https://trogiup.chotot.com/nguoi-ban/hoat-dong/"
                        >
                            Điều khoản sử dụng
                        </a>{' '}
                        của Chợ tốt
                    </p>
                    <p className="text-xs mt-5 text-[#9b9b9b]">hoặc sử dụng</p>
                    <div className="flex mt-4 mb-5">
                        <div className="mr-4">
                            <LoginFbIcon />
                        </div>
                        <div className="mr-4">
                            <LoginGoogleIcon />
                        </div>
                        <div className="">
                            <LoginAppleIcon />
                        </div>
                    </div>
                    <div className="text-xs mb-2">
                        Bạn đã có tài khoản?{' '}
                        <Link to={PublicRouter.Login} className="text-[#38699f]">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
