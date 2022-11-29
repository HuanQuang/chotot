import { BuyerImg } from '../../access/image/Image';
function Empty() {
    return (
        <div className="min-h-[400px] w-full flex flex-col justify-center items-center">
            <img className="w-[108px] h-[108px]" src={BuyerImg.empty} alt="empty"></img>
            <p className="text-[#777777] text-sm mb-2">Chưa có đơn hàng nào</p>
        </div>
    );
}

export default Empty;
