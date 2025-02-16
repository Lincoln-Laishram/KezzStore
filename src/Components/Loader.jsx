import img from "../assets/Pictures/mlbb.webp"

export const Loader = () => {
    return (
        <>
            <div>
                <img src={img} alt="img" className="h-24 w-24 mx-[auto] relative top-10"/>
                <div className="flex flex-row gap-2 items-center justify-center p-20">
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>
        </>
    )
}