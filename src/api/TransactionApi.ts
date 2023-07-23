import * as FirebaseAuthService from "../authService/FirebaseAuthService.ts"
import axios from "axios";
import {TransactionDetailData} from "../data/dto/TransactionDetailData.ts";
import {TransactionStatus} from "../data/dto/TransactionStatus.ts";

const baseUrl = "http://localhost:8080";

export const createTransaction = async () => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken) {
            const response = await axios.post<TransactionDetailData>(`${baseUrl}/transaction/prepare`, {}, { headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const getTransaction = async (transactionId: string | undefined) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken && transactionId) {
            const response = await axios.get<TransactionDetailData>(`${baseUrl}/transaction/${transactionId}`,{headers: {"Authorization" : `Bearer ${accessToken}`}})
            return response.data
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const updateTransaction = async (transactionId: string | undefined) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken && transactionId) {
            const response = await axios.patch<TransactionStatus>(`${baseUrl}/transaction/${transactionId}/pay`, {}, { headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

export const completeTransaction = async (transactionId: string | undefined) => {
    try {
        const accessToken = await FirebaseAuthService.getAccessToken();

        if(accessToken && transactionId) {
            const response = await axios.patch<TransactionDetailData>(`${baseUrl}/transaction/${transactionId}/finish`, {}, { headers: {"Authorization" : `Bearer ${accessToken}`} });
            return response.data;
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}

