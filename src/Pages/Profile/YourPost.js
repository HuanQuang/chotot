import { ProfileImg } from '../../access/image/Image';
import { PublicRouter } from '../../Routers/Router';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Product from '../../components/Product/Product';
import AxiosClient from '../../utils/Api/Axios';
function YourPost({ userId }) {
    const [list, setList] = useState();
    useEffect(() => {
        async function checkUser() {
            AxiosClient.get(`post/poster/${userId}`)
                .then((res) => {
                    setList(res.data);
                })
                .catch((err) => console.log(err));
        }
        checkUser();
    }, [userId]);
    return (
        <div className="bg-[#ffffff] profileShadow  p-[15px] mb-[15px]">
            <h2 className="pb-[15px] border-b-[1px] border-solid border-[#eee] font-bold text-lg text-[#222222]">
                Tin đang đăng <span className="font-medium text-[#999]">- {list?.length || 0} tin</span>
            </h2>
            {list?.length !== 0 ? (
                <div className="flex flex-wrap">
                    {list?.map((item) => {
                        return <Product post={item} key={item._id} />;
                    })}
                </div>
            ) : (
                <div className="w-[50%] py-10 mx-auto text-sm text-center">
                    <img className="w-[100px] mx-auto h-[100px]" src={ProfileImg.notFound} alt="not_Fount"></img>
                    <p className="bg-[#fcf8e3] text-[#8a6d3b] border-[#faebcc] p-[15px] rounded mb-5 border-[1px] border-solid">
                        Bạn chưa có tin đăng cá nhân nào đang bán, thử đăng bán ngay.
                    </p>
                    <Link
                        to={PublicRouter.Post.path}
                        className="py-[5px] px-[15px] flex justify-center items-center border-[1px] border-solid border-[#ffba0080] rounded hover:bg-[#ffba000a] hover:border-[#ffba00]"
                    >
                        <button className="font-medium text-[#ffba00] leading-7">Đăng tin</button>
                    </Link>
                </div>
            )}
        </div>
    );
}

export default YourPost;
