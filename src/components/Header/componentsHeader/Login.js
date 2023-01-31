import { AvatarIcon } from '../../../access/svg/svg';
import { Link } from 'react-router-dom';
import { PublicRouter } from '../../../Routers/Router';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AxiosClient from '../../../utils/Api/Axios';
import { isLogin } from '../../../Features/UserSlice';
function SignIn() {
    const dispatch = useDispatch();
    const token = localStorage.getItem('accessToken');

    useEffect(() => {
        async function getUserLogin() {
            await AxiosClient.get('account/me', {
                headers: { Authorization: `Bearer ${token}` },
            }).then((res) => {
                const user = res.data;
                dispatch(isLogin(user));
            });
        }
        getUserLogin();
    }, []);
    const user = useSelector((state) => state.user.userData?.fullName || state.user.userData?.phone);
    const avatar = useSelector((state) => state.user.userData?.avatar);
    return (
        <Link
            to={user ? PublicRouter.Profile.path : PublicRouter.Login.path}
            className="hidden lg:flex items-center gap-x-2 cursor-pointer"
        >
            {avatar ? <img src={avatar} className="w-6 h-6 rounded-full" alt="avatar"></img> : <AvatarIcon />}
            <span className="text-[14px] font-bold tracking-[0.2px]">{user ? user : 'Đăng nhập'}</span>
        </Link>
    );
}
export default SignIn;
