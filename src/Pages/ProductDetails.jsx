import React from 'react';
import { Items } from '../Components/Items';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navigation';
import { FaHeart } from "react-icons/fa";
import { Footer } from './Footer';
export const ProductDetails = () => {
    const items = Items(); // Ensure this is an array
    const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem("wish")) || []); // Remove extra spaces in the initial state
    const { id } = useParams(); // Get the ID from the URL
    const details = items.find((item) => item.id === Number(id));
    if (!details) {
        return <p>Product not found</p>;
    }
    console.log("Product tag:", details.tag);
    const relatedItems = items.filter((item) => item.tag === details.tag && item.id !== details.id);
    console.log("Related items:", relatedItems);
    const addToWishList = (item) => {
        const currentItem = JSON.parse(localStorage.getItem("wish")) || [];
        const isDuplicate = currentItem.some(wishItem => wishItem.id === item.id);

        if (!isDuplicate) {
            const updatedItem = [...currentItem, item];
            localStorage.setItem("wish", JSON.stringify(updatedItem));
            setWishList(updatedItem); // Update state to reflect changes
            return
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
            <div className="p-2 w-[100%] sm:w-[100%] md:w-[100%] md:flex items-center justify-center">
                <div>
                    <img src={details.img} alt={details.name}
                        className='
         h-[220px] mx-auto p-2
     md:h-[300px] md:p-4
     lg:h-[400px]
     '
                    />

                </div>
                <div className='
bg-gray-300 p-2 
sm:w-[90%]
md:w-[550px] 
lg:w-[550px] 
'>

                    <p className='text-4xl font-semibold m-2'>{details.name}</p>
                    <p className='text-lg m-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, numquam fugiat? Ab illum praesentium eum qui voluptates, ipsa error temporibus nemo vitae hic facere! Praesentium libero mollitia nesciunt saepe sunt?
                    </p>
                    <p className='text-2xl m-2'>
                        <b>Price:</b> ${details.price}
                    </p>
                    <div className='flex items-center gap-4'>
                        <button
                            className="
    mt-2 px-4 py-2 bg-blue-500 w-[50%] text-white font-bold rounded hover:bg-red-700 transition duration-300 text-xl
    sm:w-[50%]
    lg:w-[40%]
    ">

                            Buy
                        </button>
                        <button
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent <Link> from being triggered
                                e.preventDefault(); // Prevent page navigation
                                addToWishList(details);
                            }}
                        >
                            <FaHeart className={`text-2xl ${isItemInWishList(details.id) ? "text-red-600" : "text-gray-500"}`} />
                        </button>
                    </div>
                </div>
            </div>

            <h1 className='text-2xl mx-4'>Related Products:</h1>
            <div
                className="
            overflow-x-auto whitespace-nowrap flex gap-6 p-4 mb-4
            ">
                {relatedItems.map((item) => (
                    <Link key={item.id} to={`/details/${item.id}`}>
                        <div
                            className="
                border border-gray-300 shadow-md p-4 rounded-lg w-[160px] h-[200px]
                lg:w-[280px] lg:h-[300px]
                "
                        >
                            <img src={item.img} alt={item.product}
                                className="
                    h-[130px] w-[220px] 
                    lg:h-[200px]
                    "
                            />
                            <p className="text-center font-semibold text-lg lg:text-xl">
                                {item.name}
                            </p>
                            <p className="text-center text-gray-700 text-lg">${item.price}</p>
                        </div>
                    </Link>

                ))}
            </div>
            <Footer />
        </>
    );
};
