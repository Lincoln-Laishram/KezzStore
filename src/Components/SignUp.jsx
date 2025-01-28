import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { account } from "../CONFIG/Auth";
import { ID } from "appwrite";

//IMAGES
import logo from "../assets/Pictures/icon.png";
//ICONS
import { FaGoogle, FaFacebook } from "react-icons/fa";


export function SignUp() {
    // const [login, setLogin] = useState(false);
    const [info, setInfo] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });
    const navigate = useNavigate()
    const [error, setError] = useState(null);

    const HandleChange = (e) => {
        setInfo({
            ...info,
            [e.target.name]: e.target.value
        });
    }
    // FOR REGISTRATION...
    const HandleRegistration = async (e) => {
        e.preventDefault();

        if (info.userName === "" || info.userEmail === "" || info.userPassword === "") {
            alert("Please fill up");
        } else {
            try {
                // Register the user
                const response = await account.create(
                    ID.unique(),
                    info.userEmail,
                    info.userPassword,
                    info.userName
                );
                console.log(response);
                alert("Registration Successful");

                // Automatically log in the user after registration
                await account.createEmailPasswordSession(info.userEmail, info.userPassword);
                const registeredUser = await account.get();
                console.log("User logged in automatically after registration:", registeredUser);

                setInfo({
                    userName: "",
                    userEmail: "",
                    userPassword: ""
                });

                navigate("/"); // Redirect to the homepage
            } catch (error) {
                console.error("Registration Failed:", error.message);
                alert("Registration Failed: " + error.message);
            }
        }
    };

    useEffect(() => {
        const Route = async () => {
            const registered = await account.get()
            if (registered) {
                navigate("/");
            }
        }
        Route();
    }, [])
    return (
        <>
            <div>
                <div className="my-14">
                    <img src={logo} alt="logo" className="h-[220px] mx-[auto]" />
                    <br /><br />
                    <center>
                        <form onSubmit={HandleRegistration}>
                            <input
                                name="userName"
                                placeholder="Username..."
                                type="text"
                                onChange={HandleChange}
                                value={info.userName}
                                className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                            />
                            <br />
                            <input
                                name="userEmail"
                                placeholder="Email..."
                                type="email"
                                onChange={HandleChange}
                                value={info.userEmail}
                                className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                            />
                            <br />
                            <input
                                name="userPassword"
                                placeholder="Password..."
                                type="password"
                                onChange={HandleChange}
                                value={info.userPassword}
                                className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                            />
                            <br /> <br />
                            <center>
                                <button type="submit" className="bg-blue-600 text-white p-1 w-[25%] rounded-lg text-l">
                                    Sign up
                                </button>
                            </center>
                        </form>
                    </center>

                    <br />
                    <center>
                        <b>Already have an account ?</b> <Link to="/sign_in" className="text-[blue] font-semibold underline">Sign in</Link> 
                        <br /><br />
                        <div>
                            <p className="font-bold text-xl">Or continue with</p>
                        </div> <br />
                        <div className="flex justify-center gap-2 text-3xl">
                            <FaGoogle/> <FaFacebook/>
                        </div>
                        <br />
                        <p className="my-12">
                            Terms and conditions ?
                        </p>
                    </center>
                    <br />
                    {error && <p>Error: {error}</p>}
                </div>
            </div>
        </>
    );
}
