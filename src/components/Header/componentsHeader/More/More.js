import { Link } from 'react-router-dom';
import PopUp from './Popup';
import Tippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
import { MenuIcon } from '../../../../access/svg/svg';
import { useState } from 'react';
function More({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    const [visible, setVisible] = useState(false);
    const show = () => setVisible(true);
    const hide = () => setVisible(false);
    return (
        <Tippy
            placement="bottom"
            render={(attrs) => (
                <div tabIndex="-1" {...attrs}>
                    <PopUp />
                </div>
            )}
            hideOnClick="toggle"
            interactive={true}
            visible={visible}
            onClickOutside={hide}
        >
            <Link className={props ? mobileResponsive : pc} onClick={visible ? hide : show}>
                <MenuIcon />
                Thêm
            </Link>
        </Tippy>
    );
}
export default More;
