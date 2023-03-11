import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import InputField from './InputField';
import { schemaHouseWare } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Dogiadung({ onImage }) {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaHouseWare) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                type: 'Đồ gia dụng',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeProduct: data.typeProduct,
                    material: data.material,
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
                <InputField
                    register={register}
                    placeholder="Loại sản phẩm"
                    name="typeProduct"
                    error={errors.typeProduct?.message}
                />
                <InputField
                    register={register}
                    placeholder="Chất liệu"
                    name="material"
                    error={errors.material?.message}
                />
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
                <div>
                    <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                    <Address props={[register, errors]} />
                </div>
            </div>
            <Title
                props={[register, errors]}
                placeholder="- Chất liệu, xuất xứ
                        - Kích thước dài x rộng x cao
                        - Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Dogiadung;
