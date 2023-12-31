import {Card, Col} from "react-bootstrap";
import {ProductListData} from "../../../data/dto/ProductListData.ts";

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
import gigan from "../../../assets/Gigan.png"
import keizerGhidorah from "../../../assets/Keizer Ghidorah.png"
import orga from "../../../assets/Orga.png"
import {useNavigate} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell} from "@fortawesome/free-solid-svg-icons";

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
    productData: ProductListData
}

export default function ProductListCard (props: Props) {
    const navigate = useNavigate();

    const productDetailNavigate = () => {
        navigate(`/product/${props.productData.pid}`)
    }

    return (
        <>
            <Col style={{width: "300px"}}>
                <Card style={{backgroundColor: "transparent", border: "0px"}}>
                    <Card.Img
                        className="card-image"
                        variant="top"
                        src={productPhotoMapping[props.productData.pid]}
                        onClick={productDetailNavigate} />
                    <Card.Body>
                        <Card.Title
                            className="product-title"
                            style={{fontWeight: "bolder"}}
                            onClick={productDetailNavigate}>
                            {props.productData.name}
                        </Card.Title>
                        <Card.Text style={{fontSize: "14px"}}>
                            {`HK$${props.productData.price.toLocaleString(undefined, {minimumFractionDigits: 2})}`}
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer className={"d-flex justify-content-between align-items-center"} style={{borderTop: "2px solid #666362", fontWeight: "bolder", color: "red", backgroundColor: "transparent"}}>
                        <div>
                            <FontAwesomeIcon icon={faBell} shake style={{color: "red", marginRight: "10px"}} />
                            Exclusive Item
                        </div>
                        <div style={{fontSize: "12px", fontWeight: "bolder", color: "black", textAlign: "right"}}>
                            {props.productData.has_stock ? "In-Stock" : "Out of Stock"}
                        </div>
                    </Card.Footer>
                </Card>
            </Col>
        </>
    )
}