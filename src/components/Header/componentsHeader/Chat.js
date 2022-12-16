import { Link } from 'react-router-dom';
import { ChatIcon } from '../../../access/svg/svg';
import { PublicRouter } from '../../../Routers/Router';
function Chat({ props }) {
    const pc = 'hidden lg:flex items-center px-6 gap-x-2 hover:opacity-80';
    const mobileResponsive = '';
    return (
        <Link to={PublicRouter.ChatPage.path} className={props ? mobileResponsive : pc}>
            <ChatIcon />
            Chat
        </Link>
    );
}
export default Chat;
