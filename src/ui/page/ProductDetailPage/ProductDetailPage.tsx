// import productDetailMockData from "./productDetailResponse.json"
import NavBar from "../../component/NavBar/NavBar.tsx";
import Footer from "../../component/Footer/Footer.tsx";
import ProductDetailComponent from "../../component/ProductDetailComponent/ProductDetailComponent.tsx";
import {useEffect, useState} from "react";
import {ProductDetailData} from "../../../data/dto/ProductDetailData.ts";
import {useNavigate, useParams} from "react-router-dom";
import * as GetProductApi from "../../../api/ProductApi.ts"


export default function ProductDetailPage () {
    const[productDetailData, setProductDetailData] = useState<ProductDetailData | undefined>(undefined)
    const {productId} = useParams();
    const navigate = useNavigate();

    const fetchProductDetailData = async () => {
        try {
            setProductDetailData(undefined);

            const responseData = await GetProductApi.getProductByPid(productId)
            setProductDetailData(responseData)
        }
        catch(error) {
            navigate("/error")
        }
    }

    useEffect(() => {
        fetchProductDetailData()
    },[])

    return (
        <>
            <NavBar/>
            <ProductDetailComponent productDetailData={productDetailData}/>
            <Footer/>
        </>
    )
}