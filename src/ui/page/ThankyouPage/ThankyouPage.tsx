import {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";

export default function ThankyouPage() {
    const [count, setCount] = useState<number>(5);
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            setCount((state) => (state) - 1);

            if(count === 0) {
                navigate("/");
            }
        },1000)
    },[count])

    return (
        <>
            <div className="vh-100">
                <div className=" h-25 d-flex justify-content-center align-items-center h1">
                    THANK YOU FOR YOUR PURCHASE!
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://media.tenor.com/cy4Ce99s0LEAAAAd/godzilla.gif"
                         alt="Godzilla GIF"/>
                </div>
                <div>
                    <div className=" h-25 d-flex justify-content-center align-items-center h1 mt-3">
                        We will return to Home Page in {count} sec
                    </div>
                </div>
            </div>
        </>
    )
}