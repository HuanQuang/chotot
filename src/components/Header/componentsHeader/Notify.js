import { Link } from 'react-router-dom';
import { NotifyIcon } from '../../../access/svg/svg';

function Notify({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link className={props ? mobileResponsive : pc}>
            <NotifyIcon />
            Thông báo
        </Link>
    );
}
export default Notify;
