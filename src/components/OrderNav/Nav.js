import { useState } from 'react';
import { Link } from 'react-router-dom';
function Nav() {
    const [active, setActive] = useState(0);
    const tab = [
        { key: 0, title: 'Chờ xác nhận', url: 'waiting_confirm' },
        { key: 1, title: 'Đang xử lí', url: 'order_processing' },
        { key: 2, title: 'Đang giao', url: 'order_delivering' },
        { key: 3, title: 'Đã giao', url: 'order_delivered' },
        { key: 4, title: 'Hoàn tiền/Đã huỷ', url: 'order_cancel' },
    ];
    const activeClass = 'opacity-100 border-b-4 border-[#FFBA00] border-solid ';
    const renderTab = tab.map((item) => {
        return (
            <Link
                key={item.key}
                to={item.url}
                className={`text-[#222222] text-xs ml-1 p-[14px] font-bold leading-4 opacity-50 ${
                    active === item.key ? activeClass : ''
                }`}
                onClick={() => setActive(item.key)}
            >
                {item.title.toUpperCase()}
            </Link>
        );
    });
    return <>{renderTab}</>;
}

export default Nav;
