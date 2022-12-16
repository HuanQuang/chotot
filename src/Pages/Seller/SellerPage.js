import { Link, Outlet } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import Nav from '../../components/OrderNav/Nav';

export default function SellerPage() {
    return (
        <div className="max-w-[960px] mx-auto px-[10px]">
            <div className="max-w-[636px]">
                <div className="hidden lg:flex my-4 items-center">
                    <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage.path}>
                        Trang chủ
                    </Link>
                    <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">
                        &#8250;&#8250;
                    </span>
                    <p className="text-xs text-[#222]">Đơn bán</p>
                </div>
                <div className="bg-[#ffffff] flex  justify-between">
                    <Nav />
                </div>
                <Outlet />
            </div>
        </div>
    );
}
