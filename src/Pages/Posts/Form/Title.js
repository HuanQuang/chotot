function Title({ props, placeholder }) {
    const [register, errors] = props;
    return (
        <div>
            <div>
                <h5 className="text-lg font-bold text-[#222] my-4">Tiêu đề tin đăng và mô tả chi tiết</h5>
                <div className="mb-3">
                    <input
                        className=" text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                        type="text"
                        placeholder="Tiêu đề tin đăng"
                        {...register('title', { required: true, maxLength: 50 })}
                    ></input>
                    <p className="text-[#ff1717] text-xs mt-1">{errors.title?.message}</p>
                </div>

                <div className="relative">
                    <div className="absolute top-[11px] left-3 text-sm text-[#8c8c8c] h-8">
                        Mô tả chi tiết <span className="text-[red]">*</span>
                    </div>
                    <textarea
                        inputMode="text"
                        className=" text-sm text-[#222] w-full h-[190px] rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] pt-9 px-3 pb-1 outline-none"
                        type="text"
                        placeholder={placeholder}
                        {...register('descDetail')}
                    ></textarea>
                    <p className="text-[#ff1717] text-xs mb-3">{errors.descDetail?.message}</p>
                </div>
            </div>
        </div>
    );
}

export default Title;
