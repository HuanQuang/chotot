import Product from '../Product/Product';
import { listRender } from '../../utils/constants/Constant';

function NewList() {
    const renderList = listRender.map((item, key) => {
        return <Product key={key} props={[item]} />;
    });
    return (
        <div className="w-full">
            <h4 className="p-3 text-[17px] font-bold text-[#222222]">Tin đăng mới</h4>
            <div className="flex flex-wrap">{renderList}</div>
        </div>
    );
}

export default NewList;
