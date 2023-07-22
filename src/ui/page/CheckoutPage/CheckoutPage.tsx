import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import CheckoutTable from "../../component/CheckoutTable/CheckoutTable.tsx";
import PaymentTable from "../../component/PaymentTable/PaymentTable.tsx";
import {useEffect, useState} from "react";
import {TransactionDetailData} from "../../../data/dto/TransactionDetailData.ts";
import * as TransactionApi from "../../../api/TransactionApi.ts";
import {useParams} from "react-router-dom";


export default function CheckoutPage() {
    const [transactionDetailData, setTransactionDetailData] = useState<TransactionDetailData | undefined>(undefined);
    const {transactionId} = useParams();

    const fetchTransactionDetailData = async () => {
        setTransactionDetailData(undefined);
        const responseData = await TransactionApi.getTransaction(transactionId);
        setTransactionDetailData(responseData);
    }

    useEffect(() => {
        setTimeout(() => {
            fetchTransactionDetailData()
        },3000)
    },[])

    return (
        <>
            <NavBar/>
            <section className="h-100 h-custom">
                <div className="container h-100 py-5">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col bg-white p-5 rounded-5">

                            <div className="table-responsive bg-white">
                                <table className="table">
                                    <CheckoutTable
                                        transactionDetailData={transactionDetailData}/>
                                </table>
                            </div>
                            <PaymentTable
                                transactionDetailData={transactionDetailData}/>
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </>
    )
}