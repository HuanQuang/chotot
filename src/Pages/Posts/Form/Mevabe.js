import Address from './Address';
import SubmitBtn from './Button';
import Title from './Title';

function Mevabe() {
    return (
        <form>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <h3 className="text-[10px] text-[#8c8c8c]">
                    Tình trạng <span className="text-[red]"> *</span>
                </h3>
                <div className="flex gap-x-5">
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
                    placeholder="Loại sản phẩm"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giá"
                ></input>

                <div>
                    <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                    <Address />
                </div>
            </div>
            <Title
                placeholder="- Tên sản phẩm
                        - Nhãn hiệu
                        - Chất liệu, kích thước
                        - Đồ cho bé: dùng cho bé mấy tuổi
                        - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
        </form>
    );
}

export default Mevabe;
