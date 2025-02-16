import img from "../assets/Pictures/mlbb.webp"
import { useState, useRef, useEffect } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { database } from "../Config/Db";
import weekly from '../assets/Pictures/weeklypass.png'
import { Loader } from "./Loader";
export const Diamonds = () => {
    const inputFieldRef = useRef(null); // ✅ Create a ref
    const [dias, setDias] = useState([]);
    const [small, setSmall] = useState([]);
    const [medium, setMedium] = useState([]);
    const [large, setLarge] = useState([]);
    const [loading, setLoading] = useState(false);

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
        const smallArr = [];
        const mediumArr = [];
        const largeArr = [];

        dias.forEach((element) => {
            if (element.Price < 86) {
                smallArr.push(element);
            } else if (element.Price < 1000) {
                mediumArr.push(element);
            } else {
                largeArr.push(element);
            }
        });

        setSmall(smallArr);
        setMedium(mediumArr);
        setLarge(largeArr);
    }, [dias]); // Runs when `dias` changes

    const [data, setData] = useState({ price: 0, dias: 0 });
    const [gameID, setGameID] = useState({ inGameID: " ", serverID: " " });
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
        console.log(gameID.inGameID, gameID.serverID);
    }

    return (
        <>
            {
                loading ? (
                    <Loader />
                ) : (
                    <>
                        <div className="w-full p-6 mx-auto bg-gradient-to-br from-gray-50 to-gray-200 border border-gray-300 shadow-lg sm:w-full">
                            <h1 className="text-2xl font-bold text-center border-b p-1">
                                SELECT YOUR PACK
                            </h1>
                            <br />
                            <h1 className="text-xl m-2 font-semibold">
                                SMALL PACK
                            </h1>
                            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                {small.map((diamond, index) => (
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
                            <br />
                            <h1 className="text-xl m-2 font-semibold">
                                MEDIUM PACK
                            </h1>
                            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                {medium.map((diamond, index) => (
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
                            <br />
                            <h1 className="text-xl m-2 font-semibold">
                                LARGE PACK
                            </h1>
                            <ul className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-6 items-center justify-center">
                                {large.map((diamond, index) => (
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
                        </div>
                        <br />
                        <div>
                            <div
                                onClick={() => {
                                    setData({ price: 125, dias: "Weekly pass" });
                                    inputFieldRef.current?.scrollIntoView({ behavior: "smooth" }); // ✅ Scroll to input field
                                }}
                                className="w-50 p-3 m-6 bg-white border border-gray-300 shadow-md rounded-xl text-center hover:scale-105 hover:shadow-2xl transition-all duration-300">
                                <p className="text-lg font-semibold text-gray-800">
                                    <img src={weekly} className="scale-3d" alt="Weelky" />
                                </p>
                                <div className="mt-2 bg-red-500 text-white font-bold py-1 rounded-md shadow-md">
                                    ₹125
                                </div>
                                <p>
                                    Weekly Pass
                                </p>
                            </div>
                        </div>
                    </>
                )
            }
            {/* Input Fields Section */}
            <div ref={inputFieldRef} className="flex justify-center gap-4 p-5 ">
                <div>
                    <img src={img} alt="icon" className="h-24 w-40 rounded-2xl object-cover" />
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
            <div className="text-xl p-2 px-4 border-solid border-1 border-gray-500 w-full">
                <b>Price</b>: ₹{data.price} <br />
                <b>Diamonds</b>: 💎{data.dias}
            </div>

            {/* Recharge Button */}
            <div className="flex justify-center m-8">
                <button className="bg-blue-600 text-white text-lg p-3 rounded-lg"
                    onClick={HandleSubmit}
                >
                    Recharge
                </button>
            </div>
            <ToastContainer position="top-center" autoClose={2000} />
        </>
    );
};
