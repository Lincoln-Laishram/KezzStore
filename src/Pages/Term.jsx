import { useEffect } from "react";
import logo from "../assets/Pictures/LOGO.jpg"
export const Terms = () => {
    useEffect(() => {
        window.scrollTo(0, 0); 
    }, []);
    return (
        <>
            <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-50">
                {/* Logo */}
                <img
                    src={logo}
                    alt="LOGO"
                    className="w-60 sm:max-w-md md:max-w-lg border border-gray-400 rounded-2xl shadow-lg"
                />

                {/* Terms & Conditions Box */}
                <ul className="list-disc bg-white text-gray-700 p-6 md:p-10 rounded-lg shadow-md border border-gray-300 w-full space-y-3 mt-6">
                    <li className="font-semibold text-black">
                        Welcome to <span className="text-blue-600 font-bold">Kezz Store</span>. By using our website and services, you agree to follow the terms outlined below. If you do not agree, please do not use our services.
                    </li>
                    <li>We offer <span className="text-green-600 font-bold">safe and instant</span> Mobile Legends: Bang Bang (MLBB) diamond top-ups. All transactions are final once processed.</li>
                    <li>All payments must be made through the accepted methods listed on our website.</li>
                    <li>Ensure that the provided <span className="font-bold">Player ID and Server ID</span> are correct before making a purchase. We are not responsible for incorrect details.</li>
                    <li className="text-red-600 font-semibold">No refunds will be issued after the diamonds have been credited to your account.</li>
                    <li>Diamonds are usually delivered instantly, but in rare cases, it may take up to <span className="font-semibold">30 minutes to 24 hours</span> due to server delays.</li>
                    <li>If you do not receive your diamonds within the expected time, please contact our support team.</li>
                    <li>You agree to use our services only for lawful purposes.</li>
                    <li className="text-red-500">Any attempt at fraud, chargebacks, or misuse of the service may result in account suspension.</li>
                    <li>
                        For any issues or inquiries, please contact us at <span className="text-blue-600 font-bold"> <a href="https://wa.me/message/T2T2QUTLOFIGO1">9366471814</a> </span> or <span className="text-blue-600 font-bold"> <a href="https://chat.whatsapp.com/JFJGiTUWxF01UlSd644bi7">join our community group</a> </span>.
                    </li>
                    <li className="italic">We reserve the right to update these Terms and Conditions at any time. Continued use of our services after changes means you accept the new terms.</li>
                </ul>
            </div>


        </>
    )
}