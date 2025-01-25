import { NavBar } from "../Components/Navigation";
import { Carousal } from "../Components/Carousel";
// TOP SALES
import img1 from "../assets/Pictures/emperor.png";
import img2 from "../assets/Pictures/neuroactiv6.png";
import img3 from "../assets/Pictures/pinealxt.png";

export const HomePage = () => {
    return (
        <>
            {/* Move Navbar Outside the Relative Container */}
            <NavBar />

            <div className="h-[300px] w-full relative">
                <div className="border-solid border-black border-[1px] h-[250px] w-full absolute top-[0px] z-[1] bg-white">
                    <Carousal />
                </div>
            </div>

            <div className="relative text-center">
                <h1 className="text-bold text-3xl font-bold">
                    OUR TOP SALE
                </h1>
                <br />
                <div className="p-4">
                    <img src={img1} alt="img" className="h-[160px] mx-[auto]" />
                    <p className="text-lg font-semibold">Emperor</p>
                </div>
                <div className="p-4">
                    <img src={img2} alt="img" className="h-[160px] mx-[auto]" />
                    <p className="text-lg font-semibold">Neuroactiv6</p>
                </div>
                <div className="p-4">
                    <img src={img3} alt="img" className="h-[160px] mx-[auto]" />
                    <p className="text-lg font-semibold">Pinealxt</p>
                </div>
            </div>
        </>
    );
};
