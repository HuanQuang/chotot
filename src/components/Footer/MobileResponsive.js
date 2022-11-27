import { Image } from '../../access/image/Image';
import { AppStoreIcon, GooglePlayIcon } from '../../access/svg/svg';
import { FooterImg } from '../../access/image/Image';

function MobileScreen() {
    return (
        <div className="mx-auto p-3 block lg:hidden">
            <div className="flex justify-between">
                <img className="text-[#ffba00] w-24 h-9" src={Image.logo2} alt="logo"></img>
                <div className="">
                    <div className="flex text-[#ff8800] justify-evenly text-[9px]">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                    </div>
                    <p className="text-sm text-[#777777] mt-[2px]">109.000 Bình chọn</p>
                </div>
            </div>
            <div className="my-3">
                <h3 className="text-sm text-[#222222] font-bold my-3">Tải ngay ứng dụng - Mua bán cực sung</h3>
                <div className="flex justify-between">
                    <div className="w-[93px]">
                        <AppStoreIcon />
                    </div>
                    <img className="w-[93px]" src={FooterImg.huawei} alt="huawei"></img>
                    <div className="w-[93px]">
                        <GooglePlayIcon />
                    </div>
                </div>
            </div>
            <hr />
            <div className="my-3">
                <div className="flex justify-between items-center">
                    <a
                        className="text-[10px] text-[#777777] min-w-[122px] text-center"
                        href="https://trogiup.chotot.com/"
                    >
                        TRỢ GIÚP
                    </a>
                    <span> - </span>
                    <a
                        className="text-[10px] text-[#777777] min-w-[122px] text-center"
                        href="https://trogiup.chotot.com/nguoi-ban/hoat-dong/"
                    >
                        QUY ĐỊNH CẦN BIẾT
                    </a>
                    <span> - </span>
                    <a
                        className="text-[10px] text-[#777777] min-w-[122px] text-center"
                        href="https://trogiup.chotot.com/nguoi-ban/rieng-tu/"
                    >
                        QUY CHẾ QUYỀN RIÊNG TƯ
                    </a>
                </div>
                <div className="flex justify-evenly items-center">
                    <a
                        className="text-[10px] text-[#777777] min-w-[122px] text-center"
                        href="https://trogiup.chotot.com/lien-he/"
                    >
                        LIÊN HỆ
                    </a>
                    <span> - </span>
                    <a className="text-[10px] text-[#777777] min-w-[122px] text-center" href="VỀ CHỢ TỐT">
                        VỀ CHỢ TỐT
                    </a>
                </div>
                <img className="w-[130px] h-10 my-4 mx-auto" src={FooterImg.certificate} alt="Cerfiticate"></img>
            </div>
        </div>
    );
}

export default MobileScreen;
