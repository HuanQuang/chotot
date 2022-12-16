import { PostCameraIcon, PostPlusIcon } from '../../access/svg/svg';

function Post() {
    return (
        <div className="pt-12 px-[15%]">
            <div className="bg-[#fff] max-w-[960px] mb-5 flex">
                <div className="mt-8 px-4 w-1/3">
                    <h5 className="font-bold text-[#222] mb-2">Ảnh/ video sản phẩm</h5>
                    <p className="text-[#777] mb-3 text-sm">
                        Xem thêm về <a className="text-[#2275d3] underline">Quy định đăng tin của Chợ Tốt</a>
                    </p>
                    <div className="h-[225px] w-full rounded opacity-60 bg-[#f4f4f4]">
                        <div className="border-[2px] rounded border-dotted border-[#fe9900] w-full h-full flex items-center justify-center flex-col">
                            <input type="file" tabIndex={-1} className="hidden" accept={true} multiple></input>
                            <div className="relative mb-3">
                                <PostCameraIcon />
                                <span className="absolute top-[-6px] right-[-10px]">
                                    <PostPlusIcon />
                                </span>
                            </div>
                            <p className="font-bold text-[#8c8c8c] text-[10px] p-[3px]">
                                Hình có kích thước tối thiểu 240x240
                            </p>
                        </div>
                    </div>
                </div>
                <div className=""></div>
            </div>
        </div>
    );
}

export default Post;
