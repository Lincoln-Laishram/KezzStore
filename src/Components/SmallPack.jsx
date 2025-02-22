import img from "../assets/Pictures/mlbb.webp";
import { useState, useEffect, useRef } from "react";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import { database } from "../Config/Db";
import { NavBar } from "./Navigation";
import { Footer } from "../Pages/Footer";
import { Loader } from "./Loader";
export const SmallPack = () => {
    const inputFieldRef = useRef(null);
    const [dias, setDias] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({ price: 0, dias: 0 });
    const [filteredData, setFilteredData] = useState([]);
    const [gameID, setGameID] = useState({ inGameID: " ", serverID: " " });
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);

    useEffect(() => {
        const fetchDias = async () => {
            try {
                setLoading(true);
                const res = await database.listDocuments(
                    import.meta.env.VITE_APPWRITE_DATABASE_ID,
                    import.meta.env.VITE_COLLECTION_ID
                );
                setDias(res.documents || []);
            } catch (error) {
                console.error(error);
            }
            finally {
                setLoading(false);
            }
        };
        fetchDias();
    }, []);
    useEffect(() => {
        const diasData = dias.filter(element => element.Price < 86);
        setFilteredData(diasData);
    }, [dias]);

    const HandleChange = (e) => {
        setGameID((prev) => ({
            ...prev,
            [e.target.name]: e.target.value,
        }));
    };

    const HandleIncrement = () => {
        if(data.dias == 0){
            toast.error("Please Select a diamond pack");
            return;
        }
        setQuantity(prev => (prev < 3 ? prev + 1 : 3));
    };

    const HandleDecrement = () => {
        if(data.dias == 0){
            toast.error("Please Select a diamond pack");
            return;
        }
        setQuantity(prev => (prev > 1 ? prev - 1 : 1)); // Prevent going below 1
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
        console.log(gameID.inGameID, gameID.serverID);
    }

    return (
        <>
            <div>
                {
                    loading ? (
                        <Loader />
                    ) :
                        (
                            <>
                            <NavBar/> <br /> <br />
                                <div className="w-full p-6 mx-auto bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-300 shadow-lg sm:w-full md:w-[60%] lg:w-[60%]">
                                    <h1 className="text-xl m-2 font-semibold text-center">
                                        CHOOSE YOUR DIAMOND
                                    </h1>
                                    <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                        {filteredData.map((diamond, index) => (
                                            <li
                                                key={index}
                                                className="flex justify-center cursor-pointer"
                                                onClick={() => {
                                                    setData({ price: diamond.Price, dias: diamond.Dias });
                                                    inputFieldRef.current?.scrollIntoView({ behavior: "smooth" }); // ✅ Scroll to input field
                                                }}
                                            >
                                                <div className="w-24 p-3 bg-white border border-gray-300 shadow-md rounded-xl text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                                    <p className="text-lg font-semibold text-gray-800">
                                                        <span className="text-blue-500">💎</span>{diamond.Dias}
                                                    </p>
                                                    <div className="mt-2 bg-red-500 text-white font-bold py-1 rounded-md shadow-md">
                                                        ₹{diamond.Price}
                                                    </div>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                    {/* INPUT FIELD */}                                    
                                </div>
                                <div ref={inputFieldRef} className="flex justify-center gap-4 p-5 ">
                                        <div>
                                            <img src={img} alt="icon" className="h-24 w-40 rounded-2xl object-cover md:h-24 md:w-24 lg:h-26 lg:w-26" />
                                        </div>
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
                                    <div className="flex flex-col lg:flex-row items-center justify-between p-4 border border-gray-300 rounded-lg shadow-md bg-white w-full lg:w-[40%] mx-auto">
                                        {/* Product Info */}
                                        <div className="text-lg font-medium text-gray-800">
                                            <p>
                                                <b className="text-gray-900">Total Price</b>:
                                                <span className="text-green-600"> ₹{data.price * quantity}</span>
                                            </p>
                                            <p>
                                                <b className="text-gray-900">Diamonds</b>:
                                                <span className="text-blue-500"> 💎{data.dias * quantity}</span>
                                            </p>
                                        </div>

                                        {/* Counter */}
                                        <div className="flex items-center gap-4 bg-gray-100 p-3 rounded-lg shadow-sm w-36 justify-center mt-4 lg:mt-0">
                                            <button
                                                onClick={HandleDecrement}
                                                className="px-3 py-1 rounded-lg text-lg"
                                            >
                                                ➖
                                            </button>
                                            <span className="text-lg font-semibold">{quantity}/3</span>
                                            <button
                                                onClick={HandleIncrement}
                                                className="px-3 py-1  rounded-lg text-lg"
                                            >
                                                ➕
                                            </button>
                                        </div>
                                    </div>

                                    {/* Recharge Button */}
                                    <div className="flex justify-center m-8">
                                        <button className="bg-blue-600 text-white text-lg p-3 rounded-lg"
                                            onClick={HandleSubmit}
                                        >
                                            Recharge
                                        </button>
                                    </div>
                                <Footer />
                                <ToastContainer position="top-center" autoClose={2000} />
                            </>
                        )
                }
            </div>
        </>
    )
}