import Address from './Address';
import SubmitBtn from './Button';
function Fashion() {
    return (
        <form>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <h3 className="text-[10px] text-[#8c8c8c]">
                    Tình trạng <span className="text-[red]"> *</span>
                </h3>
                <div className="flex gap-x-5 mb-3">
                    <label>
                        <input type="radio" value="Đã sử dụng" name="typeProduct" />
                        <span className="text-sm ml-1">Đã sử dụng</span>
                    </label>
                    <label>
                        <input type="radio" value="Mới" name="typeProduct" />
                        <span className="text-sm ml-1">Mới</span>
                    </label>
                </div>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giá"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Tiêu đề"
                ></input>
                <div className="relative">
                    <div className="absolute top-[11px] left-3 text-sm text-[#8c8c8c] h-8">
                        Mô tả chi tiết <span className="text-[red]">*</span>
                    </div>
                    <textarea
                        inputMode="text"
                        className="mb-3 text-sm text-[#222] w-full h-[190px] rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] pt-9 px-3 pb-1 outline-none"
                        type="text"
                        placeholder="- Loại quần áo
                        - Nam/nữ
                        - Kích cỡ: S,M,L
                        - Nhãn hiệu
                        - Chất liệu, màu sắc
                        - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
                    ></textarea>
                </div>
                <div>
                    <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                    <Address />
                </div>
            </div>
            <SubmitBtn />
        </form>
    );
}

export default Fashion;
