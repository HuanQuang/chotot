import { useState } from 'react';

function ChatBoard() {
    const [active, setActive] = useState(0);
    const tab = ['Tất cả', 'Tôi mua', 'Tôi bán'];
    const tabRender = tab.map((item, key) => {
        return (
            <button
                key={key}
                className={`ml-3 py-[6px] px-3 text-sm bg-[#f4f4f4] rounded-full hover:bg-[#ffe9c2] hover:text-[#f80] ${
                    active === key ? 'bg-[#ffe9c2] text-[#f80]' : ''
                } `}
                onClick={() => setActive(key)}
            >
                {item}
            </button>
        );
    });
    return (
        <div className="flex-grow border-[1px] border-solid border-[#e8e8e8] flex flex-col justify-between">
            <div className="flex justify-between p-3 items-center">
                <h5 className="text-base text-[#222] font-bold">Chat</h5>
                <div className="flex gap-1 leading-4">{tabRender}</div>
            </div>
            <div className=""></div>
            <div className="p-[10px] h-10 border-y-[1px] border-solid border-[#0000001a]">
                <div className="text-xs text-[#333333] ml-[5px] px-2 py-[1px] flex items-center cursor-pointer">
                    <i className="fa-solid fa-trash mr-1"></i>
                    <span className="">Xoá cuộc trò chuyện</span>
                </div>
            </div>
        </div>
    );
}

export default ChatBoard;
