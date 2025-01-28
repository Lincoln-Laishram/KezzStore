import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { account } from '../Config/Auth';

// Icons
import logo from "../assets/Pictures/icon.png"
import { FaGoogle, FaFacebook } from 'react-icons/fa';

export const SignIn = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();
    useEffect(() => {
        async function checkSession() {
            try {
                await account.get(); // Fetch the logged-in user
            } catch (err) {
                console.log('No active session found.');
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
            const loggedInUser = await account.get(); // Fetch the logged-in user's data
            console.log('User logged in:', loggedInUser);
            navigate('/'); // Redirect to the homepage
        } catch (err) {
            setError(err.message || 'Login failed. Please try again.');
            console.error(err);
        }
    }

    /* CHECKING SESSION */
    useEffect(() => {
        async function checkSession() {
            try {
                const user = await account.get();
                console.log('Active session found:', user);
                // Sync with localStorage
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

    /* Display toast notification on error */
    // Runs only when `error` changes

    return (
        <>
            <div className="my-14">
                <img src={logo} alt="logo" className="h-[220px] mx-[auto]" />
                <br /><br />
                <center>
                    <form class="form" onSubmit={HandleLogin}>
                        <div class="input-container">
                            <input
                                type="email"
                                name="email"
                                placeholder="Enter email..."
                                className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                            />
                        </div>
                        <div class="input-container">
                            <input
                                type="password"
                                name="password"
                                placeholder="Enter password..."
                                autoComplete="password"
                                className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                            />
                        </div>
                        <br />
                        <button class="submit" type="submit" className="bg-blue-600 text-white p-1 w-[25%] rounded-lg text-l">
                            Sign in
                        </button>
                    </form>
                    <br />
                    <b>Already have an account ?</b> <Link to="/sign_in" className="text-[blue] font-semibold underline">Sign in</Link>
                    <br /><br />
                    <div>
                        <p className="font-bold text-xl">Or continue with</p>
                    </div> <br />
                    <div className="flex justify-center gap-2 text-3xl">
                        <FaGoogle /> <FaFacebook />
                    </div>
                    <br />
                    <p className="my-24">
                        Terms and conditions ?
                    </p>
                    {/* <br /> */}
                    {/* {error && <p>Error: {error}</p>} */}
                </center>

            </div>
        </>
    );
};
