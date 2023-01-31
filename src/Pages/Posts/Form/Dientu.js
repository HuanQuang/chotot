import SubmitBtn from './Button';
import Title from './Title';

function Dientu() {
    return (
        <form>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Danh mục đồ điện tử <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Điện thoại" name="typeProduct" />
                        <span className="text-sm ml-1">Điện thoại</span>
                    </label>
                    <label>
                        <input type="radio" value="Máy tính bảng" name="typeProduct" />
                        <span className="text-sm ml-1">Máy tính bảng</span>
                    </label>
                    <label>
                        <input type="radio" value="Laptop" name="typeProduct" />
                        <span className="text-sm ml-1">Laptop</span>
                    </label>
                    <label>
                        <input type="radio" value="Máy ảnh, máy quay" name="typeProduct" />
                        <span className="text-sm ml-1">Máy ảnh, máy quay</span>
                    </label>
                    <label>
                        <input type="radio" value="Phụ kiện" name="typeProduct" />
                        <span className="text-sm ml-1">Phụ kiện</span>
                    </label>
                </div>
                <div className="my-4">
                    <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Hãng"
                    ></input>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Màu sắc"
                    ></input>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Dung lượng"
                    ></input>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Tình trạng"
                    ></input>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Bảo hành"
                    ></input>
                    <input
                        className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Giá"
                    ></input>
                </div>
            </div>
            <Title
                placeholder="- Tình trạng sản phẩm
                - Thời gian sử dụng
                - Bảo hành nếu có
                - Sửa chữa, nâng cấp, phụ kiện đi kèm
                - Địa chỉ giao nhận, đổi trả
                - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
        </form>
    );
}

export default Dientu;
