import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../Pages/Home/HomePage';
import AdsPage from '../Pages/Ads/AdsPage';
import BuyerPage from '../Pages/Buyer/BuyerPage';
import SellerPage from '../Pages/Seller/SellerPage';
import ChatPage from '../Pages/Chat/ChatPage';
import LayOutDefaul from '../components/LayOuts/Defaul';

export const PublicRouter = {
    HomePage: { path: '/', component: HomePage },
    AdsPage: { path: '/ads', component: AdsPage },
    BuyerPage: { path: '/buyer', component: BuyerPage },
    SellerPage: { path: '/seller', component: SellerPage },
    ChatPage: { path: '/chat', component: ChatPage },
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
                />
                <Route
                    element={
                        <LayOutDefaul>
                            <SellerPage />
                        </LayOutDefaul>
                    }
                    path="/seller"
                />
                <Route
                    element={
                        <LayOutDefaul>
                            <ChatPage />
                        </LayOutDefaul>
                    }
                    path="/chat"
                />
            </Routes>
        </BrowserRouter>
    );
}
