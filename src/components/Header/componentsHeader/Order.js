import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
import { CartIcon } from '../../../access/svg/svg';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
function Order() {
    return (
        <Tippy
            content={
                <ul className="">
                    <Link to={PublicRouter.BuyerPage.path} className="w-full block pr-8 py-2 hover:bg-[#f7f7f7]">
                        Đơn mua
                    </Link>
                    <Link to={PublicRouter.SellerPage.path} className="block pr-8 py-2 hover:bg-[#f7f7f7]">
                        Đơn bán
                    </Link>
                </ul>
            }
            interactive={true}
            theme="light"
        >
            <Link className="hidden lg:flex items-center lg:px-6 gap-x-2">
                <div className="w-6 h-6">
                    <CartIcon />
                </div>
                Đơn hàng
            </Link>
        </Tippy>
    );
}
export default Order;
