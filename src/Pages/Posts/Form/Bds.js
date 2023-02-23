import SubmitBtn from './Button';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import Title from './Title';
import AxiosClient from '../../../utils/Api/Axios';
import { useSelector } from 'react-redux';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { schemaBds } from '../../../utils/Yup schema/Yup';
import InputField from './InputField';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';
// Form bất động sản
function BdsHtml({ onImage }) {
    const userID = useSelector((state) => state.user.userData.id);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaBds) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                userID: userID,
                type: 'Bất động sản',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    area: data.area,
                    price: data.price,
                    deposit: data.deposit,
                },
                img: onImage,
            }).then((res) => {
                if (res.status === 200) {
                    notifySuccess(res.data);
                } else notifyError(res.data);
            });
        } catch (error) {
            console.log(error);
        }
        setLoading(false);
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
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
            <Address props={[register, errors]} />
            <div className="my-4">
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <InputField register={register} placeholder="Diện tích" name="area" error={errors.area?.message} />
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
                <InputField
                    register={register}
                    placeholder="Số tiền cọc"
                    name="deposit"
                    error={errors.deposit?.message}
                />
            </div>
            <div>
                <Title
                    props={[register, errors]}
                    placeholder="Nên có: loại Căn hộ chung cư, vị trí, tiện ích, diện tích, số phòng, thông tin pháp lý, tình trạng nội thất, v.v.
                    Ví dụ: Tọa lạc tại đường Số 2 Đ. N4, Căn hộ Duplex Celadon City Q.Tân Phú 68m2 2PN, 1WC. Tiện ích đầy đủ"
                />
            </div>
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default BdsHtml;
