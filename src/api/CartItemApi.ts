import axios from "axios";
import {AddCartItemData} from "../data/dto/AddCartItemData.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"

const baseUrl = "http://localhost:8080";

export const addCartItem = async (productId: number, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken) {
            const response = await axios.put<AddCartItemData>(`${baseUrl}/cart/${productId}/${quantity}`, {}, { headers: {"Authorization" : `Bearer ${accessToken}`}});
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}