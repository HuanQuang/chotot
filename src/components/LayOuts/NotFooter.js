import Header from '../Header/Header';
function NotFooterLayOut({ children }) {
    return (
        <>
            <div className="min-h-screen">
                <Header />
                <div className="pt-[100px] bg-[#f1f1f1] h-screen">{children}</div>
            </div>
        </>
    );
}

export default NotFooterLayOut;
