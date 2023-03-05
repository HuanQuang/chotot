import { PersonIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
function Social({ props, iconProps }) {
    return (
        <Link to={PublicRouter.AdsPage.path} className={props}>
            <PersonIcon props={iconProps} />
            Quản lý tin
        </Link>
    );
}
export default Social;
