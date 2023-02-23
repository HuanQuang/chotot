import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import AxiosClient from '../../../utils/Api/Axios';
import { schemaCar } from '../../../utils/Yup schema/Yup';
import InputField from './InputField';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Xeco({ onImage }) {
    const userID = useSelector((state) => state.user.userData.id);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaCar) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                userID: userID,
                type: 'Xe cộ',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeProduct: data.typeProduct,
                    typeEngine: data.typeEngine,
                    typeEnegy: data.typeEnegy,
                    firm: data.theFirm,
                    year: data.year,
                    origin: data.origin,
                    price: data.price,
                    licensePlate: data.licensePlate,
                    color: data.color,
                    numberOfSeats: data.numberOfSeats,
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
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Danh mục xe cộ <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Ô tô" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Ô tô</span>
                        </label>
                        <label>
                            <input type="radio" value="Xe máy" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Xe máy</span>
                        </label>
                        <label>
                            <input type="radio" value="Xe đạp" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Xe đạp</span>
                        </label>
                        <label>
                            <input type="radio" value="Xe điện" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Xe điện</span>
                        </label>
                        <label>
                            <input type="radio" value="Phụ tùng" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Phụ tùng</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeProduct?.message}</p>
                </div>
            </div>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Hộp số <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Tự động" name="typeEngine" {...register('typeEngine')} />
                            <span className="text-sm ml-1">Tự động</span>
                        </label>
                        <label>
                            <input type="radio" value="Số sàn" name="typeEngine" {...register('typeEngine')} />
                            <span className="text-sm ml-1">Số sàn</span>
                        </label>
                        <label>
                            <input type="radio" value="Bán tự động" name="typeEngine" {...register('typeEngine')} />
                            <span className="text-sm ml-1">Bán tự động</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeEngine?.message}</p>
                </div>
            </div>
            <div>
                <h5 className="text-[10px] text-[#8c8c8c] font-bold my-2">
                    Nhiên liệu <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Xăng" name="typeEnegy" {...register('typeEnegy')} />
                            <span className="text-sm ml-1">Xăng</span>
                        </label>
                        <label>
                            <input type="radio" value="Dầu" name="typeEnegy" {...register('typeEnegy')} />
                            <span className="text-sm ml-1">Dầu</span>
                        </label>
                        <label>
                            <input type="radio" value="Điện" name="typeEnegy" {...register('typeEnegy')} />
                            <span className="text-sm ml-1">Điện</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeEnegy?.message}</p>
                </div>
            </div>
            <Address props={[register, errors]} />
            <div className="my-4">
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <InputField register={register} placeholder="Hãng" name="theFirm" error={errors.theFirm?.message} />
                <InputField
                    register={register}
                    placeholder="Năm sản xuất"
                    name="year"
                    error={errors.year?.message}
                    type="number"
                />
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
                <InputField register={register} placeholder="Xuất xứ" name="origin" error={errors.origin?.message} />
                <InputField
                    register={register}
                    placeholder="Biển số xe"
                    name="licensePlate"
                    error={errors.licensePlate?.message}
                />
                <InputField register={register} placeholder="Màu sắc" name="color" error={errors.color?.message} />
                <InputField
                    register={register}
                    placeholder="Số chỗ"
                    name="numberOfSeats"
                    error={errors.numberOfSeats?.message}
                />
            </div>
            <Title
                props={[register, errors]}
                placeholder="- Tình trạng chiếc xe 
                        - Thời gian sử dụng xe
                        - Bảo trì xe: bao lâu/ lần, tại hãng hay không?
                        - Tình trạng giấy tờ"
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Xeco;
