import { PublicRouter } from '../../Routers/Router';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Information({ data }) {
    const id = useSelector((state) => state.user.userData.id);
    const typeRender =
        id === data?.id ? (
            <Link
                to={PublicRouter.Updateprofile.path}
                className="py-1 px-[10px] text-sm mr-[10px] border-[1px] border-[#d7d9dc] border-solid rounded-[20px]"
            >
                Chỉnh sửa trang cá nhân
            </Link>
        ) : (
            <button className="py-1 px-[10px] text-sm mr-[10px] border-[1px] border-[#d7d9dc] border-solid rounded-[20px]">
                + Theo dõi
            </button>
        );
    return (
        <div className="flex bg-[#ffffff] profileShadow mb-[15px] flex-wrap">
            <div className="flex p-[15px] mb-3 lg:w-1/2">
                <img
                    className="w-20 h-20 rounded-[50%]"
                    src={data?.avatar ? data.avatar : 'https://live.staticflickr.com/491/31818797506_41e52a8b36.jpg'}
                    alt="avatar"
                ></img>
                <div className="ml-[15px] flex-grow text-[#000000De]">
                    <h3 className="text-lg">{data?.fullName || data?.phone}</h3>
                    <div className="flex flex-1 gap-10 text-xs mt-[10px] mb-3">
                        <div className="">
                            <span className="">0 </span>
                            Người theo dõi
                        </div>
                        <div className="">
                            <span className="">0 </span>
                            Đang theo dõi
                        </div>
                    </div>
                    <div className="flex items-center">
                        {typeRender}
                        <div className="flex justify-center border-[1px] border-[#d7d9dc] border-solid rounded-[50%] items-center p-[7px] h-fits">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow p-[15px] text-[13px] w-1/2">
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i className="fa-regular fa-star mr-[10px]"></i>
                    <h4 className="mr-[10px] whitespace-nowrap">Đánh giá:</h4>
                    <span className="text-[#282f39] whitespace-nowrap"> Chưa có đánh giá</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i className="fa-solid fa-calendar-days mr-[10px]"></i>
                    <h4 className="mr-[10px] whitespace-nowrap">Ngày tham gia:</h4>
                    <span className="text-[#282f39] whitespace-nowrap">{data?.time?.slice(0, 10)}</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center w-full ">
                    <i className="fa-solid fa-location-dot mr-[10px]"></i>
                    <h4 className="mr-[10px] whitespace-nowrap">Địa chỉ:</h4>
                    <span className="text-[#282f39] whitespace-nowrap text-ellipsis overflow-hidden">
                        {data?.address || 'Chưa cung cấp'}
                    </span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i className="fa-regular fa-message mr-[10px]"></i>
                    <h4 className="mr-[10px] whitespace-nowrap">Phản hồi chat:</h4>
                    <span className="text-[#282f39] whitespace-nowrap">Chưa có thông tin</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i className="fa-regular fa-circle-check mr-[10px]"></i>
                    <h4 className="mr-[10px] whitespace-nowrap">Đã cung cấp:</h4>
                    <div className="flex">
                        <i className="fa-brands fa-facebook mr-[10px] text-[#589f39]"></i>
                        <i className="fa-brands fa-google-plus-g mr-[10px]"></i>
                        <i className="fa-brands fa-apple mr-[10px]"></i>
                        <i className="fa-regular fa-envelope mr-[10px]"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
