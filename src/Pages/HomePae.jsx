import { NavBar } from "../Components/Navigation"
import { Carousal } from "../Components/Carousel"
import img1 from "../assets/Pictures/emperor.png"
export const HomePage = () => {
    return (
        <>
            <div className="h-[400px] w-full relative z-10">
                <NavBar />
                <div className="relative relative top-3">
                    <center>
                        <input type="text" placeholder="search..." className="border-solid border-black border-[1px]" />
                    </center>
                </div>
                <div className="h-[350px] w-full absolute top-[150px] z-[1] bg-white">
                    <Carousal />
                </div>
            </div>

            {/* This div should remain in the normal document flow */}
            <div className="relative">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut ratione et necessitatibus neque ducimus assumenda ipsam at animi perferendis quia deserunt itaque obcaecati, debitis unde ipsum illo, nostrum ea tenetur.
            </div>


        </>
    )
}