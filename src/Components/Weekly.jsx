import { NavBar } from "./Navigation";
import { Footer } from "../Pages/Footer";
import { useState, useEffect, useRef } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { Loader } from "./Loader";

import weekly from '../assets/Pictures/weeklypass.png'
import img from "../assets/Pictures/mlbb.webp"

export const Weekly = () => {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);
    const inputFieldRef = useRef(null);
    const [gameID, setGameID] = useState({ inGameID: " ", serverID: " " });
    const [data, setData] = useState({ pass: "1 time weekly", price: 125 });
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const weeklyPass = [
        { id: 1, pass: "1 time weekly", price: 125, description: "Completes 100 diamonds task", },
        { id: 2, pass: "2 times weekly", price: 250, description: "Completes 200 diamonds task" },
        { id: 3, pass: "3 times weekly", price: 375, description: "Completes 250 diamonds task" },
        { id: 4, pass: "Weekly pass + 172💎", price: 332, description: "Completes 250 diamonds task" },
    ];
    const HandleChange = (e) => {
        setGameID((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const HandleSubmit = (e) => {
        if (!gameID.inGameID.trim() || !gameID.serverID.trim()) {
            toast.error("Please fill up the In-Game ID and Server ID");
            return;
        }
        if (data.dias == 0) {
            toast.error("Please Select a diamond pack");
            return;

        }
        toast.success("Recharge successfull...")
        console.log(gameID.inGameID, gameID.serverID, data.price, data.pass);
    }
    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <NavBar />
                        <div className="grid grid-cols-2 justify-center mx-auto w-full p-2 md:flex md:items-center md:justify-center lg:flex lg:items-center lg:justify-center lg:gap-8 lg:p-8">
                            {weeklyPass.map((pass) => (
                                <div
                                    key={pass.id}
                                    className="bg-white shadow-gray-400 shadow-md rounded-xl p-5 border border-gray-300 w-45 h-60 scale-80 md:w-60 lg:w-60 hover:scale-110 transition-transform duration-100 ease-in-out cursor-pointer"
                                    onClick={() => {
                                        setData({ pass: pass.pass, price: pass.price });
                                        inputFieldRef.current?.scrollIntoView({ behavior: "smooth" });
                                    }}
                                >
                                    <img
                                        src={weekly}
                                        alt="img"
                                        className="w-36 h-20 object-cover rounded-lg mx-auto md:w-80 lg:w-80"
                                    />

                                    <h3 className="text-lg font-bold text-gray-900 ">{pass.pass}</h3>

                                    <p className="text-md text-gray-700 font-medium mt-1">
                                        Price: <span className="text-blue-600 font-semibold"> ₹{pass.price}</span>
                                    </p>

                                    <p className="text-gray-500 mt-2 text-sm leading-relaxed">
                                        {pass.description}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-col items-center gap-6 p-6 bg-gray-100 rounded-lg shadow-md">
                            <div ref={inputFieldRef} className="flex justify-center gap-4 p-5 ">
                                <img src={img} alt="icon" className="h-24 w-40 rounded-2xl object-cover md:h-24 md:w-24 lg:h-26 lg:w-26" />
                                <div className="flex flex-col gap-4 w-full max-w-md">
                                    <input
                                        type="tel"
                                        name="inGameID"
                                        onChange={HandleChange}
                                        placeholder="Enter GAME ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                    />
                                    <input
                                        type="tel"
                                        name="serverID"
                                        onChange={HandleChange}
                                        placeholder="Enter SERVER ID"
                                        className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-700"
                                    />
                                </div>
                            </div>
                            <div className="text-lg font-medium text-gray-800">
                                <p>
                                    <b className="text-gray-900">Total Price</b>:
                                    <span className="text-green-600">₹{data.price}</span>
                                </p>
                                <p>
                                    <b className="text-gray-900"> {data.pass} </b>
                                    <span className="text-blue-500"></span>
                                </p>
                            </div>
                            <div className="flex justify-center m-2">
                                <button className="bg-blue-600 text-white text-lg p-3 rounded-lg" onClick={HandleSubmit}>
                                    Recharge
                                </button>
                            </div>
                        </div>
                        <ToastContainer position="top-center" autoClose={2000} />

                        <Footer />
                    </>
                )
            }
        </>
    );
};
