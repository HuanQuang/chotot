import ChatBoard from './ChatBoard';
import Slider from './Slider';
export default function ChatPage() {
    return (
        <div className="max-w-[960px] mx-auto flex justify-between bg-[#fff] h-[-webkit-fill-available]">
            <ChatBoard />
            <div className="w-3/5 p-12 flex justify-center">
                <div className="w-[400px] mx-auto mt-12">
                    <Slider />
                </div>
            </div>
        </div>
    );
}
