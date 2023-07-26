import Footer from "../../component/Footer/Footer.tsx";
import NavBar from "../../component/NavBar/NavBar.tsx";
import Button from 'react-bootstrap/Button';
import {Link} from "react-router-dom";

export default function ErrorPage () {
    return (
        <>
            <NavBar/>

            <div className="vh-100 d-flex justify-content-center align-items-center h1">
                <div>
                    Please return to previous page<br/>
                    <Link to="/">
                        <Button variant="warning">Back</Button>
                    </Link>
                </div>

                <img src="https://static.wikia.nocookie.net/73b98331-b95b-42a5-9025-b7b4519943d4/scale-to-width/370"
                     alt="Godzilla Gif" className="w-25"/>
            </div>


            <Footer/>
        </>
    )
}