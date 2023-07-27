import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import {Form, Spinner} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";
import {faCartShopping} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {loginUserContext} from "../../../App.tsx";
import React, {useContext, useEffect, useState} from "react";
import * as FirebaseAuthService from "../../../authService/FirebaseAuthService.ts"
import * as ProductApi from "../../../api/ProductApi.ts"
import Dropdown from 'react-bootstrap/Dropdown';
import {ProductListData} from "../../../data/dto/ProductListData.ts";

export default function NavBar () {
    const loginUser = useContext(loginUserContext)
    const navigate = useNavigate();
    const [productList, setProductList] = useState<ProductListData[] | undefined>(undefined);
    const [searchText, setSearchText] = useState<string>("")

    const navigateLoginPage = () => {
        navigate("/login")
    }

    const navigateCartPage = () => {
        if(loginUser) {
            navigate("/cart")
        }
        else {
            navigate("/login")
        }
    }

    const handleLogout = async () => {
        await FirebaseAuthService.handleSignOut();
        navigate("/")
    }

    const renderLoginContext = () => {
        if(loginUser) {
            return <Nav.Link
                eventKey="link-1"
                className="me-3"
                onClick={handleLogout}>
                Sign Out
            </Nav.Link>
        }
        else if(loginUser === null){
            return <Nav.Link
                eventKey="link-1"
                className="me-3"
                onClick={navigateLoginPage}>
                Sign in
            </Nav.Link>
        }
        else {
            return <Spinner
                className="ps-3 pe-3"
                animation="grow"/>
        }
    }

    const handleSearchOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    }

    const handleSearchOnClick = async () => {
        setProductList([]);
        const responseData = await ProductApi.getProductBySearchText(searchText);
        setProductList(responseData);
        renderSearchList();
    }

    const renderSearchList = () => {
        if(productList) {
            return productList.map((product) => {
                return <Dropdown.Item key={product.pid} onClick={() => (navigate(`/product/${product.pid}`))}>{product.name}</Dropdown.Item>
            })
        }
    }

    useEffect(() => {
        renderSearchList()
    },[productList])

    return (
        <>
            <Navbar bg="black" data-bs-theme="dark" >
                <Container fluid
                           className="bg-transparent">
                    <Link to={"/"}
                          className="bg-transparent text-decoration-none">
                        <Navbar.Brand
                            className="bg-transparent">
                            Monster Universe
                        </Navbar.Brand>
                    </Link>

                        <Nav
                            className="bg-transparent me-auto">
                            <Link to={"/"}
                                  className="bg-transparent text-decoration-none text-white">
                            Home
                            </Link>
                        </Nav>


                    <Form
                        className="d-flex justify-content-center bg-transparent">
                        <label></label>
                        <input className="form-control me-3"
                               list="datalistOptions"
                               placeholder="Type to search..."
                               value={searchText}
                               onChange={handleSearchOnChange}/>
                        <Dropdown
                            className="rounded-5"
                            onClick={handleSearchOnClick}>
                            <Dropdown.Toggle
                                variant="dark">
                                Search Now
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {renderSearchList()}
                            </Dropdown.Menu>
                        </Dropdown>
                    </Form>

                    <Nav
                        className="justify-content-end">
                        <Nav.Item className="d-flex justify-content-center align-items-center bg-black">
                            <Nav.Link className="ms-5" onClick={navigateCartPage}>
                                <FontAwesomeIcon className={"shopping-cart-icon bg-transparent"} icon={faCartShopping} style={{color: "#ffffff"}} />
                            </Nav.Link>
                            {renderLoginContext()}
                        </Nav.Item>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}