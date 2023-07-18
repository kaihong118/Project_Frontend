import axios from "axios";
import {ProductListData} from "../data/dto/ProductListData.ts";
import {ProductDetailData} from "../data/dto/ProductDetailData.ts";

const baseUrl = "http://localhost:8080";

export const getAllProduct = async () => {
    try {
        const response = await axios.get<ProductListData[]>(`${baseUrl}/public/product`)
        return response.data;
    }
    catch(error) {
        console.error(error);
        throw error;
    }
}
export const getProductByPid = async (productId:string | undefined) => {
    try {
        const response = await axios.get<ProductDetailData>(`${baseUrl}/public/product/${productId}`);
        return response.data ;
    }
    catch(error) {
        console.error(error);
        throw error;
    }
}