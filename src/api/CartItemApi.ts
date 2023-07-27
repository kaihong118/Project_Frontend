import axios from "axios";
import {AddCartItemData} from "../data/dto/AddCartItemData.ts";
import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import {GetCartItemData} from "../data/dto/GetCartItemData.ts";
import getEnvConfig from "../Config/EnvConfig.ts";

const baseUrl = getEnvConfig().baseUrl;

export const addCartItem = async (productId: number, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken) {
            const response = await axios.put<AddCartItemData>(`${baseUrl}/cart/${productId}/${quantity}`, {}, { headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const getCartItem = async () => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken()

        if(accessToken) {
            const response = await axios.get<GetCartItemData[]>(`${baseUrl}/cart`, {headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const patchCartItem = async (productId: number, quantity: number) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken()

        if(accessToken) {
            const response = await axios.patch<GetCartItemData>(`${baseUrl}/cart/${productId}/${quantity}`, {},{headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const deleteCartItem = async (productId: number | undefined) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken()

        if(accessToken) {
            const response = await axios.delete<GetCartItemData>(`${baseUrl}/cart/${productId}`,{headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}