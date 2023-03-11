import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function SearchResualPage() {
    const result = useSelector((state) => state.search.result);
    return (
        <div className="max-w-[936px] mx-auto">
            <div className="flex my-2  items-center w-full">
                <Link className="text-xs text-[#2a5079] whitespace-nowrap" to={'/'}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#000] font-bold whitespace-nowrap">Tất cả danh mục</p>
            </div>
            <h1 className="mt-1 mb-4 font-bold text-base text-[#222222]">
                Mua Bán Rao Vặt Nhanh Chóng {'&'} Uy Tín Tại Chợ Tốt Toàn quốc
            </h1>
            <div className="max-w-[65%] flex flex-col">
                {result.length ? (
                    result.map((post) => {
                        return (
                            <Link
                                to={`/post/${post._id}`}
                                className="w-full p-3 border-solid border-y-[1px] border-y-[#f4f4f4] productShadow flex gap-x-3 bg-[#fff]"
                            >
                                <img
                                    className="w-[128px] h-[128px]"
                                    src={post.img ? post.img[0] : ''}
                                    alt="product"
                                ></img>
                                <div className="relative flex-grow flex flex-col justify-between">
                                    <div>
                                        <div className="mr-4 text-[14px] line-clamp-2">{post.title}</div>
                                        <div className="text-[15px] text-[#d00202] font-bold mt-[2px] mr-1 h-[22.5px]">
                                            {post.information?.price}
                                        </div>
                                    </div>
                                    <div className="mt-2 flex text-[10px] text-[#9b9b9b] flex-wrap">
                                        <i className="fa-solid fa-map-pin w-4 mt-[1px] mr-[3px] text-[#fe9900]"></i>
                                        <span className="mx-[2px] inline-block">· {post.createdAt.substr(0, 10)}</span>
                                        <span className="ml-[3px] inline-block">· {post.address.split('-')[0]}</span>
                                    </div>
                                </div>
                            </Link>
                        );
                    })
                ) : (
                    <div className="text-[red] min-h-[200px] font-bold flex justify-center items-center">
                        Không có tin đăng phù hợp!
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchResualPage;
