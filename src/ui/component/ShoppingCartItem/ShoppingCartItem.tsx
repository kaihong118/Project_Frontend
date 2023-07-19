import godzilla4 from "../../../assets/Godzilla-2nd Form-2016.png";
import {Button} from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash} from "@fortawesome/free-solid-svg-icons";
import {useState} from "react";

export default function ShoppingCartItem () {
    const [cartItemQuantity, setCartItemQuantity] = useState<number>(1)

    const handlePlusButton = () => {
        setCartItemQuantity((state) => (state + 1))
    }

    const handleMinusButton = () => {
        if(cartItemQuantity > 1) {
            setCartItemQuantity((state) => (state - 1))
        }
    }

    return (
        <>
            <div className="card mb-4 border-5 rounded-5">
                <div className="card-body p-4 bg-white rounded-5">
                    <div className="row d-flex justify-content-between align-items-center bg-white">
                        <div className="col-md-2 col-lg-2 col-xl-2 bg-white">
                            <img
                                src={godzilla4}
                                className="img-fluid rounded-3 bg-transparent" alt="product image"/>
                        </div>
                        <div className="col-md-3 col-lg- col-xl-3 bg-white">
                            <p className="lead fw-normal mb-2 bg-white fw-bold">Godzilla (2nd Form) 2016</p>
                        </div>
                        <div className="col-md-3 col-lg-3 col-xl-2 d-flex bg-white">
                            <Button
                                className="border-0 w-25 fw-bold fs-3"
                                variant="outline-secondary"
                                onClick={handlePlusButton}>+</Button>

                            <span className={"count d-flex justify-content-center align-items-center bg-transparent w-50 fw-bold"}>{cartItemQuantity}</span>

                            <Button
                                className="border-0 w-25 fw-bold fs-3"
                                variant="outline-secondary"
                                onClick={handleMinusButton}>-</Button>
                        </div>
                        <div className="col-md-3 col-lg-2 col-xl-2 offset-lg-1 bg-white">
                            <h5 className="mb-0 bg-white fw-bold">$499.00</h5>
                        </div>
                        <div className="col-md-1 col-lg-1 col-xl-1 text-end bg-white">
                            <FontAwesomeIcon className="trash-bin bg-white" icon={faTrash} size="xl" style={{color: "#ff0000"}} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}