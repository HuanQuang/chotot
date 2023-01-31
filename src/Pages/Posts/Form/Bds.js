import SubmitBtn from './Button';
import axios from 'axios';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import { useSelector } from 'react-redux';

// Form bất động sản
function BdsHtml() {
    // Xử lí dữ liệu địa chỉ
    const [listCity, setlistCity] = useState([]);
    const [cityName, setCityName] = useState();
    const [districtName, setDistrictName] = useState();
    const userID = useSelector((state) => state.user.userData.id);
    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => setlistCity(response.data));
    }, []);
    const listDistrict = listCity.find((city) => city.Name === cityName)?.Districts;
    const listWards = listDistrict ? listDistrict.find((district) => district.Name === districtName)?.Wards : [];

    // Validate and values
    const schema = yup
        .object({
            typeBds: yup.mixed().required('Vui lòng nhập trường này'),
            formality: yup.mixed().required('Vui lòng nhập trường này'),
            city: yup.string().required('Vui lòng nhập trường này'),
            district: yup.string().required('Vui lòng nhập trường này'),
            ward: yup.string().required('Vui lòng nhập trường này'),
            detailAddress: yup
                .string()
                .required('Vui lòng nhập trường này')
                .min(5, 'Nhập địa chỉ từ 10 - 50 kí tự')
                .max(50, 'Nhập địa chỉ từ 10 - 50 kí tự'),
            area: yup.string().required('Vui lòng nhập trường này'),
            price: yup.string().required('Vui lòng nhập trường này'),
            deposit: yup.string().required('Vui lòng nhập trường này'),
            title: yup
                .string()
                .required('Tiêu đề không được để trống')
                .min(5, 'Tiêu đề phải từ 10 - 50 kí tự')
                .max(50, 'Tiêu đề phải từ 10 - 50 kí tự'),
            descDetail: yup.string().required('Vui lòng nhập trường này'),
        })
        .required();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schema) });
    const onSubmit = async (data) => {
        try {
            await AxiosClient.post('post', {
                userId: userID,
                type: 'bds',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    area: data.area,
                    price: data.price,
                    deposit: data.deposit,
                },
            }).then((res) => console.log(res));
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <form className="" onSubmit={handleSubmit(onSubmit)}>
            <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                Danh mục bất động sản <span className="text-[red]">*</span>
            </h5>
            <div>
                <div className="flex gap-x-6 flex-wrap">
                    <label>
                        <input type="radio" value="Căn hộ" {...register('typeBds')} />
                        <span className="text-sm ml-1">Căn hộ/ Chung cư</span>
                    </label>
                    <label>
                        <input type="radio" value="Nhà ở" {...register('typeBds')} />
                        <span className="text-sm ml-1">Nhà ở</span>
                    </label>
                    <label>
                        <input type="radio" value="Đất" {...register('typeBds')} />
                        <span className="text-sm ml-1">Đất</span>
                    </label>
                    <label>
                        <input type="radio" value="Văn phòng" {...register('typeBds')} />
                        <span className="text-sm ml-1">Văn phòng</span>
                    </label>
                    <label>
                        <input type="radio" value="Mặt bằng kinh doanh" {...register('typeBds')} />
                        <span className="text-sm ml-1">Mặt bằng kinh doanh</span>
                    </label>
                </div>
                <p className="text-[#ff1717] text-xs mt-1">{errors.typeBds?.message}</p>
            </div>
            <h5 className="text-lg font-bold text-[#222] my-2">Loại hình</h5>
            <div>
                <div>
                    <div className="flex gap-x-6">
                        <label>
                            <input type="radio" value="Cần bán" {...register('formality')} />
                            <span className="text-sm ml-1">Cần bán</span>
                        </label>
                        <label>
                            <input type="radio" value="Cho thuê" {...register('formality')} />
                            <span className="text-sm ml-1">Cho thuê</span>
                        </label>
                    </div>
                </div>
                <p className="text-[#ff1717] text-xs mt-1">{errors.formality?.message}</p>
            </div>
            <div className="my-4">
                <h5 className="text-lg font-bold text-[#222] my-2">
                    Địa chỉ BĐS <span className="text-[red]">*</span>
                </h5>
                <div className="mb-4">
                    <div className="mb-3">
                        <select
                            className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3  outline-none"
                            {...register('city')}
                            onChange={(e) => setCityName(e.target.value)}
                        >
                            <option value="">Chọn tỉnh thành</option>
                            {listCity.map((city) => {
                                return (
                                    <option value={city.Name} key={city.Id}>
                                        {city.Name}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.city?.message}</p>
                    </div>
                    <div className="mb-3">
                        <select
                            className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3 outline-none"
                            {...register('district')}
                            onChange={(e) => setDistrictName(e.target.value)}
                        >
                            <option value="">Chọn quận huyện</option>
                            {listDistrict?.map((district) => {
                                return (
                                    <option value={district.Name} key={district.Id}>
                                        {district.Name}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.district?.message}</p>
                    </div>
                    <div className="mb-3">
                        <select
                            className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3 outline-none"
                            {...register('ward')}
                        >
                            <option value="">Chọn phường xã</option>
                            {listWards?.map((ward) => {
                                return (
                                    <option value={ward.Name} key={ward.Id}>
                                        {ward.Name}
                                    </option>
                                );
                            })}
                        </select>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.ward?.message}</p>
                    </div>
                    <div className="mb-3">
                        <input
                            className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                            type="text"
                            placeholder="Địa chỉ căn hộ, toà nhà, khu dân cư"
                            {...register('detailAddress')}
                        ></input>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.ward?.message}</p>
                    </div>
                </div>
            </div>
            <div className="my-4">
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Diện tích"
                    {...register('area')}
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    placeholder="Giá"
                    {...register('price')}
                ></input>
                <input
                    className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                    type="text"
                    {...register('deposit')}
                    placeholder="Số tiền cọc"
                ></input>
            </div>
            <div>
                <div>
                    <h5 className="text-lg font-bold text-[#222] my-4">Tiêu đề tin đăng và mô tả chi tiết</h5>
                    <div className="mb-3">
                        <input
                            className=" text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                            type="text"
                            placeholder="Tiêu đề tin đăng"
                            {...register('title', { required: true, maxLength: 50 })}
                        ></input>
                        <p className="text-[#ff1717] text-xs mt-1">{errors.title?.message}</p>
                    </div>

                    <div className="relative">
                        <div className="absolute top-[11px] left-3 text-sm text-[#8c8c8c] h-8">
                            Mô tả chi tiết <span className="text-[red]">*</span>
                        </div>
                        <textarea
                            inputMode="text"
                            className=" text-sm text-[#222] w-full h-[190px] rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] pt-9 px-3 pb-1 outline-none"
                            type="text"
                            placeholder="Nên có: loại Căn hộ chung cư, vị trí, tiện ích, diện tích, số phòng, thông tin pháp lý, tình trạng nội thất, v.v.
                    Ví dụ: Tọa lạc tại đường Số 2 Đ. N4, Căn hộ Duplex Celadon City Q.Tân Phú 68m2 2PN, 1WC. Tiện ích đầy đủ"
                            {...register('descDetail')}
                        ></textarea>
                        <p className="text-[#ff1717] text-xs mt-1 mb-3">{errors.descDetail?.message}</p>
                    </div>
                </div>
            </div>
            <SubmitBtn />
        </form>
    );
}

export default BdsHtml;
