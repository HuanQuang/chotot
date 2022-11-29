function Information() {
    return (
        <div className="flex bg-[#ffffff] profileShadow mb-[15px] flex-wrap">
            <div className="flex p-[15px] mb-3 lg:w-1/2">
                <img className="w-20 h-20 rounded-[50%]" src="https://cdn.chotot.com/uac2/24191959" alt="avatar"></img>
                <div className="ml-[15px] flex-grow text-[#000000De]">
                    <h3 className="text-lg">Quang Huấn</h3>
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
                    <div className="flex">
                        <button className="py-1 px-[10px] text-sm mr-[10px] border-[1px] border-[#d7d9dc] border-solid rounded-[20px]">
                            Chỉnh sửa trang cá nhân
                        </button>
                        <div className="flex justify-center border-[1px] border-[#d7d9dc] border-solid rounded-[50%] items-center px-[7px]">
                            <i className="fa-solid fa-ellipsis"></i>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-grow p-[15px] text-[13px]">
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i class="fa-regular fa-star mr-[10px]"></i>
                    <h4 className="mr-[10px]">Đánh giá:</h4>
                    <span className="text-[#282f39]"> Chưa có đánh giá</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i class="fa-solid fa-calendar-days mr-[10px]"></i>
                    <h4 className="mr-[10px]">Ngày tham gia:</h4>
                    <span className="text-[#282f39]"> 25/11/2022</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i class="fa-solid fa-location-dot mr-[10px]"></i>
                    <h4 className="mr-[10px]">Địa chỉ:</h4>
                    <span className="text-[#282f39]">Chưa cung cấp</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i class="fa-regular fa-message mr-[10px]"></i>
                    <h4 className="mr-[10px]">Phản hồi chat:</h4>
                    <span className="text-[#282f39]">Chưa có thông tin</span>
                </div>
                <div className="flex my-[5px] text-[#9b9b9b] h-5 items-center">
                    <i class="fa-regular fa-circle-check mr-[10px]"></i>
                    <h4 className="mr-[10px]">Đã cung cấp:</h4>
                    <div className="flex">
                        <i class="fa-brands fa-facebook mr-[10px] text-[#589f39]"></i>
                        <i class="fa-brands fa-google-plus-g mr-[10px]"></i>
                        <i class="fa-brands fa-apple mr-[10px]"></i>
                        <i class="fa-regular fa-envelope mr-[10px]"></i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Information;
