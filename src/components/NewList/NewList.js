import Product from '../Product/Product';
import { useEffect, useState } from 'react';
import AxiosClient from '../../utils/Api/Axios';
function NewList() {
    const [listPost, getListPost] = useState();
    useEffect(() => {
        AxiosClient.get('post').then((res) => getListPost(res.data));
    }, []);
    return (
        <div className="w-full">
            <h4 className="p-3 text-[17px] font-bold text-[#222222]">Tin đăng mới</h4>
            <div className="flex flex-wrap">
                {listPost?.map((item) => {
                    return <Product post={item} key={item._id} />;
                })}
            </div>
        </div>
    );
}

export default NewList;
