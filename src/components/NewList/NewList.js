import Product from '../Product/Product';
function NewList() {
    return (
        <div className="">
            <h4 className="p-3 text-[17px] font-bold text-[#222222]">Tin đăng mới</h4>
            <div className="flex">
                <Product />
            </div>
        </div>
    );
}

export default NewList;
