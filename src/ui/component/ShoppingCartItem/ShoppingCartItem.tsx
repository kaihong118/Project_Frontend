import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useEffect, useState} from "react";
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
import {PatchCartItemData} from "../../../data/dto/PatchCartItemData.ts";

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
    cartItemBase: GetCartItemData
}

export default function ShoppingCartItem (props: Props) {
    const [cartItem, setCartItem] = useState<PatchCartItemData | undefined>(undefined)
    const [warningText, setWarningText] = useState<string>("")
    const [quantity, setQuantity] = useState<number>(1)

    const handlePlusButton = async () => {
        if(cartItem && (quantity + 1) <= props.cartItemBase.stock) {
            setQuantity((state) => (state + 1));

            const responseData = await CartItemApi.patchCartItem(cartItem.pid, quantity);
            setCartItem(responseData);
        }
        else {
            setWarningText("Stock Not Enough");
        }
    }

    const handleMinusButton = async () => {
        if(cartItem && (quantity - 1) > 0) {
            setQuantity((state) => (state - 1));

            const responseData = await CartItemApi.patchCartItem(cartItem.pid, quantity);
            setCartItem(responseData);
            setWarningText("");
        }
        else {
            deleteCartItem();
        }
    }

    const deleteCartItem = async () => {
        await CartItemApi.deleteCartItem(cartItem?.pid)
        setCartItem(undefined);
    }

    const renderCartItem =() => {
        if(cartItem) {
            return <>
                <div className="card mb-4 border-5 rounded-5">
                    <div className="card-body p-4 bg-white rounded-5">
                        <div className="row d-flex justify-content-between align-items-center bg-white">
                            <div className="col-md-2 col-lg-2 col-xl-2 bg-white">
                                {cartItem?.pid && <img
                                    src={productPhotoMapping[cartItem.pid]}
                                    className="img-fluid rounded-3 bg-transparent" alt="product image"/>}
                            </div>
                            <div className="col-md-3 col-lg- col-xl-3 bg-white">
                                {cartItem?.name && <p className="lead fw-normal mb-2 bg-white fw-bold">{cartItem.name}</p>}
                            </div>

                            <div className="col-md-3 col-lg-3 col-xl-2 d-flex bg-white">
                                <Button
                                    className="border-0 w-25 fw-bold fs-3 d-flex justify-content-center align-items-center"
                                    variant="outline-secondary"
                                    onClick={handleMinusButton}>-</Button>

                                {cartItem?.cart_quantity
                                    && <span className={"count d-flex justify-content-center align-items-center bg-transparent w-50 fw-bold"}>{quantity}</span>}

                                <Button
                                    className="border-0 w-25 fw-bold fs-3 d-flex justify-content-center align-items-center"
                                    variant="outline-secondary"
                                    onClick={handlePlusButton}>+</Button>
                            </div>
                            <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 bg-white">
                                <div className="bg-white h-50">
                                    {cartItem.price &&
                                        <div className="h5 mb-0 bg-white fw-bold w-100">
                                            {`HK$${cartItem.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                                        </div>}
                                </div>

                            </div>

                            <div className="col-md-1 col-lg-1 col-xl-1 text-end bg-white">
                                <FontAwesomeIcon
                                    className="trash-bin bg-white"
                                    icon={faTrash} size="xl"
                                    style={{color: "#ff0000"}}
                                    onClick={deleteCartItem}/>
                            </div>
                            <div className="text-end fw-bold me-5 pe-2 bg-transparent text-danger">{warningText}</div>
                        </div>
                    </div>
                </div>

                <div className="h5 bg-white fw-bold text-end me-5 mb-3 text-success">
                    {`Subtotal: HK$${(cartItem.price * quantity).toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                </div>
            </>
        }
    }

    useEffect(() => {
        setCartItem(props.cartItemBase);
        setQuantity(props.cartItemBase.cart_quantity)
    },[])

    return (
        <>
            {renderCartItem()}
        </>
    )
}