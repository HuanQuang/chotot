import { HomeIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
function Home({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.HomePage.path} className={props ? mobileResponsive : pc}>
            <HomeIcon />
            Trang chủ
        </Link>
    );
}
export default Home;
