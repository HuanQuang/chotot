import axios from 'axios';
import { useState, useEffect, memo } from 'react';
function Address() {
    const [listCity, setlistCity] = useState([]);
    const [cityName, setCityName] = useState();
    const [districtName, setDistrictName] = useState();
    const [wardName, setWardName] = useState();
    const [detail, setDetail] = useState();

    useEffect(() => {
        axios
            .get('https://raw.githubusercontent.com/kenzouno1/DiaGioiHanhChinhVN/master/data.json')
            .then((response) => setlistCity(response.data));
    }, []);
    const listDistrict = listCity.find((city) => city.Name === cityName)?.Districts;
    const listWards = listDistrict ? listDistrict.find((district) => district.Name === districtName)?.Wards : [];
    return (
        <div className="mb-4">
            <select
                className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3 mb-3 outline-none"
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

            <select
                className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3 mb-3 outline-none"
                onChange={(e) => setDistrictName(e.target.value)}
                required={true}
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

            <select
                className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3 mb-3 outline-none"
                onChange={(e) => {
                    setWardName(e.target.value);
                }}
                required={true}
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
            <input
                className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                type="text"
                placeholder="Địa chỉ căn hộ, toà nhà, khu dân cư"
                onChange={(e) => {
                    setDetail(e.target.value);
                }}
                required={true}
            ></input>
        </div>
    );
}

export default memo(Address);
