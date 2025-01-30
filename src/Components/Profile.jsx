import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Config/Logout';
import { account } from '../Config/Auth';
// ICONS
import { FaTrash } from 'react-icons/fa';
import { IoIosLogOut } from "react-icons/io";
import { MdAccountCircle } from "react-icons/md";
import { IoIosArrowBack } from "react-icons/io";


export const Profile = () => {
  const [userName, setUserName] = useState('');
  const [wishLists, setWishLists] = useState([]);
  const [isRegisteredUser, setIsRegisteredUser] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function checkSession() {
      try {
        const user = await account.get();
        if (user) {
          setUserName(user.name);

        }
        console.log('Active session found:', user);
      } catch (err) {
        console.log('No active session found. Clearing localStorage.');
      }
    }
    checkSession();
  }, []);

  useEffect(() => {
    const wishDatas = localStorage.getItem("wish");
    if (wishDatas) {
      setWishLists(JSON.parse(wishDatas));
    }
  }, [])

  const Delete = (id) => {
    const newWishLists = wishLists.filter((item) => item.id !== id);
    localStorage.setItem("wish", JSON.stringify(newWishLists));
    setWishLists(newWishLists);
    console.log('Deleted');
  }

  const handleLogOut = async () => {
    await Logout()
    if (isRegisteredUser) {
      try {
        setUserName('');
        setUserEmail('');
        setIsRegisteredUser(false);
        navigate('/');
      } catch (error) {
        setError(error);
        console.error('Error deleting user account:', error.message);
      }
    } else {
      navigate('/');
    }
  };
  return (
    <>
      <div className=''>
        <IoIosArrowBack className='relative top-6 left-2 text-6xl cursor-pointer text-blue-500' onClick={() => navigate('/')} />
        <center>
          <MdAccountCircle className='text-[100px] text-blue-500 ' />
        </center>

        <p className='text-center text-4xl center my-4'>
          <p className='uppercase font-bold'>{userName || 'N/A'}</p>
        </p>
        <center>
          <button
            onClick={handleLogOut}
            className="my-4 bg-blue-600 text-white font-bold h-[40px] w-[100px] rounded-lg  p-0 flex items-center justify-evenly"
          >
            Logout <IoIosLogOut className='text-xl' />
          </button>
        </center>
        <div>
          <h1 className='text-3xl font-semibold mx-6'>
            Wishlists :
          </h1>
          <div className="p-2 mx-[auto]">
            {wishLists.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-2xl font-semibold text-blue-800">Wish list is empty</h3>
              </div>
            ) : (
              <div className="">
                {wishLists.map((cartItem, index) => (
                  <div key={cartItem.id} className="flex bg-gray-300 p-4 m-4 w-[90%] rounded-lg">
                    <img src={cartItem.img} alt="img" className='h-[140px]' />
                    <div className='flex flex-col items-center justify-evenly mx-[20px]'>
                      <h2 className="text-2xl font-bold ">{cartItem.name}</h2>
                      <p className="text-lg">Price: ₹{cartItem.price}</p>
                      <button
                        onClick={() => Delete(cartItem.id)}
                        className="mt-2 px-4 py-2 bg-red-500 w-[80%] text-white font-bold rounded hover:bg-red-700 transition duration-300"
                      >
                        <center>
                          <FaTrash />
                        </center>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </div>
    </>
  );
}

