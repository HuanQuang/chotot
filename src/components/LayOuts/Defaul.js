import Header from '../Header/Header';
function LayOutDefaul({ children }) {
    return (
        <>
            <div className="">
                <Header />
                <div className="pt-[100px] background">{children}</div>
            </div>
        </>
    );
}

export default LayOutDefaul;
