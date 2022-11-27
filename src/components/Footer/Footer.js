import PcScreen from './PcResponsive';
import Policy from './Policy';
import MobileScreen from './MobileResponsive';
function Footer() {
    return (
        <div className="lg:p-6 ">
            <PcScreen />
            <MobileScreen />
            <hr />
            <Policy />
        </div>
    );
}

export default Footer;
