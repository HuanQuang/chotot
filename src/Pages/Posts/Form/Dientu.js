import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import InputField from './InputField';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import { schemaElectronic } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';
function Dientu({ onImage }) {
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaElectronic) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                type: 'Điện tử',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeProduct: data.typeProduct,
                    firm: data.firm,
                    color: data.color,
                    memory: data.memory,
                    condition: data.condition,
                    warranty: data.warranty,
                    price: data.price,
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
                    Danh mục đồ điện tử <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Điện thoại" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Điện thoại</span>
                        </label>
                        <label>
                            <input type="radio" value="Máy tính bảng" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Máy tính bảng</span>
                        </label>
                        <label>
                            <input type="radio" value="Laptop" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Laptop</span>
                        </label>
                        <label>
                            <input
                                type="radio"
                                value="Máy ảnh, máy quay"
                                name="typeProduct"
                                {...register('typeProduct')}
                            />
                            <span className="text-sm ml-1">Máy ảnh, máy quay</span>
                        </label>
                        <label>
                            <input type="radio" value="Phụ kiện" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Phụ kiện</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeProduct?.message}</p>
                </div>
                <Address props={[register, errors]} />
                <div className="my-4">
                    <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                    <InputField register={register} placeholder="Hãng" name="firm" error={errors.firm?.message} />
                    <InputField register={register} placeholder="Màu sắc" name="color" error={errors.color?.message} />
                    <InputField
                        register={register}
                        placeholder="Dung lượng"
                        name="memory"
                        error={errors.memory?.message}
                    />
                    <InputField
                        register={register}
                        placeholder="Tình trạng"
                        name="condition"
                        error={errors.condition?.message}
                    />
                    <InputField
                        register={register}
                        placeholder="Bảo hành"
                        name="warranty"
                        error={errors.warranty?.message}
                    />
                    <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
                </div>
            </div>
            <Title
                props={[register, errors]}
                placeholder="- Tình trạng sản phẩm
                - Thời gian sử dụng
                - Bảo hành nếu có
                - Sửa chữa, nâng cấp, phụ kiện đi kèm
                - Địa chỉ giao nhận, đổi trả
                - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Dientu;
