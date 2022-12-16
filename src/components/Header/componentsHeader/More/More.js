import { Link } from 'react-router-dom';
import PopUp from './Popup';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { MenuIcon } from '../../../../access/svg/svg';
function More({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Tippy placement="bottom" trigger="click" hideOnClick="toggle" content={<PopUp />} interactive={true}>
            <Link className={props ? mobileResponsive : pc}>
                <MenuIcon />
                Thêm
            </Link>
        </Tippy>
    );
}
export default More;
