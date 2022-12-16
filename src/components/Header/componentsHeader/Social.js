import { PersonIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
function Social({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.AdsPage.path} className={props ? mobileResponsive : pc}>
            <PersonIcon />
            Quản lý tin
        </Link>
    );
}
export default Social;
