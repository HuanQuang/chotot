import { Image } from '../../access/image/Image';
import { HeaderComponent } from './ComponentsHeader';
import { useEffect, useState } from 'react';
export default function Header() {
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
                        <HeaderComponent.HomeBtn />
                        <HeaderComponent.SocialBtn />
                        <HeaderComponent.Orderbtn />
                        <HeaderComponent.ChatBtn />
                        <HeaderComponent.NotifyBtn />
                        <HeaderComponent.More />
                    </div>
                </div>
                <div
                    className={`w-full flex justify-between px-3 lg:px-0 h-12 ${
                        logo ? 'items-start' : 'items-center'
                    } lg:items-start`}
                >
                    <HeaderComponent.SearchBtn />
                    <HeaderComponent.SignInBtn />
                    <HeaderComponent.PostNewBtn />
                </div>
            </div>
        </div>
    );
}
