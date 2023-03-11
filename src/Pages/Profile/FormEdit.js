import { PublicRouter } from '../../Routers/Router';
import { useNavigate, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';
import AxiosClient from '../../utils/Api/Axios';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { isLogin } from '../../Features/UserSlice';
import { notifySuccess, notifyError } from '../../utils/Toast/Toast';

function FormEdit() {
    const navigate = useNavigate();
    const data = useSelector((state) => state.user.userData);
    const dispatch = useDispatch();
    const [fullNameValue, setfullNameValue] = useState(data.fullName);
    const [emailValue, setEmail] = useState(data.email);
    const [addressValue, setAddressValue] = useState(data.address);
    const [genderValue, setGenderValue] = useState(data.gender);
    const [ageValue, setAgeValue] = useState(data.age);
    const editData = {
        phone: data.phone,
        fullName: fullNameValue,
        email: emailValue,
        address: addressValue,
        gender: genderValue,
        age: ageValue,
    };
    const onSubmit = async (e) => {
        try {
            e.preventDefault();
            await AxiosClient.put('account/', editData).then((res) => {
                notifySuccess(res.data.message);
                dispatch(isLogin(res.data.user));
            });
            setTimeout(() => navigate(PublicRouter.Profile.path), 3000);
        } catch (error) {
            console.log(error);
            notifyError(error);
        }
    };
    return (
        <div className="max-w-[960px] mx-auto px-[10px]">
            <div className="hidden lg:flex mt-4 items-center">
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage.path}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.Profile.path}>
                    Trang cá nhân
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222]">Thông tin cá nhân</p>
            </div>
            <h3 className="py-[10px] px-2 font-bold text-base border-b-[1px] border-solid border-[#ddd]">
                Thông Tin Cá Nhân
            </h3>
            <form className="pt-[10px] px-5 bg-[#fff]">
                <div className="mb-[10px]">
                    <h4 className="mb-[2px] font-bold text-sm text-[#333]">Họ tên</h4>
                    <input
                        className="w-full h-[35px] px-[10px] leading-[35px] border-solid border-[#eee] border-b-[1px] text-sm text-[#555]"
                        type="text"
                        placeholder="Chưa có thông tin"
                        name="fullName"
                        value={fullNameValue}
                        onChange={(e) => setfullNameValue(e.target.value)}
                        maxLength={50}
                    ></input>
                </div>
                <div className="mb-[10px] ">
                    <h4 className="mb-[2px] font-bold text-sm text-[#333]">Email</h4>
                    <input
                        className="w-full h-[35px] px-[10px] leading-[35px] border-solid border-[#eee] border-b-[1px] text-sm text-[#555]"
                        type="email"
                        placeholder="Chưa có thông tin"
                        name="email"
                        value={emailValue}
                        onChange={(e) => setEmail(e.target.value)}
                    ></input>
                </div>
                <div className="mb-[10px] ">
                    <h4 className="mb-[2px] font-bold text-sm text-[#333]">Địa chỉ</h4>
                    <input
                        className="w-full h-[35px] px-[10px] leading-[35px] border-solid border-[#eee] border-b-[1px] text-sm text-[#555]"
                        type="text"
                        placeholder="Chưa có thông tin"
                        name="address"
                        value={addressValue}
                        onChange={(e) => setAddressValue(e.target.value)}
                    ></input>
                </div>
                <div className="mb-[10px] ">
                    <h4 className="mb-[2px] font-bold text-sm text-[#333]">Giới tính</h4>
                    <select
                        className="h-[35px] px-[10px] leading-[35px] border-solid border-[#eee] border-b-[1px] text-sm text-[#555] outline-none"
                        name="gender"
                        onChange={(e) => setGenderValue(e.target.value)}
                    >
                        <option value="male">Nam</option>
                        <option value="female">Nữ</option>
                        <option value="other">Khác</option>
                    </select>
                </div>
                <div className="mb-[10px] ">
                    <h4 className="mb-[2px] font-bold text-sm text-[#333]">Tuổi</h4>
                    <input
                        className="w-full h-[35px] px-[10px] leading-[35px] border-solid border-[#eee] border-b-[1px] text-sm text-[#555]"
                        type="number"
                        placeholder="Chưa có thông tin"
                        name="age"
                        value={ageValue}
                        min={16}
                        max={100}
                        onChange={(e) => setAgeValue(e.target.value)}
                    ></input>
                    <button
                        className="w-full h-[37px] leading-[37px] text-[13px] text-center font-bold rounded border-solid border-[#fe9900] border-[1px] text-[#fff] bg-[#fe9900] px-[10px]"
                        type="submit"
                        onClick={onSubmit}
                    >
                        LƯU THAY ĐỔI
                    </button>
                </div>
            </form>
            <ToastContainer />
        </div>
    );
}

export default FormEdit;
