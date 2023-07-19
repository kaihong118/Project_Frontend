import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import "./ShoppingCartPage.css"
import ShoppingCartItem from "../../component/ShoppingCartItem/ShoppingCartItem.tsx";

export default function ShoppingCartPage () {
    return (
        <>
            <NavBar/>
            <section className="h-100 p-3">
                <div className="container h-100 py-5 ">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-12 bg-white" style={{padding: "25px", borderRadius: "16px"}}>

                            <div className="d-flex justify-content-between align-items-center mb-4 bg-white">
                                <h3 className="fw-normal mb-0 text-black bg-white fw-bold">Shopping Cart</h3>
                            </div>

                            {Array.from({length:10}).map((_, index:number) => (
                                <ShoppingCartItem key={index}/>
                            ))}

                            <div className="card border-0">
                                <div className="card-body bg-white">
                                    <button type="button" className="btn btn-warning btn-block btn-lg">Proceed to Pay
                                    </button>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}