import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

export default function NavBar () {
    const navigate = useNavigate();

    const navigateLoginPage = () => {
        navigate("/login")
    }

    const navigateCartPage = () => {
        navigate("/cart")
    }

    return (
        <>
            <Navbar bg="black" data-bs-theme="dark" >
                <Container fluid
                           style={{backgroundColor: "transparent"}}>
                    <Navbar.Brand
                        href="/"
                        style={{backgroundColor: "transparent"}}>
                        Monster Universe
                    </Navbar.Brand>
                    <Nav
                        className="me-auto"
                        style={{backgroundColor: "transparent"}}>
                        <Nav.Link href="/">Home</Nav.Link>
                    </Nav>

                    <Form
                        className="d-flex justify-content-center"
                        style={{backgroundColor: "transparent"}}>
                        <Form.Control
                            type="search"
                            placeholder="Prodact Name"
                            className="me-2"
                            aria-label="Search"
                        />
                        <Button variant="dark" style={{border: "0px", color: "White"}}>Search</Button>
                    </Form>

                    <Nav
                        className="justify-content-end">
                        <Nav.Item className="d-flex justify-content-center align-items-center" style={{backgroundColor: "black"}}>
                            <Nav.Link className="ms-5" onClick={navigateCartPage}>
                                <FontAwesomeIcon className={"shopping-cart-icon bg-transparent"} icon={faCartShopping} style={{color: "#ffffff"}} />
                            </Nav.Link>

                            <Nav.Link
                                eventKey="link-1"
                                className="me-3"
                                onClick={navigateLoginPage}>
                                Sign in
                            </Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}