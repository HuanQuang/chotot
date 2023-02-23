import axios from 'axios';
import { useState, useEffect, memo } from 'react';
function Address({ props }) {
    const [listCity, setlistCity] = useState([]);
    const [cityName, setCityName] = useState();
    const [districtName, setDistrictName] = useState();
    const [register, errors] = props;
    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => setlistCity(response.data));
    }, []);
    const listDistrict = listCity.find((city) => city.Name === cityName)?.Districts;
    const listWards = listDistrict ? listDistrict.find((district) => district.Name === districtName)?.Wards : [];
    return (
        <div className="my-4">
            <h5 className="text-lg font-bold text-[#222] my-2">
                Địa chỉ <span className="text-[red]">*</span>
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
    );
}

export default memo(Address);
