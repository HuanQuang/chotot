import { AvatarIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AxiosClient from '../../../utils/Api/Axios';
import { isLogin } from '../../../Features/UserSlice';
function SignIn() {
    const dispatch = useDispatch();
    useEffect(() => {
        async function getUserLogin() {
            const res = await AxiosClient.get('account/me');
            const user = res.data;
            dispatch(isLogin(user));
        }
        getUserLogin();
    }, []);
    const user = useSelector((state) => state.user.userData?.fullName || state.user.userData?.phone);
    return (
        <Link
            to={user ? PublicRouter.Profile.path : PublicRouter.Login.path}
            className="hidden lg:flex items-center gap-x-2 cursor-pointer"
        >
            <AvatarIcon />
            <span className="text-[14px] font-bold tracking-[0.2px]">{user ? user : 'Đăng nhập'}</span>
        </Link>
    );
}
export default SignIn;
