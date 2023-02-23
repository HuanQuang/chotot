import {
    MoreCreateIcon,
    MoreHistoryIcon,
    MorePROIcon,
    MoreDTIcon,
    MoreHelpIcon,
    MoreSettingIcon,
    MoreSuggesIcon,
} from '../../access/svg/svg';
export const DataFooter = {
    supportList: [
        'Trung tâm trợ giúp',
        'An toàn mua bán',
        'Quy định cần biết',
        'Quy chế quyền riêng tư',
        'Liên hệ hỗ trợ',
    ],
    aboutList: ['Giới thiệu', 'Tuyển dụng', 'Truyền thông', 'Blog'],
};
export const TabOrder = [
    { key: 0, title: 'Chờ xác nhận', url: 'waiting_confirm' },
    { key: 1, title: 'Đang xử lí', url: 'order_processing' },
    { key: 2, title: 'Đang giao', url: 'order_delivering' },
    { key: 3, title: 'Đã giao', url: 'order_delivered' },
    { key: 4, title: 'Hoàn tiền/Đã huỷ', url: 'order_cancel' },
];
export const moreService = [
    { icon: MoreDTIcon, title: 'Đồng tốt' },
    { icon: MorePROIcon, title: 'Gói PRO' },
    { icon: MoreHistoryIcon, title: 'Lịch sử giao dịch' },
    { icon: MoreCreateIcon, title: 'Tạo cửa hàng/Chuyên trang' },
];
export const moreOthers = [
    { icon: MoreSettingIcon, title: 'Cài đặt tài khoản' },
    { icon: MoreHelpIcon, title: 'Trợ giúp' },
    { icon: MoreSuggesIcon, title: 'Đóng góp ý kiến' },
    // { icon: MoreLogOutIcon, title: 'Đăng xuất'},
];
export const categoryPost = [
    {
        title: 'Bất động sản',
        value: 1,
        icon: '',
    },
    {
        title: 'Xe cộ',
        value: 2,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/2000.png',
    },
    {
        title: 'Đồ điện tử',
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/5000.png',
        value: 3,
    },
    {
        title: 'Việc làm',
        value: 4,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/13000.png',
    },
    {
        title: 'Thú cưng',
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/12000.png',
        value: 5,
    },
    {
        title: 'Đồ ăn, thực phẩm và các loại khác',
        value: 6,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/7000.png',
    },
    {
        title: 'Tủ lạnh, máy giặt, máy lạnh',
        value: 7,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/9000.png',
    },
    {
        title: 'Đồ gia dụng, nội thất, cây cảnh',
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/14000.png',
        value: 8,
    },
    {
        title: 'Mẹ và bé',
        value: 9,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/11000.png',
    },
    {
        title: 'Thời trang, Đồ dùng cá nhân',
        value: 10,
        icon: 'https://static.chotot.com/storage/categories/all-category-v3/3000.png',
    },
];
