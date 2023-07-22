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
import {Item} from "../../../data/dto/TransactionDetailData.ts";

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
    transactionProduct: Item
}

export default function CheckoutTableRow({transactionProduct}: Props) {
    return (
        <>
            <tr>
                <th scope="row">
                    <div className="d-flex align-items-center bg-white">
                        <img src={productPhotoMapping[transactionProduct.product.pid]}
                             className="img-fluid rounded-3 bg-transparent"
                             style={{width: "120px"}} alt="Product"/>
                        <div className="ms-4 pt-3 align-items-center justify-content-center bg-white">
                            <p className="mb-2 bg-white">{transactionProduct.product.name}</p>
                        </div>
                    </div>
                </th>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>{transactionProduct.product.price.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                </td>
                <td className="align-middle">
                    <div className="d-flex flex-row bg-white">
                        <p className="mb-0 bg-white ps-2" style={{fontWeight: "500"}}>{transactionProduct.quantity}</p>
                    </div>
                </td>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>{transactionProduct.subtotal.toLocaleString(undefined,{style: "currency", currency: "HKD"})}</p>
                </td>
            </tr>
        </>
    )
}