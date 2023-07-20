import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import "./ShoppingCartPage.css"
import ShoppingCartItem from "../../component/ShoppingCartItem/ShoppingCartItem.tsx";
import {useEffect, useState} from "react";
import {GetCartItemData} from "../../../data/dto/GetCartItemData.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts"

export default function ShoppingCartPage () {
    const [cartItemList, setCartItemList] = useState<GetCartItemData[] | undefined>(undefined);

    const renderCartItem = () => {
        if(cartItemList) {
            return cartItemList.map((value: GetCartItemData) => (
                <ShoppingCartItem
                    key={value.pid}
                    cartItemBase={value}/>
            ))
        }
        else {
            return <div className="fw-normal mb-0 text-black bg-white fw-bold h4 mt-5 mb-5">
                Empty Cart
            </div>
        }
    }

    const renderProceedToPay = () => {
        if(cartItemList) {
            return <div className="card border-0">
                <div className="card-body bg-white ps-0">
                    <button type="button" className="btn btn-warning btn-block btn-lg fw-bold">Proceed to Pay
                    </button>
                </div>
            </div>
        }
    }

    const fetchCartItemData = async () => {
        setCartItemList([]);
        const responseData = await CartItemApi.getCartItem();
        setCartItemList(responseData);
    }

    useEffect ( () => {
        fetchCartItemData();
    },[])

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
                            {renderCartItem()}
                            {renderProceedToPay()}
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}