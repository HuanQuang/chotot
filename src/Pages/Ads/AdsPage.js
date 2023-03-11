import { Link } from 'react-router-dom';
import { HeathIconDetailPost } from '../../access/svg/svg';
import AxiosClient from '../../utils/Api/Axios';
import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
export default function AdsPage() {
    const [list, setList] = useState([]);
    useEffect(() => {
        async function fetchData() {
            await AxiosClient.post(`post/luu-tin`)
                .then((res) => setList(res.data))
                .catch((err) => console.log(err));
        }
        fetchData();
    }, []);
    return (
        <div className="max-w-[970px] mx-auto px-[15px] pb-[25px] bg-[#ffffff]">
            <div className="flex pt-[15px] pb-1 items-center w-full">
                <Link className="text-xs text-[#2a5079] whitespace-nowrap" to={'/'}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#000] font-bold whitespace-nowrap">Tin đăng đã lưu</p>
            </div>
            <div className="mt-[5px] text-lg text-[#000000] flex font-bold">
                <h1 className="mr-2">Tin đăng đã lưu </h1>
                <span> ({list.length}/100)</span>
            </div>
            {list.length ? (
                <div className="flex flex-wrap">
                    {list.map((post) => {
                        return <Product post={post} />;
                    })}
                </div>
            ) : (
                <div className="min-h-[300px] flex flex-col items-center justify-center">
                    <p className="text-sm my-[14px]">Bạn chưa lưu tin đăng nào!</p>
                    <p className="flex my-[5px]">
                        Hãy bấm nút &nbsp;
                        <HeathIconDetailPost />
                        &nbsp; ở tin đăng để lưu lại và xem sau.
                    </p>
                </div>
            )}
        </div>
    );
}
