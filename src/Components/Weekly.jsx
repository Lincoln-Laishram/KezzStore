import { NavBar } from "./Navigation";
import { Footer } from "../Pages/Footer";
import { useState, useEffect } from "react";
import weekly from '../assets/Pictures/weeklypass.png'
export const Weekly = () => {
    const [quantity, setQuantity] = useState(0);
    useEffect(() => {
                window.scrollTo(0, 0); 
            }, []);

    const weeklyPass = [
        { id: 1, pass: "1 time weekly" },
        { id: 2, pass: "2 times weekly" },
        { id: 3, pass: "3 times weekly" },
    ];
    const incrementIndex = () => setQuantity((prev) => (prev < weeklyPass.length - 1 ? prev + 1 : prev));
    const decrementIndex = () => setQuantity((prev) => (prev > 0 ? prev - 1 : prev));
    return (
        <>
            <NavBar />
            <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
                {/* Weekly Image */}
                <img src={weekly} alt="Weekly" className="w-32 h-32 object-cover rounded-lg lg:h-50 lg:w-50" />

                {/* Weekly Pass Selection */}
                <div className="flex items-center gap-4 bg-white p-4 rounded-lg shadow">
                    <button
                        onClick={decrementIndex}
                        className="px-4 py-4 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition"
                    >
                        ➖
                    </button>

                    {weeklyPass
                        .filter((_, i) => i === quantity)
                        .map((pass) => (
                            <div key={pass.id} className="text-lg font-semibold text-gray-800">
                                {pass.pass}
                            </div>
                        ))
                    }

                    <button
                        onClick={incrementIndex}
                        className="px-4 py-4 bg-gray-300 text-gray-700 rounded-full hover:bg-gray-400 transition"
                    >
                        ➕
                    </button>
                </div>

                {/* Price Display */}
                <div className="text-lg font-bold text-gray-900">
                    Price: <span className="text-green-800"> ₹{125 * (quantity + 1)}</span>
                </div>
                <div className="flex justify-center m-2">
                    <button className="bg-blue-600 text-white text-lg p-3 rounded-lg">
                        Recharge
                    </button>
                </div>
            </div>


            <Footer />
        </>
    );
};
