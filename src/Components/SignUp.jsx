import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { account } from "../Config/Auth";
import { ID } from "appwrite";

//IMAGES
import logo from "../assets/Pictures/LOGO.png";
//ICONS
import { FcGoogle } from "react-icons/fc";
import { IoIosArrowBack } from "react-icons/io";


export function SignUp() {
    const [info, setInfo] = useState({
        userName: "",
        userEmail: "",
        userPassword: ""
    });
    const navigate = useNavigate()
    const [error, setError] = useState(null);
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,15}$/;
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
            setError("Please fill in all fields.");
            return;
        }
        if (!emailPattern.test(info.userEmail)) {
            setInfo({
                userEmail: " "
            });
            setError("Invalid email address...");
            return;
        }
        if (!passwordPattern.test(info.userPassword)) {
            setInfo({
                userPassword: " "
            });
            setError("Password must contain at least 8 characters (including 1 uppercase letter,1 lowercase letter, 1 number and 1 special character)");
            return;
        }

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

            await account.createEmailPasswordSession(info.userEmail, info.userPassword);
            const registeredUser = await account.get();
            console.log("User logged in automatically after registration:", registeredUser);

            setInfo({
                userName: "",
                userEmail: "",
                userPassword: ""
            });

            setError(null); // Clear any previous errors
            navigate("/"); // Redirect to the homepage
        } catch (error) {
            console.error("Registration Failed:", error.message);
            setError("Registration Failed: " + error.message);
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
                <div className="mx-[auto]">
                    <img src={logo} alt="logo"
                        className="
                                       h-[240px] 
                                       md:h-[320px] relative top-[-20px] mx-[auto] 
                                       lg:my-[auto]
                                       " />
                </div>
                <div
                    className="
                my-2 mx-auto w-[95%] 
                sm:w-[80%]
                md:w-[60%] 
                lg:w-[40%] my-[auto]
                "
                >
                    <form onSubmit={HandleRegistration} className="flex flex-col items-center w-full">
                        <input
                            name="userName"
                            placeholder="Username..."
                            type="text"
                            onChange={HandleChange}
                            value={info.userName}
                            className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                        />
                        <input
                            name="userEmail"
                            placeholder="Email..."
                            type="email"
                            onChange={HandleChange}
                            value={info.userEmail}
                            className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                        />
                        <input
                            name="userPassword"
                            placeholder="Password..."
                            type="password"
                            onChange={HandleChange}
                            value={info.userPassword}
                            className="bg-gray-300 p-2 w-[70%] rounded-lg m-2 placeholder-black"
                        />
                        <button type="submit" className="bg-blue-600 text-white p-1 w-[60%] rounded-lg text-l mt-2">
                            Sign up
                        </button>
                        {error && <p className="text-red-600 text-lg mt-2">{error}</p>}
                    </form>
                    <center>
                        <p className="mt-6 ">
                            <b>Already have an account ?</b> <Link to="/sign_in" className="text-[blue] font-semibold underline">Sign in</Link>
                        </p>
                        <p className="font-bold text-xl mt-6">Or continue with</p>
                        <br />
                        <div className="flex justify-center items-center bg-gray-300 lg:h-10 w-38 p-3 rounded-lg">
                            <FcGoogle className="text-3xl" /><strong className="text-lg">oogle</strong>
                        </div>
                        <p className="my-12">Terms and conditions ?</p>
                    </center>
                </div>
            </div>
        </>
    );
}
