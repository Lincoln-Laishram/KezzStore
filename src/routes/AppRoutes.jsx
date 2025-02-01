import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { SignUp } from "../Components/SignUp";
import { SignIn } from "../Components/SignIn";
import { Profile } from "../Components/Profile";
import { Products } from "../Pages/Products";
import { ProductDetails } from "../Pages/ProductDetails";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/sign_up',
        element: <SignUp/>
    },
    {
        path: '/sign_in',
        element: <SignIn/>
    },
    {
        path: '/user_profile',
        element: <Profile/>
    },
    {
        path: '/products',
        element: <Products/>
    },
    {
        path:'/details/:id',
        element:<ProductDetails/>
    }
])
export default router