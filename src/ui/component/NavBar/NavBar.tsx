import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Button, Form} from "react-bootstrap";
import {useNavigate} from "react-router-dom";

export default function NavBar () {
    const navigate = useNavigate();

    const navigateLoginPage = () => {
        navigate("/login")
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
                        className="justify-content-end"
                        activeKey="/home">
                        <Nav.Item style={{backgroundColor: "black"}}>
                            <Nav.Link
                                eventKey="link-1"
                                style={{marginLeft: "90px", marginRight: "20px"}}
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