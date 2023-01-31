import SubmitBtn from './Button';
import Title from './Title';

function Pet() {
    return (
        <form>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Danh mục thú cưng <span className="text-[red]">*</span>
                </h5>
                <div className="flex gap-x-6 flex-wrap" onChange={(e) => console.log(e.target.value)}>
                    <label>
                        <input type="radio" value="Chó" name="typePet" />
                        <span className="text-sm ml-1">Chó</span>
                    </label>
                    <label>
                        <input type="radio" value="Chim" name="typePet" />
                        <span className="text-sm ml-1">Chim</span>
                    </label>
                    <label>
                        <input type="radio" value="Mèo" name="typePet" />
                        <span className="text-sm ml-1">Mèo</span>
                    </label>
                    <label>
                        <input type="radio" value="Khác" name="typePet" />
                        <span className="text-sm ml-1">Khác</span>
                    </label>
                    <label>
                        <input type="radio" value="Thức ăn, phụ kiện" name="typePet" />
                        <span className="text-sm ml-1">Thức ăn, phụ kiện</span>
                    </label>
                </div>
            </div>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giống thú cưng"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Độ tuổi"
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giá"
                ></input>
            </div>
            <Title
                placeholder="Nên viết các thông tin nổi bật:
            - Giống động vật, Xuất xứ
            - Tháng tuổi, Cân nặng, Màu sắc
            - Tiêm ngừa và khai sinh, ..."
            />
            <SubmitBtn />
        </form>
    );
}

export default Pet;
