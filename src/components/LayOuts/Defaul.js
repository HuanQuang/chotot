import Header from '../Header/Header';
import Footer from '../Footer/Footer';
function LayOutDefaul({ children }) {
    return (
        <>
            <div className="">
                <Header />
                <div className="pt-[100px] ">{children}</div>
                <Footer />
            </div>
        </>
    );
}

export default LayOutDefaul;
