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

    const services = [
        { label: "24/7 DELIVERY" },
        { label: "TOP BRANDS" },
    ];

    return (
        <>
            {/* Navbar */}
            <NavBar />

            {/* Carousel Section */}
            <div className="relative h-[280px] w-full">
                <div className="absolute top-0 z-[1] w-full h-[250px] bg-white border border-black">
                    <Carousal />
                </div>
            </div>

            {/* Top Sales Section */}
            <div className="relative text-center border-b border-black p-6">
                <h1 className="text-3xl font-bold">OUR TOP SALE</h1>
                <div className="flex flex-wrap justify-center gap-6 p-6">
                    {topSales.map((item, index) => (
                        <div key={index} className="p-4">
                            <img
                                src={item.img}
                                alt={item.name}
                                className="h-[160px] mx-auto"
                            />
                            <p className="mt-2 text-lg font-semibold">
                                {item.name}
                            </p>
                        </div>
                    ))}
                </div>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                    SEE MORE
                </button>
            </div>

            {/* Services Section */}
            <div className="relative text-center p-6 border-b border-black">
                <h1 className="text-3xl font-bold">WE OFFER</h1>
                <div className="p-10">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center">
                            <div className="bg-gray-300 h-[150px] w-[150px] rounded-full"></div>
                            <p className="mt-4 text-lg font-semibold">{service.label}</p>
                        </div>
                    ))}
                </div>
            </div>
            {/* Footer Section */}
            <Footer/>
        </>
    );
};
