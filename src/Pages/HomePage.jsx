import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
import { Footer } from "./Footer";
import img1 from "../assets/Pictures/emperor.png";
import img2 from "../assets/Pictures/neuroactiv6.png";
import img3 from "../assets/Pictures/pinealxt.png";

export const HomePage = () => {
    const topSales = [
        { img: img1, name: "Emperor" },
        { img: img2, name: "Neuroactiv6" },
        { img: img3, name: "Pinealxt" },
    ];
    const newProducts = [
        { img: img1, name: "Emperor" },
        { img: img2, name: "Neuroactiv6" },
        { img: img3, name: "Pinealxt" },
        { img: img1, name: "Emperor" },
        { img: img2, name: "Neuroactiv6" },
        { img: img3, name: "Pinealxt" },
    ]

    const services = [
        { label: "24/7 DELIVERY" },
        { label: "TOP BRANDS" },
    ];

    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Carousel Section */}
            <Carousal />

            {/* Top Sales Section */}
            <div className="relative text-center border-b border-gray-400 p-6">
                <h1 className="text-3xl font-bold">OUR TOP SALE</h1>
                <div className="flex flex-wrap justify-center gap-6 p-6">
                    {topSales.map((item, index) => (
                        <div key={index} className="p-4">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-[160px] mx-auto
                                lg:h-[220px]
                                "
                            />
                            <p className="mt-2 text-lg font-semibold
                            lg:text-2xl
                            ">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    SEE MORE
                </button>
            </div>
            {/* NEW IN THE MARKET */}
            <div className="p-4">
                <h1 className="text-3xl font-bold text-center">NEW PRODUCTS </h1>
                <div className="overflow-x-auto whitespace-nowrap flex gap-6 p-4 mb-4 
                scrollbar-thin scrollbar-thumb-gray-500 scrollbar-track-gray-300
                hover:scrollbar-thumb-gray-700">
                    {newProducts.map((item, index) => (
                        <>
                            <div className="">
                                <div key={index} 
                                className="
                                flex items-center gap-6 w-[322px] h-[180px] p-4 shadow-md shadow-gray-600 rounded-xl
                                md:w-[400px]
                                lg:w-[350px]

                                ">
                                    <img src={item.img} alt={item.name} 
                                    className="
                                    w-[140px]
                                    lg:w-[160px]
                                    " 
                                    />
                                    <div>
                                        <h2 className="font-semibold text-xl
                                        lg:text-xl
                                        ">
                                            {item.name}
                                        </h2>
                                        <p className="w-[auto] text-lg
                                        lg:lg
                                        ">
                                            $10
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </>
                    ))}
                </div>
            </div>
            {/* Footer Section */}
            <Footer />
        </>
    );
};
