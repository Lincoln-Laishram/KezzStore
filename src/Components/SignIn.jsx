import { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { account } from '../Config/Auth';
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
                <form class="form" onSubmit={HandleLogin}>
                    <p class="form-title">Welcome back</p>
                    <div class="input-container">
                    <input
                        type="email"
                        name="email"
                        placeholder="Enter email..."
                    />                          
                    </div>
                    <div class="input-container">
                    <input
                        type="password"
                        name="password"
                        placeholder="Enter password..."
                        autoComplete="password"
                    />
                    </div>
                    <button class="submit" type="submit">
                        Sign in
                    </button>

                    <p class="signup-link">
                       <b> No account? </b> <Link to = "/sign_up">Sign up</Link>
                    </p>
                </form>
        </>
    );
};
