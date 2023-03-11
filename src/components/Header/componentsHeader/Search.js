import { useState } from 'react';
import { SearchIcon } from '../../../access/svg/svg';
import AxiosClient from '../../../utils/Api/Axios';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { isResult } from '../../../Features/SearchSlice';
function Search() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [searchKey, setSearchKey] = useState();
    const handleInputKey = (e) => {
        setSearchKey(e.target.value);
    };
    const handleSearch = async () => {
        await AxiosClient.get(`post/${searchKey.trim()}/result`)
            .then((res) => {
                if (!res.data) alert('Không có tin đăng phù hợp');
                dispatch(isResult(res.data));
            })
            .catch((err) => console.log(err));
        navigate(`/search=${searchKey}`);
    };

    return (
        <div className="w-full flex lg:w-2/3 bg-white rounded justify-between items-center duration-200">
            <input
                onChange={handleInputKey}
                className="h-9 bg-white rounded text-[#222222] text-sm pr-9 pl-[10px] grow"
                placeholder="Tìm kiếm trên Chợ Tốt"
            ></input>
            <div className=" text-white bg-[#ff8800] py-[7px] px-4 mx-1 rounded cursor-pointer" onClick={handleSearch}>
                <SearchIcon />
            </div>
        </div>
    );
}
export default Search;
