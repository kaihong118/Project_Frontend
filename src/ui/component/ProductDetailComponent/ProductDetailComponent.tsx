import Container from "react-bootstrap/Container";
import {Button, Card, Col, Row} from "react-bootstrap";
import anguirus from "../../../assets/Anguirus.png";
import baragon from "../../../assets/Baragon.png"
import destoroyah from "../../../assets/Destoroyah.png";
import godzilla2016 from "../../../assets/Godzilla-4th Form-2016.png";
import godzilla1 from "../../../assets/Godzilla1998.png";
import godzilla2 from "../../../assets/Godzilla1994.png";
import ghidorah from "../../../assets/Ghidorah.png";
import kong from "../../../assets/Kong.png";
import mothra from "../../../assets/Mothra.png";
import rodan from "../../../assets/Rodan.png";
import monsterX from "../../../assets/Monster X.png"
import godzilla3 from "../../../assets/Godzilla-3rd Form-2016.png"
import godzilla4 from "../../../assets/Godzilla-2nd Form-2016.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {ProductDetailData} from "../../../data/dto/ProductDetailData.ts";
import React from "react";

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
    13 : godzilla4
}

type Props = {
    productDetailData: ProductDetailData | undefined
    quantity: number
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

export default function ProductDetailComponent(props: Props) {
    const renderStockQuantity = () => {
        if(props.productDetailData?.stock) {
            if(props.productDetailData.stock > 0) {
                return `Stock Quantity: ${props.productDetailData.stock}`;
            }
        }
        else {
            return "OUT OF STOCK"
        }
    }

    const renderQuantity = () => {
        if(props.productDetailData?.stock) {
            return <div className="bg-white" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <div className="bg-white" style={{ display: 'flex', alignItems: 'center' }}>
                    <Button
                        style={{borderRadius: "10px", width: "50px", height: "50px"}}
                        variant="dark"
                        onClick={handlePlusButton}>+</Button>
                    <span className={"count bg-white"} style={{marginLeft: "5px", marginRight: "5px"}}>{props.quantity}</span>
                    <Button
                        style={{borderRadius: "10px", width: "50px", height: "50px"}}
                        variant="dark"
                        onClick={handleMinusButton}>-</Button>
                </div>
                <div className="bg-white d-flex justify-content-center align-items-center">
                    <FontAwesomeIcon
                        className={"shopping-cart-icon bg-white"}
                        icon={faCartShopping}
                        style={{color: "#000000"}} />
                    <Button
                        variant="outline-dark ms-3">
                        Add to Cart
                    </Button>
                </div>
            </div>
        }
    }

    const handlePlusButton = () => {
        if(props.productDetailData?.stock && props.productDetailData.stock > props.quantity) {
            props.setQuantity((state) => (state + 1));
        }
    }

    const handleMinusButton = () => {
        if(props.quantity > 1) {
            props.setQuantity((state) => (state - 1));
        }
    }

    return (
        <>
            <div className={"product-page-title"}>
                Product Detail
            </div>
            <div style={{margin: '0 auto' }}>
                <Container style={{height: "600px", marginTop: "10vh"}}>
                    <Row>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            {props.productDetailData?.pid && <img src={productPhotoMapping[props.productDetailData.pid]} className="img-fluid" alt="Product"/>}
                        </Col>
                        <Col md={6} className="bg-white">
                            <div style={{margin: "30px 20px 30px 20px"}}>
                                <Card.Body style={{backgroundColor: "white"}}>
                                    <Card.Title
                                        style={{fontSize: "50px", fontWeight: "bolder", height: "120px", backgroundColor: "white"}}>
                                        {props.productDetailData?.name && props.productDetailData.name}
                                    </Card.Title>
                                    <Card.Text style={{fontSize: "25px", height: "70px", backgroundColor: "white"}}>
                                        {props.productDetailData?.description && props.productDetailData.description}
                                    </Card.Text>
                                    <Card.Text style={{fontSize: "25px", height: "40px", backgroundColor: "white", marginTop: "80px"}}>
                                        {renderStockQuantity()}
                                    </Card.Text>
                                    <Card.Text style={{fontSize: "18px", height: "50px", backgroundColor: "white"}}>
                                        {props.productDetailData?.price && `HK$${props.productDetailData.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                                    </Card.Text>
                                    {renderQuantity()}
                                </Card.Body>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}