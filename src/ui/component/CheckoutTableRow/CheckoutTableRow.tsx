import anguirus from "../../../assets/Anguirus.png";

export default function CheckoutTableRow() {
    return (
        <>
            <tr>
                <th scope="row">
                    <div className="d-flex align-items-center bg-white">
                        <img src={anguirus}
                             className="img-fluid rounded-3 bg-transparent"
                             style={{width: "120px"}} alt="Product"/>
                        <div className="ms-4 pt-3 align-items-center justify-content-center bg-white">
                            <p className="mb-2 bg-white">Product Name</p>
                        </div>
                    </div>
                </th>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>HK$1,000.00</p>
                </td>
                <td className="align-middle">
                    <div className="d-flex flex-row bg-white">
                        <p className="mb-0 bg-white ps-2" style={{fontWeight: "500"}}>2</p>
                    </div>
                </td>
                <td className="align-middle">
                    <p className="mb-0 bg-white" style={{fontWeight: "500"}}>HK$2,000.00</p>
                </td>
            </tr>
        </>
    )
}