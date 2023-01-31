import Address from './Address';
import SubmitBtn from './Button';
import Title from './Title';

function Food() {
    return (
        <form>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Loại thực phẩm"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giá"
                ></input>
            </div>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                <Address />
            </div>
            <Title
                placeholder="- Sản phẩm: tên, số lượng, thương hiệu, xuất xứ
                - Hạn sử dụng, cách bảo quản
                - Giấy chứng nhận (nếu có)
                Đối với nhà hàng, quán ăn:
                - Giờ mở cửa, đóng cửa
                - Dịch vụ giao hàng, thanh toán (nếu có)
                Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
        </form>
    );
}

export default Food;
