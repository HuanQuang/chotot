import { Image } from '../../access/image/Image';
import { useEffect, useState } from 'react';
import Home from './componentsHeader/Home';
import Chat from './componentsHeader/Chat';
import SignIn from './componentsHeader/Login';
import More from './componentsHeader/More/More';
import Notify from './componentsHeader/Notify';
import Order from './componentsHeader/Order';
import Post from './componentsHeader/Post';
import Search from './componentsHeader/Search';
import Social from './componentsHeader/Social';
function Header() {
    const [logo, setLogo] = useState(true);
    useEffect(() => {
        const handleScroll = () => {
            window.scrollY >= 150 ? setLogo(false) : setLogo(true);
        };
        window.addEventListener('scroll', handleScroll);
    }, []);
    return (
        <div className="w-full bg-[#ffba00] fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[936px] mx-auto">
                <div className={`w-full h-[52px] ${logo ? 'flex' : 'hidden'} items-center justify-center lg:flex`}>
                    <img className="w-[96px] h-9 cursor-pointer" src={Image.logo} alt="Logo"></img>
                    <div className="hidden lg:flex justify-end grow text-sm tracking-[0.1px]">
                        <Home />
                        <Social />
                        <Order />
                        <Chat />
                        <Notify />
                        <More />
                    </div>
                </div>
                <div
                    className={`w-full flex justify-between px-3 lg:px-0 h-12 ${
                        logo ? 'items-start' : 'items-center'
                    } lg:items-start`}
                >
                    <Search />
                    <div className="flex items-center h-9">
                        <SignIn />
                    </div>
                    <Post />
                </div>
            </div>
        </div>
    );
}
export default Header;
