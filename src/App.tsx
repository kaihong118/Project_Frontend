import {createHashRouter, RouterProvider} from "react-router-dom";
import ProductListPage from "./ui/page/ProductListPage/ProductListPage.tsx";
import ProductDetailPage from "./ui/page/ProductDetailPage/ProductDetailPage.tsx";
import ErrorPage from "./ui/page/ErrorPage/ErrorPage.tsx";
import LoginPage from "./ui/page/LoginPage/LoginPage.tsx";
import ShoppingCartPage from "./ui/page/ShoppingCartPage/ShoppingCartPage.tsx";
import {createContext, useEffect, useState} from "react";
import {UserData} from "./data/UserData.ts";
import * as FirebaseAuthService from "./authService/FirebaseAuthService.ts"
import CheckoutPage from "./ui/page/CheckoutPage/CheckoutPage.tsx";
import ThankyouPage from "./ui/page/ThankyouPage/ThankyouPage.tsx";

const router = createHashRouter([
    {
        path: "/",
        element: <ProductListPage/>
    },
    {
        path: "/product/:productId",
        element: <ProductDetailPage/>
    },
    {
        path: "/cart",
        element: <ShoppingCartPage/>
    },
    {
        path: "/login",
        element: <LoginPage/>
    },
    {
        path: "/checkout/:transactionId",
        element: <CheckoutPage/>
    },
    {
        path: "/thankyou",
        element: <ThankyouPage/>
    },
    {
        path: "/error",
        element: <ErrorPage/>
    },
    {
        path: "*",
        element: <ProductListPage/>
    }
])

export const loginUserContext = createContext<UserData | null | undefined>(undefined);

export default function App() {
    const [loginUser, setLoginUser] = useState<UserData | null | undefined>(undefined);

    useEffect(() => {
        FirebaseAuthService.handleOnAuthStateChanged(setLoginUser)
    },[])

    return (
        <>
            <loginUserContext.Provider value={loginUser}>
                <RouterProvider router={router}/>
            </loginUserContext.Provider>
        </>
    )
}