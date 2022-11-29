import { BrowserRouter, Route, Routes } from 'react-router-dom';
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
import AddPhone from '../Pages/Auth/AddPhone/AddPhone';
export const PublicRouter = {
    HomePage: '/',
    AdsPage: '/ads',
    BuyerPage: '/buyer',
    SellerPage: '/seller',
    ChatPage: '/chat',
    Login: '/login',
    Register: '/register',
    Profile: '/profile',
};
export default function Routers() {
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
                <Route
                    element={
                        <LayOutDefaul>
                            <AdsPage />
                        </LayOutDefaul>
                    }
                    path="/ads"
                />
                <Route
                    element={
                        <LayOutDefaul>
                            <BuyerPage />
                        </LayOutDefaul>
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
                        <LayOutDefaul>
                            <SellerPage />
                        </LayOutDefaul>
                    }
                    path="/seller"
                >
                    <Route path="waiting_confirm" element={<Empty />} />
                    <Route path="order_processing" element={<Empty />} />
                    <Route path="order_delivering" element={<Empty />} />
                    <Route path="order_delivered" element={<Empty />} />
                    <Route path="order_cancel" element={<Empty />} />
                </Route>
                <Route
                    element={
                        <NotFooterLayOut>
                            <ChatPage />
                        </NotFooterLayOut>
                    }
                    path="/chat"
                />
                <Route
                    element={
                        <LayOutDefaul>
                            <Login />
                        </LayOutDefaul>
                    }
                    path="/login"
                >
                    <Route path="social_connect" element={<AddPhone />} />
                </Route>
                <Route
                    element={
                        <LayOutDefaul>
                            <Register />
                        </LayOutDefaul>
                    }
                    path="/register"
                />
                <Route
                    element={
                        <LayOutDefaul>
                            <Profile />
                        </LayOutDefaul>
                    }
                    path="/profile"
                />
            </Routes>
        </BrowserRouter>
    );
}
