import { Link, useNavigate } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import { LoginImg } from '../../access/image/Image';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFbIcon, LoginAppleIcon, LoginGoogleIcon } from '../../access/svg/svg';
import AxiosClient from '../../utils/Api/Axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect, useState } from 'react';
import { notifySuccess, notifyError } from '../../utils/Toast/Toast';

// validate phone number
const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
const schema = yup
    .object({
        tel: yup.string().matches(phoneRegExp, 'Số điện thoại không hợp lệ').required('Vui lòng nhập trường này'),
        password: yup
            .string()
            .min(5, 'Mật khẩu phải dài ít nhất 5 kí tự')
            .max(20, 'Mật khẩu dài không quá 20 kí tự')
            .required('Vui lòng nhập trường này'),
        confirmPassword: yup
            .string()
            .oneOf([yup.ref('password')], 'Mật khẩu không trùng khớp')
            .required('Vui lòng nhập trường này'),
    })
    .required();

function Register() {
    const navigate = useNavigate();
    const [btnColor, setBtnColor] = useState();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });
    const isError = Object.keys(errors).length;

    // Set color active for Button submit
    useEffect(() => {
        if (isError) setBtnColor('');
        else setBtnColor('bg-[#ff1717]');
    }, [isError]);
    // Handle submit
    const onSubmit = async (data) => {
        try {
            await AxiosClient.post('account/', { phone: data.tel, password: data.password }).then((response) => {
                if (response.data === 'Đăng kí thành công') {
                    notifySuccess(response.data);
                    setTimeout(() => navigate('/login'), 4000);
                } else if (response.data === 'Tài khoản đã tồn tại') {
                    notifyError(response.data);
                } else notifyError('Đăng kí thất bại! lỗi server');
            });
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className="max-w-[960px] mx-auto backgroundLogin min-h-[530px]">
            <div className="hidden lg:flex mt-4 items-center ">
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage.path}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.Login.path}>
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
                <form className="flex-col flex" onSubmit={handleSubmit(onSubmit)}>
                    <div className="">
                        <input
                            name="tel"
                            className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm"
                            placeholder="Nhập SĐT của bạn"
                            {...register('tel')}
                        ></input>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.tel?.message}</p>
                    </div>
                    <div className="mt-4">
                        <input
                            name="password"
                            className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm "
                            type="password"
                            placeholder="Tạo một mật khẩu có ít nhất 5 kí tự"
                            autoComplete="true"
                            {...register('password')}
                        ></input>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.password?.message}</p>
                    </div>

                    <div className="my-4">
                        <input
                            name="confirmPassword"
                            className="w-full h-9 rounded p-2 border-[1px] border-solid border-[#cacaca] text-sm "
                            type="password"
                            placeholder="Nhập lại mật khẩu"
                            autoComplete="true"
                            {...register('confirmPassword')}
                        ></input>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.confirmPassword?.message}</p>
                    </div>

                    <button
                        type="submit"
                        disabled={!btnColor}
                        className={`rounded font-normal bg-[#cacaca] text-[#fff] text-sm py-2 px-4 ${btnColor}`}
                    >
                        Đăng ký
                    </button>
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
                        <Link to={PublicRouter.Login.path} className="text-[#38699f]">
                            Đăng nhập
                        </Link>
                    </div>
                </div>
            </div>
            <ToastContainer autoClose={2000} />
        </div>
    );
}

export default Register;
