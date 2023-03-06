import Slider from '../../components/Slider/Slider';
import SubBanner from '../../components/SubBanner/SubBanner';
import Category from '../../components/BannerAds/Category';
import NewList from '../../components/NewList/NewList';
export default function HomePage() {
    console.log(process.env.REACT_APP_BASE_URL);
    return (
        <div className="background">
            <div className="max-w-[960px] mx-auto relative bg-white">
                <Slider />
                <SubBanner />
                <Category />
                <NewList />
            </div>
        </div>
    );
}
