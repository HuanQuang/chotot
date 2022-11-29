import PcScreen from './PcResponsive';
import Policy from './Policy';
import MobileScreen from './MobileResponsive';
function Footer() {
    return (
        <div className="lg:p-6 max-w-[960px] mx-auto border-t-[1px] border-[#e5e7eb] border-solid ">
            <PcScreen />
            <MobileScreen />
            <hr />
            <Policy />
        </div>
    );
}

export default Footer;
