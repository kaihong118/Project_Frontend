import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";

export default function ThankyouPage() {
    return (
        <>
            <NavBar/>

            <div className="vh-100">
                <div className=" h-25 d-flex justify-content-center align-items-center h1">
                    THANK YOU FOR YOUR PURCHASE!
                </div>
                <div className="d-flex justify-content-center align-items-center">
                    <img src="https://media.tenor.com/cy4Ce99s0LEAAAAd/godzilla.gif"
                         alt="Godzilla GIF"/>
                </div>

            </div>

            <Footer/>
        </>
    )
}