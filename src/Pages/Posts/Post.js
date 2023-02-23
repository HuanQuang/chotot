import { PostCameraIcon, PostPlusIcon } from '../../access/svg/svg';
import { categoryPost } from '../../utils/constants/Constant';
import { PostCategory } from '../../access/image/Image';
import BdsHtml from './Form/Bds';
import Xeco from './Form/Xeco';
import Dientu from './Form/Dientu';
import Job from './Form/Vieclam';
import Pet from './Form/Pet';
import Food from './Form/Food';
import Machine from './Form/Machine';
import Dogiadung from './Form/Dogiadung';
import Mevabe from './Form/Mevabe';
import Fashion from './Form/Fashion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
function Post() {
    const [valueCategory, setValueCategory] = useState();
    const [img, setImg] = useState();
    const handleImage = (e) => {
        const file = e.target.files;
        const readers = [];
        for (let i = 0; i < file.length; i++) {
            const render = new FileReader();
            render.readAsDataURL(file[i]);
            render.onloadend = () => {
                readers.push(render.result);
            };
        }
        setImg(readers);
    };
    let indexX;
    switch (valueCategory) {
        case 1:
            indexX = <BdsHtml onImage={img} />;
            break;
        case 2:
            indexX = <Xeco onImage={img} />;
            break;
        case 3:
            indexX = <Dientu onImage={img} />;
            break;
        case 4:
            indexX = <Job onImage={img} />;
            break;
        case 5:
            indexX = <Pet onImage={img} />;
            break;
        case 6:
            indexX = <Food onImage={img} />;
            break;
        case 7:
            indexX = <Machine onImage={img} />;
            break;
        case 8:
            indexX = <Dogiadung onImage={img} />;
            break;
        case 9:
            indexX = <Mevabe onImage={img} />;
            break;
        case 10:
            indexX = <Fashion onImage={img} />;
            break;
        default:
    }
    const form = valueCategory ? (
        indexX
    ) : (
        <div className="w-full">
            <img src={PostCategory.empty} alt="" className="mt-16 w-full"></img>
            <h3 className="text-lg font-bold text-[#222] text-center my-2">ĐĂNG NHANH - BÁN GỌN</h3>
            <p className="mb-2 text-sm font-normal text-center">Chọn "danh mục đăng tin" để đăng tin</p>
        </div>
    );
    return (
        <div className="pt-4 px-[15%] pb-12">
            <div className="bg-[#fff] max-w-[960px] mb-5 flex">
                <div className="mt-8 px-4 w-1/3">
                    <h5 className="font-bold text-[#222] mb-2">Ảnh/ video sản phẩm</h5>
                    <p className="text-[#777] mb-3 text-sm">
                        Xem thêm về <Link className="text-[#2275d3] underline">Quy định đăng tin của Chợ Tốt</Link>
                    </p>
                    <div className="h-[225px] w-full rounded opacity-60 bg-[#f4f4f4]">
                        <label
                            for="imageInput"
                            className="cursor-pointer border-[2px] rounded border-dotted border-[#fe9900] w-full h-full flex items-center justify-center flex-col"
                        >
                            <input
                                type="file"
                                className="hidden"
                                id="imageInput"
                                accept={'image/*, image/*'}
                                multiple
                                onChange={handleImage}
                            ></input>
                            <div className="relative mb-3">
                                <PostCameraIcon />
                                <span className="absolute top-[-6px] right-[-10px]">
                                    <PostPlusIcon />
                                </span>
                            </div>
                            <p className="font-bold text-[#8c8c8c] text-[10px] p-[3px]">
                                Hình có kích thước tối thiểu 240x240
                            </p>
                        </label>
                    </div>
                </div>
                <div className="mt-8 px-3 w-2/3">
                    <select
                        className="bg-[#fff] w-full border-[#cacaca] h-12 rounded border-[1px] border-solid px-3 outline-none mb-6"
                        onChange={(e) => {
                            setValueCategory(Number(e.target.value));
                        }}
                    >
                        <option value={0}>
                            Danh Mục Tin Đăng <span className="text-[red]">*</span>
                        </option>
                        {categoryPost.map((item) => {
                            return (
                                <option className="" key={item.value} value={item.value}>
                                    <div>{item.title}</div>
                                </option>
                            );
                        })}
                    </select>
                    {form}
                </div>
            </div>
        </div>
    );
}

export default Post;
