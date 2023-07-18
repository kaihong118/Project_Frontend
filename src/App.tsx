import {createHashRouter, RouterProvider} from "react-router-dom";
import ProductListPage from "./ui/page/ProductListPage/ProductListPage.tsx";
import ProductDetailPage from "./ui/page/ProductDetailPage/ProductDetailPage.tsx";
import ErrorPage from "./ui/page/ErrorPage/ErrorPage.tsx";

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
        path: "/error",
        element: <ErrorPage/>
    }
    // {
    //     path: "/shoppingcart",
    //     element: <ShoppingCart/>
    // },
    // {
    //     path: "/login",
    //     element: <LoginPage/>
    // },
    // {
    //     path: "/checkout/:transactionId",
    //     element: <Checkout/>
    // },
    // {
    //     path: "/thankyou",
    //     element: <ThankYou/>
    // }
])

export default function App() {
    return (
        <>
            <RouterProvider router={router}/>
            {/*<ProductDetailPage/>*/}
        </>
    )
}