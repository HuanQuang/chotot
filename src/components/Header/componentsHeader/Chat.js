import { Link } from 'react-router-dom';
import { ChatIcon } from '../../../access/svg/svg';
import { PublicRouter } from '../../../Routers/Router';
function Chat({ props }) {
    return (
        <Link to={PublicRouter.ChatPage.path} className={props}>
            <div className="w-6 h-6">
                <ChatIcon />
            </div>
            Chat
        </Link>
    );
}
export default Chat;
