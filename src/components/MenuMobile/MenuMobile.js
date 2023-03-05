import Home from '../Header/componentsHeader/Home';
import Notify from '../Header/componentsHeader/Notify';
import Social from '../Header/componentsHeader/Social';
import { PostMobile } from '../../components/Header/componentsHeader/Post';
import SignIn from '../Header/componentsHeader/Login';
function MenuMobile() {
    return (
        <div className="flex lg:hidden fixed bottom-0 right-0 left-0 h-[50px] w-full bg-[#FFFFFF] menuShadow">
            <Home
                props={
                    'text-[#ff8800] bg-tranparent text-[10px] flex flex-col items-center gap-[2px] justify-center grow'
                }
                iconProps={'#ff8800'}
            />
            <Social
                props={
                    'bg-tranparent text-[10px] flex flex-col items-center gap-[2px] justify-center grow text-[#8c8c8c]'
                }
                iconProps={'#8c8c8c'}
            />
            <div className="relative w-[70px]">
                <PostMobile
                    props={
                        'absolute w-full h-[70px] bg-[#ff8800] bottom-0 text-[10px] text-[#000] flex flex-col items-center gap-[2px] justify-center rounded-full'
                    }
                    iconProps={'#000'}
                />
            </div>
            <Notify
                props={
                    'bg-tranparent text-[10px] flex flex-col items-center gap-[2px] justify-center grow text-[#8c8c8c]'
                }
                iconProps={'#8c8c8c'}
            />
            <SignIn
                props={
                    'bg-tranparent text-[10px] flex flex-col items-center gap-[2px] justify-center grow text-[#8c8c8c]'
                }
            />
        </div>
    );
}

export default MenuMobile;
