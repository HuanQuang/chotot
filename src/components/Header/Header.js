import { Image } from '../../access/image/Image';
import { HeaderComponent } from './ComponentsHeader';
export default function Header() {
    return (
        <div className="w-full h-[100px] bg-[#ffba00] fixed top-0 left-0 right-0 z-10">
            <div className="max-w-[936px] mx-auto">
                <div className="w-full h-[52px] flex items-center justify-center">
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
                <div className="w-full flex items-center justify-between px-3 lg:px-0">
                    <HeaderComponent.SearchBtn />
                    <HeaderComponent.SignInBtn />
                    <HeaderComponent.PostNewBtn />
                </div>
            </div>
        </div>
    );
}
