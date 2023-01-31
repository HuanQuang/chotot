import SubmitBtn from './Button';
import Title from './Title';

function Job() {
    return (
        <form>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Thông tin nhà tuyển dụng <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Cá nhân" name="typeHirer" />
                        <span className="text-sm ml-1">Cá nhân</span>
                    </label>
                    <label>
                        <input type="radio" value="Tổ chức" name="typeHirer" />
                        <span className="text-sm ml-1">Tổ chức</span>
                    </label>
                </div>
            </div>

            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Nội dung đăng tuyển</h5>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Số lượng tuyển dụng"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Ngành nghề"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Hình thức trả lương"
                ></input>
                <div className="flex gap-4">
                    <input
                        className="mb-3 text-sm text-[#222] w-1/2 h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Lương tối thiểu"
                    ></input>{' '}
                    <input
                        className="mb-3 text-sm text-[#222] w-1/2 h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Lương tối đa"
                    ></input>
                </div>
            </div>
            <Title
                placeholder="Mô tả chi tiết một số đặc điểm nhận diện của công ty tuyển dụng:
                        - Tên công ty, địa chỉ công ty, hình thức và mặt hàng kinh doanh.
                        - Mô tả chi tiết về vị trí, công việc, nơi làm, giờ làm
                        - Yêu cầu chi tiết về kỹ năng, bằng cấp nếu có
                        - Phụ cấp khác ngoài lương"
            />
            <SubmitBtn />
        </form>
    );
}

export default Job;
