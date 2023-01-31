import SubmitBtn from './Button';
import Title from './Title';

function Xeco() {
    return (
        <form>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Danh mục xe cộ <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Ô tô" name="typeProduct" />
                        <span className="text-sm ml-1">Ô tô</span>
                    </label>
                    <label>
                        <input type="radio" value="Xe máy" name="typeProduct" />
                        <span className="text-sm ml-1">Xe máy</span>
                    </label>
                    <label>
                        <input type="radio" value="Xe đạp" name="typeProduct" />
                        <span className="text-sm ml-1">Xe đạp</span>
                    </label>
                    <label>
                        <input type="radio" value="Xe điện" name="typeProduct" />
                        <span className="text-sm ml-1">Xe điện</span>
                    </label>
                    <label>
                        <input type="radio" value="Phụ tùng" name="typeProduct" />
                        <span className="text-sm ml-1">Phụ tùng</span>
                    </label>
                </div>
            </div>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Hộp số <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Tự động" name="typeEngine" />
                        <span className="text-sm ml-1">Tự động</span>
                    </label>
                    <label>
                        <input type="radio" value="Số sàn" name="typeEngine" />
                        <span className="text-sm ml-1">Số sàn</span>
                    </label>
                    <label>
                        <input type="radio" value="Bán tự động" name="typeEngine" />
                        <span className="text-sm ml-1">Bán tự động</span>
                    </label>
                </div>
            </div>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Nhiên liệu <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Xăng" name="typeEnegy" />
                        <span className="text-sm ml-1">Xăng</span>
                    </label>
                    <label>
                        <input type="radio" value="Dầu" name="typeEnegy" />
                        <span className="text-sm ml-1">Dầu</span>
                    </label>
                    <label>
                        <input type="radio" value="Điện" name="typeEnegy" />
                        <span className="text-sm ml-1">Điện</span>
                    </label>
                </div>
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
                    type="number"
                    min={1980}
                    max={2023}
                    placeholder="Năm sản xuất"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Xuất xứ"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Biển số xe"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Màu sắc"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Số chỗ"
                ></input>
            </div>
            <Title
                placeholder="- Tình trạng chiếc xe 
                        - Thời gian sử dụng xe
                        - Bảo trì xe: bao lâu/ lần, tại hãng hay không?
                        - Tình trạng giấy tờ"
            />
            <SubmitBtn />
        </form>
    );
}

export default Xeco;
