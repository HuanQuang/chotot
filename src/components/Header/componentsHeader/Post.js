import { Link } from 'react-router-dom';
import { NoteIcon } from '../../../access/svg/svg';
import { PublicRouter } from '../../../Routers/Router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
function Post() {
    return (
        <Tippy
            content={
                <div className="text-white text-[14px] leading-5 tracking-[0.2px]">
                    Tin đăng của bạn trên Chợ Tốt sẽ được tiếp cận đến hơn 10 triệu người dùng tiềm năng. Đăng tin kẻo
                    lỡ!
                </div>
            }
            placement="bottom"
            maxWidth={250}
        >
            <Link
                to={PublicRouter.Post.path}
                className="hidden lg:flex items-center cursor-pointer gap-x-2 bg-[#ff8800] text-white px-4 py-2 rounded hover:opacity-80"
            >
                <NoteIcon />
                <span className="text-[14px] font-bold">ĐĂNG TIN</span>
            </Link>
        </Tippy>
    );
}
export default Post;
