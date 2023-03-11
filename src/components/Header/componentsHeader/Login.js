import { AvatarIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AxiosClient from '../../../utils/Api/Axios';
import { isLogin } from '../../../Features/UserSlice';
function SignIn({ props }) {
    const dispatch = useDispatch();

    useEffect(() => {
        async function getUserLogin() {
            await AxiosClient.post('account/me').then((res) => {
                dispatch(isLogin(res.data));
            });
        }
        getUserLogin();
    }, []);
    const user = useSelector((state) => state.user.userData?.fullName || state.user.userData?.phone);
    const avatar = useSelector((state) => state.user.userData?.avatar);
    return (
        <Link to={user ? PublicRouter.Profile.path : PublicRouter.Login.path} className={props}>
            {avatar ? <img src={avatar} className="w-6 h-6 rounded-full" alt="avatar"></img> : <AvatarIcon />}
            <span className="lg:text-[14px] lg:font-bold tracking-[0.2px]">{user ? user : 'Đăng nhập'}</span>
        </Link>
    );
}
export default SignIn;
