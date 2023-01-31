function Title({ placeholder }) {
    return (
        <div>
            <h5 className="text-lg font-bold text-[#222] my-4">Tiêu đề tin đăng và mô tả chi tiết</h5>
            <input
                className="mb-3 text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                type="text"
                placeholder="Tiêu đề tin đăng"
            ></input>
            <div className="relative">
                <div className="absolute top-[11px] left-3 text-sm text-[#8c8c8c] h-8">
                    Mô tả chi tiết <span className="text-[red]">*</span>
                </div>
                <textarea
                    inputMode="text"
                    className="mb-3 text-sm text-[#222] w-full h-[190px] rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] pt-9 px-3 pb-1 outline-none"
                    type="text"
                    placeholder={placeholder}
                ></textarea>
            </div>
        </div>
    );
}

export default Title;
