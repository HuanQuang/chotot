import { Link } from 'react-router-dom';

function Product({ post }) {
    return (
        <Link
            to={`/post/${post._id}`}
            className=" sm:w-1/3 md:w-1/4 lg:w-1/5 w-1/2 p-3 border-solid border-y-[1px] border-y-[#f4f4f4] productShadow"
        >
            <img className="w-full h-[162px]" src={post.img ? post.img[0] : ''} alt="product"></img>
            <div className="relative">
                <div className="mt-2 mr-4 text-[14px] line-clamp-2 h-11">{post.title}</div>
                <div className="absolute top-[2px] right-1">
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="text-[15px] text-[#d00202] font-bold mt-[2px] mr-1 h-[22.5px]">
                    {post.information?.price}
                </div>
                <div className="mt-2 flex text-[10px] text-[#9b9b9b] flex-wrap">
                    <i className="fa-solid fa-map-pin w-4 mt-[1px] mr-[3px] text-[#fe9900]"></i>
                    <span className="mx-[2px] inline-block">· {post.createdAt.substr(0, 10)}</span>
                    <span className="ml-[3px] inline-block">· {post.address.split('-')[0]}</span>
                </div>
            </div>
        </Link>
    );
}

export default Product;
