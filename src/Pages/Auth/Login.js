import { Link, useNavigate } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import { LoginImg } from '../../access/image/Image';
import { LoginFbIcon, LoginAppleIcon, LoginGoogleIcon } from '../../access/svg/svg';
import AxiosClient from '../../utils/Api/Axios';
import { useForm } from 'react-hook-form';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import jwt_decode from 'jwt-decode';
import { notifyError, notifySuccess } from '../../utils/Toast/Toast';
import { useDispatch } from 'react-redux';
import { isLogin } from '../../Features/UserSlice';
import { useEffect } from 'react';

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const onSubmit = async (data) => {
        try {
            await AxiosClient.post('account/login', data).then((response) => {
                // Đăng nhập thành công
                if (response.status === 200) {
                    notifySuccess(response.data.message);
                    const token = response.data.token;
                    let decoded = jwt_decode(token);
                    localStorage.setItem('accessToken', token);
                    dispatch(isLogin(decoded));

                    navigate(PublicRouter.HomePage.path);
                }
                // Sai thông tin đăng nhập
                else if (response.status === 202) notifyError(response.data.message);
                else {
                    notifyError(response.data.message);
                }
            });
        } catch (error) {
            notifyError(error);
        }
    };
    return (
        <div className="max-w-[960px] mx-auto backgroundLogin min-h-[530px]">
            <div className="hidden lg:flex mt-4 items-center">
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage.path}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222]">Đăng nhập</p>
            </div>
            <div className="w-full lg:w-[340px] lg:bg-[#fff] mx-auto loginShadow p-5">
                <div className="flex justify-between mb-1">
                    <div className="">
                        <h3 className="text-xl text-[#ffba00] font-bold">Đăng nhập</h3>
                        <p className="text-sm text-[#9b9b9b] mb-2">Chào bạn quay lại</p>
                    </div>
                    <img className="" src={LoginImg.logo} alt="logo"></img>
                </div>
                <form className="flex-col flex" onSubmit={handleSubmit(onSubmit)}>
                    <input
                        className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm"
                        placeholder="Nhập SĐT của bạn"
                        name="phone"
                        {...register('phone', { required: true })}
                    ></input>
                    <input
                        className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm my-4"
                        placeholder="Nhập mật khẩu của bạn"
                        type="password"
                        name="password"
                        autoComplete="true"
                        {...register('password', { required: true })}
                    ></input>
                    <button className="rounded font-normal bg-[#cacaca] text-[#fff] text-sm py-2 px-4" type="submit">
                        Đăng nhập
                    </button>
                </form>
                <div className="pt-2 flex flex-col items-center mb-4">
                    <Link className="text-xs mb-2 text-[#38699f]">Bạn quên mật khẩu?</Link>
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
                        Chưa có tài khoản?{' '}
                        <Link to={PublicRouter.Register.path} className="text-[#38699f]">
                            Đăng kí ngay
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={1000} />
        </div>
    );
}

export default Login;
