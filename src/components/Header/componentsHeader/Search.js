import { SearchIcon } from '../../../access/svg/svg';
function Search() {
    return (
        <div className="w-full flex lg:w-2/3 bg-white rounded justify-between items-center duration-200">
            <input
                className="h-9 bg-white rounded text-[#222222] text-sm pr-9 pl-[10px] grow"
                placeholder="Tìm kiếm trên Chợ Tốt"
            ></input>
            <div className=" text-white bg-[#ff8800] py-[7px] px-4 mx-1 rounded cursor-pointer">
                <SearchIcon />
            </div>
        </div>
    );
}
export default Search;
