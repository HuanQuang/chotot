import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import AdsPage from '../Pages/Ads/AdsPage';
import BuyerPage from '../Pages/Buyer/BuyerPage';
import SellerPage from '../Pages/Seller/SellerPage';
import ChatPage from '../Pages/Chat/ChatPage';
import LayOutDefaul from '../components/LayOuts/Defaul';
import NotFooterLayOut from '../components/LayOuts/NotFooter';
import Login from '../Pages/Auth/Login';
import Register from '../Pages/Auth/Register';
import Profile from '../Pages/Profile/Profile';
import Empty from '../Pages/Buyer/EmptyOrder';
import Updateprofile from '../Pages/Profile/UpdateProfile';
import FormEdit from '../Pages/Profile/FormEdit';
import NotFound from '../Pages/Error/Error';
import Post from '../Pages/Posts/Post';
import { useSelector } from 'react-redux';
import DetailPost from '../Pages/DetailPost/DetailPost';

export const PublicRouter = {
    HomePage: { path: '/' },
    AdsPage: { path: '/ads' },
    BuyerPage: { path: '/buyer' },
    SellerPage: { path: '/seller' },
    ChatPage: { path: '/chat' },
    Login: { path: '/login' },
    Register: { path: '/register' },
    Profile: { path: '/profile' },
    Updateprofile: { path: '/profile/dashboard' },
    FormEdit: { path: '/profile/dashboard/edit' },
    Post: { path: '/dang-tin' },
};
const RouteDepend = {
    AdsPage: { key: 0, path: '/ads', component: AdsPage, layout: LayOutDefaul },
    ChatPage: { key: 1, path: '/chat', component: ChatPage, layout: NotFooterLayOut },
    Profile: { key: 2, path: '/profile', component: Profile, layout: LayOutDefaul },
    Updateprofile: { key: 3, path: '/profile/dashboard', component: Updateprofile, layout: NotFooterLayOut },
    FormEdit: { key: 4, path: '/profile/dashboard/edit', component: FormEdit, layout: NotFooterLayOut },
    Post: { key: 5, path: '/dang-tin', component: Post, layout: NotFooterLayOut },
};
export default function Routers() {
    const isLogin = useSelector((state) => state.user.isLogin);
    const directionLogin = <Navigate to="/login" replace />;
    const directionHomepage = <Navigate to="/" replace />;
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    element={
                        <LayOutDefaul>
                            <HomePage />
                        </LayOutDefaul>
                    }
                    path="/"
                />
                ,
                {Object.values(RouteDepend).map((route) => {
                    const Page = route.component;
                    const path = route.path;
                    const Layout = route.layout;
                    return (
                        <Route
                            key={route.key}
                            element={
                                isLogin ? (
                                    <Layout>
                                        <Page />
                                    </Layout>
                                ) : (
                                    directionLogin
                                )
                            }
                            path={path}
                        />
                    );
                })}
                <Route
                    element={
                        isLogin ? (
                            <LayOutDefaul>
                                <BuyerPage />
                            </LayOutDefaul>
                        ) : (
                            directionLogin
                        )
                    }
                    path="/buyer"
                >
                    <Route path="waiting_confirm" element={<Empty />} />
                    <Route path="order_processing" element={<Empty />} />
                    <Route path="order_delivering" element={<Empty />} />
                    <Route path="order_delivered" element={<Empty />} />
                    <Route path="order_cancel" element={<Empty />} />
                </Route>
                <Route
                    element={
                        isLogin ? (
                            <LayOutDefaul>
                                <SellerPage />
                            </LayOutDefaul>
                        ) : (
                            directionLogin
                        )
                    }
                    path="/seller"
                >
                    <Route path="waiting_confirm" element={<Empty />} />
                    <Route path="order_processing" element={<Empty />} />
                    <Route path="order_delivering" element={<Empty />} />
                    <Route path="order_delivered" element={<Empty />} />
                    <Route path="order_cancel" element={<Empty />} />
                </Route>
                {/* Login and register */}
                <Route
                    element={
                        isLogin ? (
                            directionHomepage
                        ) : (
                            <LayOutDefaul>
                                <Login />
                            </LayOutDefaul>
                        )
                    }
                    path="/login"
                ></Route>
                <Route
                    element={
                        isLogin ? (
                            directionHomepage
                        ) : (
                            <LayOutDefaul>
                                <Register />
                            </LayOutDefaul>
                        )
                    }
                    path="/register"
                />
                <Route path="/" element={<NotFound />} exact={false} />
                <Route
                    path="/post/:id"
                    element={
                        <LayOutDefaul>
                            <DetailPost />
                        </LayOutDefaul>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
