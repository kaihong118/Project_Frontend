import {ProductListData} from "../../../data/dto/ProductListData.ts";
import "./ProductListPage.css"
import { Row} from "react-bootstrap";
import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import ProductListCard from "../../component/ProductListCard/ProductListCard.tsx";
import ProductListCardLoading from "../../component/ProductListCardLoading/ProductListCardLoading.tsx";
import {useEffect, useState} from "react";
import * as GetProductApi from "../../../api/ProductApi.ts"
import axios from "axios";
import {useNavigate} from "react-router-dom";
import CarouselSlide from "../../component/CarouselSlide/CarouselSlide.tsx";

export default function ProductListPage () {
    const[productListData, setProductListData] = useState<ProductListData[]>([])
    const navigate = useNavigate();


    const renderProductCard = () => {
        if(productListData.length !== 0) {
            return productListData.map((value) => (
                <ProductListCard
                    key={value.pid}
                    productData={value}/>
            ))
        }
        else {
            return Array.from({length: 15}).map((_, index) => (<ProductListCardLoading key={index}/>))
        }
    }

    const fetchProductListData = async () => {
        setProductListData([]);
        const productDetailResponse = await GetProductApi.getAllProduct();
        setTimeout(() => {
            try {
                setProductListData(productDetailResponse ?? []);
            }
            catch(error) {
                navigate("/error")
            }
        }, 1500)
    }

    useEffect(() => {
        fetchProductListData();
        return () => {
            axios.CancelToken.source().cancel();
        }
    },[])

    return (
        <>
            <NavBar/>
            <CarouselSlide/>
            <div className={"product-page-title"}>
                Product(s)
            </div>
            <Row xs={1} md={3} className="g-4 justify-content-md-center" style={{marginTop: "0px", paddingBottom: "10px"}}>
                {renderProductCard()}
            </Row>
            <Footer/>
        </>
    )
}