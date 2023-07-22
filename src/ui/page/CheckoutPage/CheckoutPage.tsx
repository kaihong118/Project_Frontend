import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import CheckoutTable from "../../component/CheckoutTable/CheckoutTable.tsx";
import PaymentTable from "../../component/PaymentTable/PaymentTable.tsx";

export default function CheckoutPage() {
    return (
        <>
            <NavBar/>
            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col bg-white p-5 rounded-5">

                            <div className="table-responsive bg-white">
                                <table className="table">
                                    <CheckoutTable/>
                                </table>
                            </div>
                            <PaymentTable/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}