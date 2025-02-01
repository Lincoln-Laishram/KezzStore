import React from 'react';
import { Items } from '../Components/Items';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { NavBar } from '../Components/Navigation';
import { FaHeart } from "react-icons/fa";

export const ProductDetails = () => {
    const items = Items(); // Ensure this is an array
    const [wishList, setWishList] = useState(() => JSON.parse(localStorage.getItem("wish")) || []); // Remove extra spaces in the initial state
    const { id } = useParams(); // Get the ID from the URL

    // Find the product based on ID
    const details = items.find((item) => item.id === Number(id));

    if (!details) {
        return <p>Product not found</p>;
    }

    // Accessing the tag
    console.log("Product tag:", details.tag);

    // If you want to check if other items have the same tag
    const relatedItems = items.filter((item) => item.tag === details.tag && item.id !== details.id);
    console.log("Related items:", relatedItems);

    const addToWishList = (item) => {
        const currentItem = JSON.parse(localStorage.getItem("wish")) || [];
        const isDuplicate = currentItem.some(wishItem => wishItem.id === item.id);

        if (!isDuplicate) {
            const updatedItem = [...currentItem, item];
            localStorage.setItem("wish", JSON.stringify(updatedItem));
            setWishList(updatedItem); // Update state to reflect changes
            // console.log("Item added to wishlist successfully");
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
            <div className="p-2">
                <div>
                    <img src={details.img} alt={details.name} className='h-[220px] mx-[auto] p-2' />
                </div>
                <div className='bg-gray-300 p-4 w-[94%] mx-[auto]'>
                    <p className='text-4xl font-semibold m-2'>{details.name}</p>
                    <p className='text-lg m-2'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, numquam fugiat? Ab illum praesentium eum qui voluptates, ipsa error temporibus nemo vitae hic facere! Praesentium libero mollitia nesciunt saepe sunt?
                    </p>
                    <p className='text-2xl m-2'>
                        <b>Price:</b> ${details.price}
                    </p>
                    <div className='flex items-center gap-4'>
                        <button className="mt-2 px-4 py-2 bg-blue-500 w-[50%] text-white font-bold rounded hover:bg-red-700 transition duration-300 text-xl">
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
            <div className="overflow-x-auto whitespace-nowrap flex gap-4 p-4 mb-4">
                {relatedItems.map((item) => (
                    <Link key={item.id} to={`/details/${item.id}`}>
                        <div className="border border-gray-300 shadow-md p-4 rounded-lg min-w-[150px]">
                            <img src={item.img} alt={item.product} className="h-[120px] w-full object-cover rounded-md" />
                            <p className="text-center font-semibold text-lg">{item.name}</p>
                            <p className="text-center text-gray-700 text-lg">${item.price}</p>
                        </div>
                    </Link>
                ))}
            </div>

        </>
    );
};
