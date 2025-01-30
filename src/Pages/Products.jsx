import { useState } from "react";
import { NavBar } from "../Components/Navigation";

//icons
import { FaSearch } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

//product images:
import imgProduct from '../assets/Pictures/emperor.png'


export const Products = () => {
    const [search, setSearch] = useState(""); // Remove extra spaces in the initial state
    const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem("wish")) || []); // Remove extra spaces in the initial state
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
        setVisibleCount((prev) => prev + 5);
    }
    // const WishList = () => {
    //     setWish((prev) => !prev)
    // }

    const addToWishList = (item) => {
        const currentItem = JSON.parse(localStorage.getItem("wish")) || [];
        const isDuplicate = currentItem.some(wishItem => wishItem.id === item.id);

        if (!isDuplicate) {
            const updatedItem = [...currentItem, item];
            localStorage.setItem("wish", JSON.stringify(updatedItem));
            setWishList(updatedItem); // Update state to reflect changes
            console.log("Item added to wishlist successfully");
        } else {
            alert("Item already in wishlist");
        }
    };

    const isItemInWishList = (itemId) => {
        return wishList.some(wishItem => wishItem.id === itemId);
    };


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
                                        <button onClick={() => addToWishList(item)}>
                                            <FaHeart className={`text-2xl ${isItemInWishList(item.id) ? "text-red-600" : "text-gray-500"}`} />
                                        </button>

                                    </div> <br />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-gray-500">
                        No products found
                    </p>
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
