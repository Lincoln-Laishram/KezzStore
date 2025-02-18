import { useEffect } from "react";
import { Diamonds } from "../Components/Diamonds"
export const DiamondPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>
            <Diamonds />
        </>
    )
}