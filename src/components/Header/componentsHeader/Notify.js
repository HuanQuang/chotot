import { Link } from 'react-router-dom';
import { NotifyIcon } from '../../../access/svg/svg';

function Notify({ props, iconProps }) {
    return (
        <Link className={props}>
            <div className="w-6 h-6">
                <NotifyIcon props={iconProps} />
            </div>
            Thông báo
        </Link>
    );
}
export default Notify;
