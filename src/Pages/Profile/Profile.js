import { PublicRouter } from '../../Routers/Router';
import { Link } from 'react-router-dom';
import Information from './Information';
import YourPost from './YourPost';
import YourResume from './YourResume';
function Profile() {
    return (
        <div className="max-w-[936px] mx-auto bg-[#f1f1f1] px-[15px]">
            <div className="hidden lg:flex my-4 items-center ">
                <Link className="text-xs text-[#2a5079]" to={PublicRouter.HomePage}>
                    Trang chủ
                </Link>
                <span className="text-[10px] text-[#9b9b9b] mx-1 leading-[2] flex items-center">&#8250;&#8250;</span>
                <p className="text-xs text-[#222222]">Trang cá nhân</p>
            </div>
            <Information />
            <YourPost />
            <YourResume />
        </div>
    );
}

export default Profile;
