import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import "./ShoppingCartPage.css"
import {useContext, useEffect, useState} from "react";
import {GetCartItemData} from "../../../data/dto/GetCartItemData.ts";
import * as CartItemApi from "../../../api/CartItemApi.ts"
import * as TransactionApi from "../../../api/TransactionApi.ts"
import axios from "axios";
import ShoppingCartItem from "../../component/ShoppingCartItem/ShoppingCartItem.tsx";
import {useNavigate} from "react-router-dom";
import {TransactionDetailData} from "../../../data/dto/TransactionDetailData.ts";
import {loginUserContext} from "../../../App.tsx";

export default function ShoppingCartPage () {
    const [cartItemList, setCartItemList] = useState<GetCartItemData[] | undefined>(undefined);
    const navigate = useNavigate();
    const loginUser = useContext(loginUserContext)

    const renderCartItem = () => {
        if(cartItemList && cartItemList.length > 0) {
            return cartItemList.map((cartItem) => (
                <ShoppingCartItem
                    key={cartItem.pid}
                    cartItem={cartItem}
                    cartItemList={cartItemList}
                    setCartItemList={setCartItemList}/>
            ))
        }
        else {
            return <div className=" h1 d-flex justify-content-center align-items-center bg-white opacity-50 user-select-none">
                Shopp Cart Empty
            </div>
        }
    }

    const renderProcessButton = () => {
        if(cartItemList && cartItemList.length > 0) {
            return <div className="d-flex justify-content-end bg-white mb-5">
                <button type="button"
                        className="btn btn-warning btn-lg"
                        onClick={handleCheckout}>Process to Pay</button>
            </div>
        }
        else {
            return <></>
        }
    }

    const handleCheckout = async () => {
        try {
            const transactionDetailData: TransactionDetailData | undefined = await TransactionApi.createTransaction()
            if(transactionDetailData) {
                navigate(`/checkout/${transactionDetailData.tid}`)
            }
        }
        catch (error) {
            navigate("/error")
        }
    }

    const renderTotal = () => {
        if(cartItemList) {
            return <div className="float-end bg-white">
                <p className="mb-0 me-5 d-flex align-items-center bg-white">
                    <span className="small text-muted me-2 bg-white">Order total:</span> <span
                    className="lead fw-normal bg-white">{calculateTotal().toLocaleString(undefined, {style: "currency", currency: "HKD"})}</span>
                </p>
            </div>
        }
        else {
            return <></>
        }
    }

    const calculateTotal = () => {
        if(cartItemList) {
            return cartItemList.reduce((accumulator, cartItem) => {
                return accumulator + cartItem.price * cartItem.cart_quantity
            },0);
        }
        else {
            return 0;
        }
    }

    const fetchCartItemData = async () => {
        setCartItemList([]);
        const responseData = await CartItemApi.getCartItem();
        setCartItemList(responseData);
    }

    useEffect ( () => {
        if(loginUser) {
            fetchCartItemData();
        }

        return () => {
            axios.CancelToken.source().cancel();
        }
    },[loginUser])

    return (
        <>
            <NavBar/>

            <section className="vh-100">
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col bg-white rounded-5 p-5">
                            <p className="bg-white"><span className="h2 bg-white">Shopping Cart</span></p>

                            {renderCartItem()}
                            <div className="card mb-5 border-0">
                                <div className="card-body p-4 bg-white">

                                    {renderTotal()}

                                </div>
                            </div>
                            {renderProcessButton()}

                        </div>
                    </div>
                </div>
            </section>

            <Footer/>
        </>
    )
}