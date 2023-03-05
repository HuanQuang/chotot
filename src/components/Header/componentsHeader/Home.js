import { HomeIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
function Home({ props, iconProps }) {
    return (
        <Link to={PublicRouter.HomePage.path} className={`${props}`}>
            <div className="w-6 h-6 text-white lg:text-[#000]">
                <HomeIcon props={iconProps} />
            </div>
            Trang chủ
        </Link>
    );
}
export default Home;
