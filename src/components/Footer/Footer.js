import PcScreen from './PcResponsive';
import Policy from './Policy';
import MobileScreen from './MobileResponsive';
function Footer() {
    return (
        <div className="lg:p-6 max-w-[960px] mx-auto">
            <hr />
            <PcScreen />
            <MobileScreen />
            <hr />
            <Policy />
        </div>
    );
}

export default Footer;
