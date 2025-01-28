import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { SignUp } from "../Components/SignUp";
import { SignIn } from "../Components/SignIn";
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
    }
])
export default router