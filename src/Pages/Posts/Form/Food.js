import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import AxiosClient from '../../../utils/Api/Axios';
import InputField from './InputField';
import { schemaFood } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Food({ onImage }) {
    const userID = useSelector((state) => state.user.userData.id);
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaFood) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                userID: userID,
                type: 'Thực phẩm',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeFood: data.typeFood,
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
                    placeholder="Loại thực phẩm"
                    name="typeFood"
                    error={errors.typeFood?.message}
                />
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
            </div>
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Về người bán</h5>
                <Address props={[register, errors]} />
            </div>
            <Title
                props={[register, errors]}
                placeholder="- Sản phẩm: tên, số lượng, thương hiệu, xuất xứ
                - Hạn sử dụng, cách bảo quản
                - Giấy chứng nhận (nếu có)
                Đối với nhà hàng, quán ăn:
                - Giờ mở cửa, đóng cửa
                - Dịch vụ giao hàng, thanh toán (nếu có)
                Chấp nhận thanh toán/ vận chuyển qua Chợ Tốt"
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Food;
