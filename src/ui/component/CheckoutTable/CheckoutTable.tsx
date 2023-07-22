import CheckoutTableRow from "../CheckoutTableRow/CheckoutTableRow.tsx";

export default function CheckoutTable() {
    return (
        <>
            <thead>
            <tr>
                <th scope="col" className="h5">Shopping Bag</th>
                <th scope="col">Unit Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">Sub-Total</th>
            </tr>
            </thead>
            <tbody>
                <CheckoutTableRow/>
            </tbody>
        </>
    )
}