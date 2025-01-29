import { useState } from "react";
import { NavBar } from "../Components/Navigation";

//icons
import { FaSearch } from "react-icons/fa";
//product images:
import imgProduct from '../assets/Pictures/emperor.png'


export const Products = () => {
    const [search, setSearch] = useState(""); // Remove extra spaces in the initial state
    const [visibleCount, setVisibleCount] = useState(5);

    const HandleChange = (e) => {
        setSearch(e.target.value);
    };

    const items = [
        { id: 0, img: imgProduct, name: "Product1", price: 10 },
        { id: 1, img: imgProduct, name: "Product2", price: 20 },
        { id: 2, img: imgProduct, name: "Product3", price: 30 },
        { id: 3, img: imgProduct, name: "Product4", price: 40 },
        { id: 4, img: imgProduct, name: "Product5", price: 50 },
        { id: 5, img: imgProduct, name: "Product6", price: 10 },
        { id: 6, img: imgProduct, name: "Product7", price: 20 },
        { id: 7, img: imgProduct, name: "Product8", price: 30 },
        { id: 8, img: imgProduct, name: "Product9", price: 40 },
        { id: 9, img: imgProduct, name: "Product10", price: 50 },
        { id: 10, img: imgProduct, name: "Product11", price: 10 },
        { id: 11, img: imgProduct, name: "Product12", price: 20 },
        { id: 12, img: imgProduct, name: "Product13", price: 30 },
        { id: 13, img: imgProduct, name: "Product14", price: 40 },
        { id: 14, img: imgProduct, name: "Product15", price: 50 },
        { id: 15, img: imgProduct, name: "Product16", price: 10 },
        { id: 16, img: imgProduct, name: "Product17", price: 20 },
        { id: 17, img: imgProduct, name: "Product18", price: 30 },
        { id: 18, img: imgProduct, name: "Product19", price: 40 },
        { id: 19, img: imgProduct, name: "Product20", price: 50 },
    ];

    // Filter products based on search input (case insensitive)
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const HandleSeeMore = () => {
        setVisibleCount((prev)=>prev+5);
    }

    return (
        <>
            <NavBar />
            <center>
                <div className="my-8 flex items-center bg-gray-300 p-2 pl-4 w-[60%] rounded-lg">
                    <div className="text-gray-500">
                        <FaSearch className="text-2xl" />
                    </div>
                    <input
                        type="text"
                        placeholder="Search products..."
                        value={search}
                        onChange={HandleChange}
                        className="placeholder:text-lg font-semibold bg-transparent focus:outline-none focus:ring-0 border-none w-full"
                    />
                </div>
            </center>


            {/* Display Filtered Products */}
            <div>
                {filteredItems.length > 0 ? (
                    filteredItems.slice(0,visibleCount).map((item) => (
                        <>
                            <div key={item.id} className="flex items-center my-1 bg-gray-300 p-4 gap-4">
                                <div>
                                    <img src={item.img} alt="img" className="h-[160px]" />
                                </div>
                                <div className="w-[200px]">
                                    <h2 className="font-semibold text-2xl">{item.name}</h2>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas in nesciunt placeat sapiente
                                    </p>
                                    <h2 className="text-black text-lg font-semibold">${item.price}</h2>
                                </div>
                            </div>
                        </>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No products found</p>
                )}
                <center>
                    <button onClick={HandleSeeMore} className="bg-blue-600 text-white p-1 w-[28%] rounded-lg text-lg">
                        SEE MORE
                    </button>
                </center>
            </div>
        </>
    );
};
