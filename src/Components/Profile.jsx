import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Logout } from '../Config/Logout';
import { account } from '../Config/Auth';
export const Profile = () => {
  const [userName, setUserName] = useState('');
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
    <div>
      <br />
      <p className='text-center text-2xl'>
        <strong> 
          Welcome <i>{userName || 'N/A'}</i> 🥳</strong> 
      </p>
      <center>
        <button
          onClick={handleLogOut}
          className="bg-black text-white font-bold h-[40px] w-[100px] rounded-3xl  p-0"
        >
          Logout
        </button>
      </center>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
    </>
  );
}

