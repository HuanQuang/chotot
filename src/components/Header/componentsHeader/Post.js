import { Link } from 'react-router-dom';
import { NoteIcon } from '../../../access/svg/svg';
import { PublicRouter } from '../../../Routers/Router';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import 'tippy.js/themes/light.css';
function Post({ props }) {
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
            <Link to={PublicRouter.Post.path} className={`bg-[#ff8800] text-white px-4 py-2 rounded ${props}`}>
                <NoteIcon />
                <span className="text-[14px] font-bold">ĐĂNG TIN</span>
            </Link>
        </Tippy>
    );
}
export default Post;

function PostMobile({ props, iconProps }) {
    return (
        <Link to={PublicRouter.Post.path} className={`px-4 py-2 ${props}`}>
            <div className=" w-6 h-6 flex items-center justify-center">
                <NoteIcon props={iconProps} />
            </div>
            <span className="lg:text-[14px] lg:font-bold">Đăng tin</span>
        </Link>
    );
}

export { PostMobile };
