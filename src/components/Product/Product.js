function Product({ props }) {
    console.log(props);
    return (
        <div className="w-1/5 p-3">
            <img className="w-full" src={props.src} alt="product"></img>
            <div className="">
                <div className="">
                    <div className="">{props.title}</div>
                    <i className="fa-solid fa-ellipsis-vertical"></i>
                </div>
                <div className="">{props.price}</div>
                <div className="">
                    <i className="fa-solid fa-map-pin"></i>
                    <span className="">{props.time}</span>
                    <span className="">{props.location}</span>
                </div>
            </div>
        </div>
    );
}

export default Product;
