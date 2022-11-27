import { AppStoreIcon, GooglePlayIcon, FbIcon, YoutubeIcon, LinkInIcon } from '../../access/svg/svg';
import { FooterImg } from '../../access/image/Image';
function PcScreen() {
    const supportList = [
        'Trung tâm trợ giúp',
        'An toàn mua bán',
        'Quy định cần biết',
        'Quy chế quyền riêng tư',
        'Liên hệ hỗ trợ',
    ];
    const aboutList = ['Giới thiệu', 'Tuyển dụng', 'Truyền thông', 'Blog'];
    const supportRender = supportList.map((item, key) => {
        return (
            <li className="text-[14px] mr-4 mb-3" key={key}>
                <button className="">{item}</button>
            </li>
        );
    });
    const aboutListRender = aboutList.map((item, key) => {
        return (
            <li key={key} className="text-[14px] mr-4 mb-3">
                <button className="">{item}</button>
            </li>
        );
    });
    return (
        <div className="max-w-[960px] mx-auto p-3 hidden lg:flex">
            <div className="flex-grow">
                <h3 className="mb-3 font-bold text-[ #222222] text-[14px]">TẢI ỨNG DỤNG CHỢ TỐT</h3>
                <div className="flex">
                    <img className="w-[87px] h-[87px] pr-3" src={FooterImg.qr} alt="qr-code"></img>
                    <div className="flex-col pr-3">
                        <div className="w-[93px] mr-4 mb-3">
                            <AppStoreIcon />
                        </div>
                        <div className="w-[93px] mr-4 mb-3">
                            <GooglePlayIcon />
                        </div>

                        <img className="w-[93px] mr-4 mb-3" src={FooterImg.huawei} alt="huawei"></img>
                    </div>
                </div>
            </div>
            <div className="flex-grow">
                <h3 className="mb-3 font-bold text-[ #222222] text-[14px]">HỖ TRỢ KHÁCH HÀNG</h3>
                <ul className="">{supportRender}</ul>
            </div>
            <div className="flex-grow">
                <h3 className="mb-3 font-bold text-[ #222222] text-[14px]">VỀ CHỢ TỐT</h3>
                <ul className="">{aboutListRender}</ul>
            </div>
            <div className="flex-grow">
                <h3 className="mb-3 font-bold text-[ #222222] text-[14px]">LIÊN KẾT</h3>
                <div className="flex">
                    <div className="mr-4 mb-3">
                        <FbIcon />
                    </div>
                    <div className="mr-4 mb-3">
                        <YoutubeIcon />
                    </div>
                    <div className="mr-4 mb-3">
                        <LinkInIcon />
                    </div>
                </div>
                <h3 className="mb-3 font-bold text-[ #222222] text-[14px]">CHỨNG NHẬN</h3>
                <img className="w-[93px]" src={FooterImg.certificate} alt="cerfiticate"></img>
            </div>
        </div>
    );
}

export default PcScreen;
