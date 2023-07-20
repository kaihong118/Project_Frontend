import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Footer () {
    const handleScrollTop = () => {
        window.scrollTo(0,0);
    }

    return (
        <>
            <footer style={{position: 'fixed', bottom: 0, left: 0, width: '100%'}}>
                <Navbar
                    bg="black"
                    data-bs-theme="dark"
                    sticky={"top"} >
                    <Container fluid
                               className={"justify-content-center"}
                               style={{backgroundColor: "black"}}>
                        <Navbar.Brand
                            href="/"
                            style={{backgroundColor: "transparent", fontSize: "15px", fontWeight: "bolder"}}>
                            Monster Universe Limited
                        </Navbar.Brand>

                        <Nav
                            className="justify-content-end"
                            activeKey="/home" >
                            <Nav.Item style={{backgroundColor: "black"}}>
                                <Nav.Link eventKey="link-1">Contact Us</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav
                            className="justify-content-end"
                            activeKey="/home">
                            <Nav.Item style={{backgroundColor: "black"}}>
                                <Nav.Link eventKey="link-1" onClick={handleScrollTop}>Back to Top</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Container>
                </Navbar>
            </footer>
            <div style={{ marginBottom: '80px' }}></div>
        </>
    )
}