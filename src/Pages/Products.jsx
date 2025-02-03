import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { toast } from "react-toastify";
import { NavBar } from "../Components/Navigation";
import { useNavigate, Link } from "react-router-dom";
import { Items } from "../Components/Items";
//icons
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

//product images:
import imgProduct from '../assets/Pictures/emperor.png'


export const Products = () => {
    const items = Items();
    const [search, setSearch] = useState(""); // Remove extra spaces in the initial state
    const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem("wish")) || []); // Remove extra spaces in the initial state
    const [visibleCount, setVisibleCount] = useState(5);
    const navigate = useNavigate();
    const HandleChange = (e) => {
        setSearch(e.target.value);
    };



    // Filter products based on search input (case insensitive)
    const filteredItems = items.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    const HandleSeeMore = () => {
        setVisibleCount((prev) => prev + 5);
    }
    const addToWishList = (item) => {
        const currentItem = JSON.parse(localStorage.getItem("wish")) || [];
        const isPresent = currentItem.some(wishItem => wishItem.id === item.id);
        if (!isPresent) {
            const updatedItem = [...currentItem, item];
            localStorage.setItem("wish", JSON.stringify(updatedItem));
            toast.success('Added to wishlist')
            setWishList(updatedItem); 
        } else {
            const updatedItem = currentItem.filter(wishItem => wishItem.id !== item.id);
            localStorage.setItem("wish", JSON.stringify(updatedItem));
            toast.success('Removed from wishlist')
            setWishList(updatedItem);
        }
    };

    const isItemInWishList = (itemId) => {
        return wishList.some(wishItem => wishItem.id === itemId);
    };


    return (
        <>
            <NavBar />
            <ToastContainer position="top-center" autoClose={2000} />
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
            <center>
                <div className="flex justify-center gap-4">
                    <div className="h-[40px] w-[100px] bg-[gray] rounded-full"></div>
                    <div className="h-[40px] w-[100px] bg-[gray] rounded-full"></div>
                    <div className="h-[40px] w-[100px] bg-[gray] rounded-full"></div>
                </div>
            </center>
            <br />
            <div>
                {filteredItems.length > 0 ? (
                    filteredItems.slice(0, visibleCount).map((item) => (
                        <div className="">
                            <Link to={`/details/${item.id}`}>
                                <div key={item.id} className="flex items-center my-1 bg-gray-300 p-3 gap-4">
                                    <div>
                                        <img src={item.img} alt="img" className="h-[180px] w-[200px]" />
                                    </div>
                                    <div className="w-[200px] p-1">
                                        <h2 className="font-semibold text-2xl">
                                            {item.name}
                                        </h2>
                                        <p className="w-[auto]">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas in nesciunt placeat sapiente
                                        </p>
                                        <div className="text-black text-xl font-semibold flex items-center gap-2">
                                            ${item.price}
                                            <button
                                                onClick={(e) => {
                                                    e.stopPropagation(); // Prevent <Link> from being triggered
                                                    e.preventDefault(); // Prevent page navigation
                                                    addToWishList(item);
                                                }}
                                            >                                                <FaHeart className={`text-2xl ${isItemInWishList(item.id) ? "text-red-600" : "text-gray-500"}`} />
                                            </button>
                                        </div> <br />
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No products found
                    </p>
                )}
                <center>
                    <button onClick={HandleSeeMore} className="relative bg-blue-600 text-white p-1 w-[35%] rounded-lg text-lg top-4">
                        LOAD MORE
                    </button>
                </center>
            </div>
        </>
    );
};
