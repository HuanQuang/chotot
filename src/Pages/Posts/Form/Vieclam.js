import SubmitBtn from './Button';
import Title from './Title';
import Address from './Address';
import { ToastContainer } from 'react-toastify';
import { notifySuccess, notifyError } from '../../../utils/Toast/Toast';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import AxiosClient from '../../../utils/Api/Axios';
import InputField from './InputField';
import { schemaJob } from '../../../utils/Yup schema/Yup';
import SpinLoading from '../../../components/SpinLoading/SpinLoading';
import { useState } from 'react';

function Job({ onImage }) {
    const [loading, setLoading] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ resolver: yupResolver(schemaJob) });
    const onSubmit = async (data) => {
        setLoading(true);
        try {
            await AxiosClient.post('post', {
                type: 'Việc làm',
                title: data.title,
                description: data.descDetail,
                address: `${data.city} - ${data.district} - ${data.ward}, ${data.detailAddress}`,
                information: {
                    typeHirer: data.typeHirer,
                    numOfRecruitment: data.numOfRecruitment,
                    pay: data.pay,
                    minSalary: data.minSalary,
                    maxSalary: data.maxSalary,
                    career: data.career,
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
                    Thông tin nhà tuyển dụng <span className="text-[red]">*</span>
                </h5>
                <div>
                    <div className="flex gap-x-6 flex-wrap">
                        <label>
                            <input type="radio" value="Cá nhân" name="typeHirer" {...register('typeHirer')} />
                            <span className="text-sm ml-1">Cá nhân</span>
                        </label>
                        <label>
                            <input type="radio" value="Tổ chức" name="typeHirer" {...register('typeHirer')} />
                            <span className="text-sm ml-1">Tổ chức</span>
                        </label>
                    </div>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.typeHirer?.message}</p>
                </div>
            </div>
            <Address props={[register, errors]} />
            <div>
                <h5 className="text-lg font-bold text-[#222] mt-2">Nội dung đăng tuyển</h5>
                <InputField
                    register={register}
                    placeholder="Số lượng tuyển dụng"
                    name="numOfRecruitment"
                    error={errors.numOfRecruitment?.message}
                />
                <InputField register={register} placeholder="Ngành nghề" name="career" error={errors.career?.message} />
                <InputField
                    register={register}
                    placeholder="Hình thức trả lương"
                    name="pay"
                    error={errors.pay?.message}
                />

                <div className="flex gap-4">
                    <InputField
                        register={register}
                        placeholder="Lương tối thiểu"
                        name="minSalary"
                        error={errors.minSalary?.message}
                    />
                    <InputField
                        register={register}
                        placeholder="Lương tối đa"
                        name="maxSalary"
                        error={errors.maxSalary?.message}
                    />
                </div>
            </div>
            <Title
                props={[register, errors]}
                placeholder="Mô tả chi tiết một số đặc điểm nhận diện của công ty tuyển dụng:
                        - Tên công ty, địa chỉ công ty, hình thức và mặt hàng kinh doanh.
                        - Mô tả chi tiết về vị trí, công việc, nơi làm, giờ làm
                        - Yêu cầu chi tiết về kỹ năng, bằng cấp nếu có
                        - Phụ cấp khác ngoài lương"
            />
            <SubmitBtn />
            <ToastContainer autoClose={1000} />
            {loading && <SpinLoading />}
        </form>
    );
}

export default Job;
