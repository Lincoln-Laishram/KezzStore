import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { account } from '../Config/Auth';

// Icons
import logo from "../assets/Pictures/icon.png"
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";

export const SignIn = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        async function checkSession() {
            try {
                const user = await account.get();
                console.log('Active session found:', user);
                if (!localStorage.getItem('loggedUser')) {
                    localStorage.setItem('loggedUser', user.name || 'No Name...');
                    localStorage.setItem('loggedEmail', user.email || 'No Email...');
                }
            } catch (err) {
                console.log('No active session found. Clearing localStorage.');
                localStorage.removeItem('loggedUser');
                localStorage.removeItem('loggedEmail');
            }
        }
        checkSession();
    }, []);

    /* SETTING LOGIN DATA */
    async function HandleLogin(e) {
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');

        try {
            await account.createEmailPasswordSession(email, password);
            const loggedInUser = await account.get();
            console.log('User logged in:', loggedInUser);
            navigate('/');
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
            console.error(err);
        }
    }

    return (
        <>
            <IoIosArrowBack
                className="relative top-6 left-2 text-6xl cursor-pointer text-blue-500"
                onClick={() => navigate('/')}
            />
            <div
                className="
        w-[90%] sm:w-[80%] mx-auto 
        flex flex-col items-center 
        sm:flex-row md:flex md:flex-row 
        lg:flex lg:flex-row relative h-full
    "
            >
                <div className='mx-[auto]'>
                    <img src={logo} alt="logo"
                        className="
                h-[240px] 
                md:h-[320px] relative top-[-20px] mx-[auto] 
                lg:my-[auto]
            "
                    />
                </div>
                <div className="
        my-2 mx-auto w-[95%] 
        sm:w-[80%]
        md:w-[60%] 
        lg:w-[40%] my-[auto]
    ">
                    <form className="flex flex-col items-center w-full" onSubmit={HandleLogin}>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter email..."
                            className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                        />
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter password..."
                            autoComplete="current-password"
                            className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                        />
                            <Link className='text-[blue] underline font-semibold'>
                                Forgot password ?
                            </Link>
                            <br />
                            {error && <p className='text-red-600 text-lg mt-2'>{error}</p>}
                            <br />
                            <button type="submit" className="bg-blue-600 text-white p-1 w-[60%] rounded-lg text-l mt-2">
                                Sign in
                            </button>
                    </form>
                    <center>
                        <p className="mt-6">
                            <b>Don't have an account?</b> <Link to="/sign_up" className="text-[blue] font-semibold underline">Sign up</Link>
                        </p>
                        <p className="font-bold text-xl mt-6">Or continue with</p>
                        <br />
                        <div className="flex justify-center items-center bg-gray-300 lg:h-10 w-38 p-3 rounded-lg">
                            <FcGoogle className="text-3xl" /><strong className="text-lg">oogle</strong>
                        </div>
                        <p className="my-12">Terms and conditions?</p>
                    </center>
                </div>
            </div>

        </>
    );
};
