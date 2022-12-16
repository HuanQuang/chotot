import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TabOrder } from '../../utils/constants/Constant';
function Nav() {
    const [active, setActive] = useState(0);
    const activeClass = 'opacity-100 border-b-4 border-[#FFBA00] border-solid ';
    const renderTab = TabOrder.map((item) => {
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
