import { HeathIconDetailPost } from '../../access/svg/svg';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { PublicRouter } from '../../Routers/Router';
import AxiosClient from '../../utils/Api/Axios';
function LikeButton({ id }) {
    const navigate = useNavigate();
    const isLogin = useSelector((state) => state.user.isLogin);
    const [liked, setLiked] = useState(false);
    useEffect(() => {
        // Gọi API endpoint để kiểm tra xem post đã được like hay chưa
        async function checkLike() {
            await AxiosClient.post(`post/${id}/is-liked`)
                .then((res) => {
                    setLiked(res.data);
                })
                .catch((err) => console.log(err));
        }

        checkLike();
    }, []);
    const handleLikePost = () => {
        if (isLogin) {
            AxiosClient.put(`post/${id}/is-liked`, { checked: liked })
                .then((res) => setLiked(res.data))
                .catch((err) => console.log(err));
        } else navigate(PublicRouter.Login.path);
    };
    return (
        <div className="flex items-center" onClick={handleLikePost}>
            <HeathIconDetailPost liked={liked} />
            <span className="ml-1">Lưu tin</span>
        </div>
    );
}

export default LikeButton;
