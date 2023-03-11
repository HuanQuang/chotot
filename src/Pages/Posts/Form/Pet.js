import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import InputField from './InputField';
import { schemaPet } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Pet({ onImage }) {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaPet) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                type: 'Thú cưng',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typePet: data.typePet,
                    species: data.species,
                    age: data.age,
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
                    Danh mục thú cưng <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Chó" name="typePet" {...register('typePet')} />
                            <span className="text-sm ml-1">Chó</span>
                        </label>
                        <label>
                            <input type="radio" value="Chim" name="typePet" {...register('typePet')} />
                            <span className="text-sm ml-1">Chim</span>
                        </label>
                        <label>
                            <input type="radio" value="Mèo" name="typePet" {...register('typePet')} />
                            <span className="text-sm ml-1">Mèo</span>
                        </label>
                        <label>
                            <input type="radio" value="Khác" name="typePet" {...register('typePet')} />
                            <span className="text-sm ml-1">Khác</span>
                        </label>
                        <label>
                            <input type="radio" value="Thức ăn, phụ kiện" name="typePet" {...register('typePet')} />
                            <span className="text-sm ml-1">Thức ăn, phụ kiện</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typePet?.message}</p>
                </div>
            </div>
            <Address props={[register, errors]} />
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Thông tin chi tiết</h5>
                <InputField
                    register={register}
                    placeholder="Giống thú cưng"
                    name="species"
                    error={errors.species?.message}
                />
                <InputField register={register} placeholder="Độ tuổi" name="age" error={errors.age?.message} />
                <InputField register={register} placeholder="Giá" name="price" error={errors.price?.message} />
            </div>
            <Title
                props={[register, errors]}
                placeholder="Nên viết các thông tin nổi bật:
            - Giống động vật, Xuất xứ
            - Tháng tuổi, Cân nặng, Màu sắc
            - Tiêm ngừa và khai sinh, ..."
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Pet;
