import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import InputField from './InputField';
import { schemaFashion } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Fashion({ onImage }) {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaFashion) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                type: 'Thời trang',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeProduct: data.typeProduct,
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
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <h3 className="text-[10px] text-[#8c8c8c]">
                    Tình trạng <span className="text-[red]"> *</span>
                </h3>
                <div>
                    <div className="flex gap-x-5 mb-3">
                        <label>
                            <input type="radio" value="Đã sử dụng" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Đã sử dụng</span>
                        </label>
                        <label>
                            <input type="radio" value="Mới" name="typeProduct" {...register('typeProduct')} />
                            <span className="text-sm ml-1">Mới</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeProduct?.message}</p>
                </div>
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
                <Title
                    props={[register, errors]}
                    placeholder="- Loại quần áo
                        - Nam/nữ
                        - Kích cỡ: S,M,L
                        - Nhãn hiệu
                        - Chất liệu, màu sắc
                        - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
                />

                <div>
                    <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                    <Address props={[register, errors]} />
                </div>
            </div>
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Fashion;
