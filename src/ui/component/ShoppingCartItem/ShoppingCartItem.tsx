import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import React, {useEffect, useState} from "react";
import {GetCartItemData} from "../../../data/dto/GetCartItemData.ts";
import anguirus from "../../../assets/Anguirus.png";
import baragon from "../../../assets/Baragon.png";
import destoroyah from "../../../assets/Destoroyah.png";
import godzilla2016 from "../../../assets/Godzilla-4th Form-2016.png";
import godzilla1 from "../../../assets/Godzilla1998.png";
import godzilla2 from "../../../assets/Godzilla1994.png";
import ghidorah from "../../../assets/Ghidorah.png";
import kong from "../../../assets/Kong.png";
import mothra from "../../../assets/Mothra.png";
import rodan from "../../../assets/Rodan.png";
import monsterX from "../../../assets/Monster X.png";
import godzilla3 from "../../../assets/Godzilla-3rd Form-2016.png";
import godzilla4 from "../../../assets/Godzilla-2nd Form-2016.png";
import keizerGhidorah from "../../../assets/Keizer Ghidorah.png";
import gigan from "../../../assets/Gigan.png";
import orga from "../../../assets/Orga.png";
import * as CartItemApi from "../../../api/CartItemApi.ts"

const productPhotoMapping: {[key: number]: string} = {
    1 : anguirus,
    2 : baragon,
    3 : destoroyah,
    4 : godzilla2016,
    5 : godzilla1,
    6 : godzilla2,
    7 : ghidorah,
    8 : kong,
    9 : mothra,
    10 : rodan,
    11 : monsterX,
    12 : godzilla3,
    13 : godzilla4,
    14: keizerGhidorah,
    15: gigan,
    16: orga
}

type Props = {
    cartItem: GetCartItemData | undefined
    cartItemList: GetCartItemData[]
    setCartItemList:  React.Dispatch<React.SetStateAction<GetCartItemData[] | undefined>>
}

export default function ShoppingCartItem ({cartItem, cartItemList, setCartItemList}: Props) {
    const [cartItemState, setCartItemState]= useState<GetCartItemData | undefined>(cartItem)
    const [quantity, setQuantity] = useState<number | undefined>(cartItem?.cart_quantity)
    const [warningText, setWarningText] = useState<string>("")

    const handlePlusButton = async () => {
        if(cartItem && quantity && quantity + 1 <= cartItem.stock) {
            cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity + 1);
            setQuantity((state) => (state && state + 1));
        }
        else {
            setWarningText("Stock Not Available");
        }
    }

    const handleMinusButton = async () => {
        if(cartItem && quantity && quantity - 1 > 0) {
            cartItem = await CartItemApi.patchCartItem(cartItem.pid, quantity - 1)
            setWarningText("")
            setQuantity((state) => (state && state - 1))
        }
        else  {
            await CartItemApi.deleteCartItem(cartItem?.pid);
            setCartItemState(undefined);
            setQuantity((state) => (state && state - 1))
        }
    }

    const handleDeleteButton = async () => {
        await CartItemApi.deleteCartItem(cartItem?.pid);
        setCartItemState(undefined);
        setQuantity(0)
    }

    const renderCartItem =() => {
        if(cartItemState) {
            return <>
                <div className="card mb-4 border-top-0 border-start-0 border-end-0 border-2 border-secondary">
                    <div className="card-body p-4 bg-white">

                        <div className="row align-items-center bg-white">
                            <div className="col-md-2 bg-white">
                                <img
                                    src={cartItem && productPhotoMapping[cartItem.pid]}
                                    className="img-fluid bg-white" alt="Generic placeholder image"/>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Name</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem?.name}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-3 pb-2 bg-white">Quantity</p>
                                    <div className="d-flex justify-content-center align-items-center bg-white">
                                        <Button
                                            className="border-0 p-2 fw-bold"
                                            variant="outline-secondary"
                                            onClick={handleMinusButton}>-</Button>
                                        <p className="lead fw-normal mb-0 ms-2 me-2 bg-white">{quantity}</p>
                                        <Button
                                            className="border-0 p-2 fw-bold"
                                            variant="outline-secondary"
                                            onClick={handlePlusButton}>+</Button>
                                    </div>

                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Price</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem?.price.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white">
                                    <p className="small text-muted mb-4 pb-2 bg-white">Sub-Total</p>
                                    <p className="lead fw-normal mb-0 bg-white">{cartItem && quantity && (cartItem.price * quantity).toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                                </div>
                            </div>

                            <div className="col-md-2 d-flex justify-content-center bg-white">
                                <div className="bg-white mt-5">
                                    <FontAwesomeIcon
                                        className="trash-bin bg-white"
                                        icon={faTrash} size="xl"
                                        style={{color: "#ff0000"}}
                                        onClick={handleDeleteButton}/>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className="text-end bg-white text-danger fw-bold">
                    {warningText}
                </div>
            </>
        }
    }

    const handleCartItemListUpdate = () => {
        if(cartItem) {
            const updatedCartItemList = cartItemList.map((value) => {
                if(value.pid === cartItem?.pid && cartItem) {
                    return {
                        ...value,
                        cart_quantity: quantity
                    }
                }
                else {
                    return value;
                }
            })
            setCartItemList(updatedCartItemList);
        }
    }

    useEffect(() => {
        handleCartItemListUpdate()
    },[quantity, cartItemState])

    return (
        <>
            {renderCartItem()}
        </>
    )
}