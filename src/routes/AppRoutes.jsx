import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { About } from "../Pages/About";
import { Terms } from "../Pages/Term";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
    },
    {
        path: '/aboutPage',
        element: <About/>
    },
    {
        path:'/termsAndConditions', 
        element:<Terms/>
    }
])
export default router