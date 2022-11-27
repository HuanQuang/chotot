import Slider from './Slider';
export default function ChatPage() {
    return (
        <div className="max-w-[960px] mx-auto flex justify-between">
            <div className="">
                <div className="flex">
                    <h3 className="">Chat</h3>
                    <div className="flex">
                        <button className="">Tất cả</button>
                        <button className="">Tôi mua</button>
                        <button className="">Tôi bán</button>
                    </div>
                </div>
                <div className=""></div>
                <div className="">
                    <i className="fa-solid fa-trash"></i>
                    <span className="">Xoá cuộc trò chuyện</span>
                </div>
            </div>
            <div className="w-3/5 p-12">
                <Slider />
            </div>
        </div>
    );
}
