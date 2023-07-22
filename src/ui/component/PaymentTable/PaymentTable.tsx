import {TransactionDetailData} from "../../../data/dto/TransactionDetailData.ts";

type Props = {
    transactionDetailData: TransactionDetailData | undefined
}

export default function PaymentTable({transactionDetailData}:Props) {
    const calculateTotal = () => {
        if(transactionDetailData) {
            return transactionDetailData.items.reduce((accumulator, value) => {
                return accumulator + value.subtotal
            },0);
        }
        else {
            return 0;
        }
    }

    return (
        <>
            <div className="card shadow-2-strong mb-5 mb-lg-0 border-0" style={{borderRadius: "16px"}}>
                <div className="card-body p-4 bg-white">

                    <div className="row">
                        <div className="col-md-6 col-lg-4 col-xl-3 mb-4 mb-md-0 bg-white">
                            <form>
                                <div className="d-flex flex-row pb-3 bg-white">
                                    <div className="d-flex align-items-center pe-2 bg-white">
                                        <input className="form-check-input" type="radio"
                                               name="radioNoLabel"
                                               value=""/>
                                    </div>
                                    <div className="rounded border w-100 p-3 bg-white">
                                        <p className="d-flex align-items-center mb-0 bg-white">
                                            <i className="fab fa-cc-mastercard fa-2x text-dark pe-2"></i>Credit
                                            Card
                                        </p>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6 col-lg-4 col-xl-6">
                            <div className="row">
                                <div className="col-12 col-xl-6 bg-white">
                                    <div className="form-outline mb-4 mb-xl-5 bg-white">
                                        <input type="text" id="typeName"
                                               className="form-control form-control-lg"
                                               style={{fontSize: "18px"}}
                                               placeholder="Full Name"
                                               size={17}/>
                                        <label className="form-label bg-white mt-2 ps-3" htmlFor="typeName">Name on
                                            card</label>
                                    </div>

                                    <div className="form-outline mb-4 mb-xl-5 bg-white">
                                        <input type="text" id="typeExp"
                                               className="form-control form-control-lg"
                                               style={{fontSize: "18px"}}
                                               placeholder="MM/YY"
                                               size={7} minLength={7} maxLength={7}/>
                                        <label className="form-label bg-white mt-2 ps-3"
                                               htmlFor="typeExp">Expiration</label>
                                    </div>
                                </div>
                                <div className="col-12 col-xl-6 bg-white">
                                    <div className="form-outline mb-4 mb-xl-5 bg-white">
                                        <input type="text"
                                               className="form-control form-control-lg" size={17}
                                               placeholder="1111 2222 3333 4444" minLength={19}
                                               style={{fontSize: "18px"}}
                                               maxLength={19}/>
                                        <label className="form-label bg-white mt-2 ps-3" htmlFor="typeText">Card
                                            Number</label>
                                    </div>

                                    <div className="form-outline mb-4 mb-xl-5 bg-white">
                                        <input type="password"
                                               className="form-control form-control-lg"
                                               placeholder="&#9679;&#9679;&#9679;"
                                               style={{fontSize: "18px"}}
                                               size={1}
                                               minLength={3} maxLength={3}/>
                                        <label className="form-label bg-white mt-2 ps-3" htmlFor="typeText">Cvv</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 col-xl-3 bg-white">
                            <div className="d-flex justify-content-between bg-white" style={{fontWeight: "500"}}>
                                <p className="mb-2 bg-white">Subtotal</p>
                                <p className="mb-2 bg-white">{calculateTotal().toLocaleString()}</p>
                            </div>

                            <hr className="my-4"/>

                            <div className="d-flex justify-content-between mb-4 bg-white"
                                 style={{fontWeight: "500"}}>
                                <p className="mb-2 bg-white">Total</p>
                                <p className="mb-2 bg-white">{calculateTotal().toLocaleString()}</p>
                            </div>

                            <button type="button" className="btn btn-primary btn-block btn-lg mt-5">
                                <div className="d-flex justify-content-between bg-transparent">
                                    <span className="bg-transparent">Checkout Here</span>
                                </div>
                            </button>

                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}