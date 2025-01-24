import { NavBar } from "../Components/Navigation"
import img1 from "../assets/Pictures/emperor.png"
export const HomePage = () => {
    return (
        <>
            <NavBar />
            <div className="border-solid border-black border-[1px] h-[300px] w-full">
                <div className="">
                    <img src={img1} className="h-[100px]" alt="photo" />
                </div>
            </div>
            <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempora asperiores illo minima doloribus nemo error nisi laborum ullam quis consequuntur illum explicabo placeat aliquam dolorem aperiam, esse autem a!
            </div>
        </>
    )
}