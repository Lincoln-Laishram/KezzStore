import img from "../assets/Pictures/mlbb.webp"

export const Loader = () => {
    return (
        <>
            <div className="h-screen flex flex-col justify-center items-center">
                <img src={img} alt="img" className="h-24 w-24 mb-10" />
                <div className="flex flex-row gap-2 items-center justify-center">
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.3s]"></div>
                    <div className="w-4 h-18 rounded-full bg-blue-700 animate-bounce [animation-delay:.7s]"></div>
                </div>
            </div>

        </>
    )
}