import { PublicRouter } from '../../Routers/Router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Updateprofile() {
    const data = useSelector((state) => state.user.userData);

    const { fullName, age, gender, email, address, avatar, phone, social } = data;
    const dataUser = [
        { index: 'Họ tên', data: fullName || 'Chưa có thông tin' },
        { index: 'Email', data: email || 'Chưa có thông tin' },
        { index: 'Tuổi', data: age || 'Chưa có thông tin' },
        { index: 'Địa chỉ', data: address || 'Chưa có thông tin' },
        { index: 'Giới tính', data: gender || 'Chưa có thông tin' },
        { index: 'Số điện thoại', data: phone || 'Chưa có thông tin' },
        { index: 'Facebook', data: social.facebook || 'Chưa có thông tin' },
        { index: 'Google', data: social.google || 'Chưa có thông tin' },
    ];
    const dataRender = dataUser.map((item) => {
        return (
            <div className="mb-[10px]" key={item.index}>
                <h4 className="mb-[2px] font-bold text-sm text-[#333333]">{item.index}</h4>
                <p className="h-9 bg-[#eee] rounded px-[10px] text-xs leading-9">{item.data}</p>
            </div>
        );
    });
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

            <div className="flex pt-3 bg-[#fff] relative">
                <div className="w-1/5 p-[10px] ">
                    <div className="relative w-[110px] h-[110px] mx-auto rounded-full">
                        <img
                            className="w-full rounded-full "
                            src="https://live.staticflickr.com/491/31818797506_41e52a8b36.jpg"
                            alt="avatar"
                        ></img>
                        <div className="w-12 h-12 absolute text-[#ffffff] text-xl rounded-full bg-[#4a4a4a] border-[2px] border-solid border-[#fff] avatarShadow bottom-[10px] right-[-10px] flex items-center justify-center">
                            <i className="fa-solid fa-camera "></i>
                        </div>
                    </div>
                </div>
                <div className="px-[10px] flex-grow">{dataRender}</div>
                <Link to="edit">
                    <i className="fa-solid fa-pencil absolute top-2 right-4 p-1"></i>
                </Link>
            </div>
        </div>
    );
}

export default Updateprofile;
