function InputField({ register, placeholder, name, error, type }) {
    return (
        <div className="mb-3">
            <input
                className="text-sm text-[#222] w-full h-12 rounded border-[1px] border-solid border-[#c0c0c0] bg-[#fff] px-3"
                type={type || 'text'}
                placeholder={placeholder}
                {...register(name)}
            ></input>
            <p className="text-[#ff1717] text-xs mt-1">{error}</p>
        </div>
    );
}

export default InputField;
