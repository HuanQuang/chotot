import Product from '../Product/Product';
function NewList() {
    const list = [
        {
            src: 'https://cdn.chotot.com/7plyYoUdU_7JuR1qAVDp1zIp8RuoZiXYuu6HBLeW-f0/preset:listing/plain/7cae20df9242eed1f2aac6398368760e-2798721381979341274.jpg',
            title: 'Sh Mode 2018 Bs thành phố 203.30 chính',
            price: ' 55.500.000 đ',
            time: '1 ngày trước',
            location: 'tp.Đà Nẵng',
        },
        {
            src: 'https://cdn.chotot.com/zr20wYEHvQSeAXwYZubEU4qOY_0OiGGJdgpR0HzskZ8/preset:listing/plain/d2d5066c6b9b0090e7c5551a649622fd-2800895717721670649.jpg',
            title: 'Cho Thuê Mặt Bằng Kinh Doanh 40m2 Tân',
            price: '7 triệu/tháng',
            time: '1 phút trước',
            location: 'tp.Hồ Chí Minh',
        },
        {
            src: 'https://cdn.chotot.com/i10uR8Eku8JTqe7ivNVyoY3KmPWBqUb9FHKtflCyS_c/preset:listing/plain/8e3b1a7315db8768d197df7519431fa3-2800896129491845027.jpg',
            title: 'SỔ HỒNG RIÊNG 2 LẦU HẺM TRẦN',
            price: '3,5 tỷ',
            time: '1 phút trước',
            location: 'tp.Nha Trang',
        },
        {
            src: 'https://cdn.chotot.com/i10uR8Eku8JTqe7ivNVyoY3KmPWBqUb9FHKtflCyS_c/preset:listing/plain/8e3b1a7315db8768d197df7519431fa3-2800896129491845027.jpg',
            title: 'SỔ HỒNG RIÊNG 2 LẦU HẺM TRẦN',
            price: '3,5 tỷ',
            time: '1 phút trước',
            location: 'tp.Nha Trang',
        },
        {
            src: 'https://cdn.chotot.com/i10uR8Eku8JTqe7ivNVyoY3KmPWBqUb9FHKtflCyS_c/preset:listing/plain/8e3b1a7315db8768d197df7519431fa3-2800896129491845027.jpg',
            title: 'SỔ HỒNG RIÊNG 2 LẦU HẺM TRẦN',
            price: '3,5 tỷ',
            time: '1 phút trước',
            location: 'tp.Nha Trang',
        },
        {
            src: 'https://cdn.chotot.com/i10uR8Eku8JTqe7ivNVyoY3KmPWBqUb9FHKtflCyS_c/preset:listing/plain/8e3b1a7315db8768d197df7519431fa3-2800896129491845027.jpg',
            title: 'SỔ HỒNG RIÊNG 2 LẦU HẺM TRẦN',
            price: '3,5 tỷ',
            time: '1 phút trước',
            location: 'tp.Nha Trang',
        },
    ];
    const renderList = list.map((item) => {
        return <Product props={item} />;
    });
    return (
        <div className="w-full">
            <h4 className="p-3 text-[17px] font-bold text-[#222222]">Tin đăng mới</h4>
            <div className="flex flex-wrap">{renderList}</div>
        </div>
    );
}

export default NewList;
