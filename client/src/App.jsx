import React from "react";
import Navbar from "./assets/components/Navbar.jsx";

function App() {
    return (
        <div>
            {/* parent wrapper 01 */}
            <div className="h-screen w-screen border-2 pt-5 border-red-500 ">
                {/* background blobs */}
                <div className="flex justify-center items-center opacity-88 w-full h-auto absolute top-51 border border-amber-400">
                    <div className="w-50 h-53 bg-purple-800 rounded-full blur-3xl z-10 relative left-14 bottom-13"></div>
                    <div className="w-50 h-40 bg-blue-800 rounded-full blur-3xl z-10"></div>
                </div>
                {/* parent wrapper 02 */}
                <div className="w-[90vw] mx-auto border-4 border-blue-500 h-full flex flex-col relative">
                    {/* navigation bar 03 */}
                    <nav className="absolute top-0 left-0 z-40 w-full border-2 p-2">
                        <Navbar />
                    </nav>
                    {/* introduction and landing page image */}
                    <div className="flex flex-col h-full border-3 border-orange-500">
                        {/* top */}
                        <div className="flex-3  border-4 border-green-500">
                            <div className="flex flex-col justify-center items-center h-full">
                                <h1 className="text-3xl md:text-4xl font-semibold mb-2">
                                    Meet Talentbridge LK
                                </h1>
                                <p className="text-sm md:text-base text-gray-300 mb-6">
                                    Search for better intern or job and learn to be qualified
                                </p>
                                <div className="flex justify-center items-center bg-white/10 backdrop-blur-md rounded-full p-1 border border-gray-500/30 w-full max-w-md">
                                    <input
                                    type="text"
                                    className="flex-grow bg-transparent text-white placeholder:text-gray-300 text-sm md:text-base pl-4 py-2 rounded-full focus:outline-none"
                                    placeholder="Find any job or intern you want"
                                    />
                                    <button className="bg-white text-black rounded-full px-6 py-2 font-medium text-sm hover:bg-gray-100 shadow-md transition-all duration-300">
                                    Search
                                    </button>
                                </div>
                            </div>
                        </div>
                        {/* bottom */}
                        <div className="flex flex-1 flex-col justify-center items-center border-4 border-purple-500">
                            <div className=" w-[75vw] ">
                                <div className="text-[0.6rem] mb-1.5 font-light">
                                    Trending Internships/Jobs
                                </div>
                            </div>
                            <div className="flex items-center justify-center gap-2 w-[75vw] h-[12vw] rounded bg-white/8 border border-white/2">
                                <div className="flex justify-center items-center w-[20vw] h-[9vw] rounded text-black text-[0.6rem] font-bold bg-white border border-white/2">
                                    DevOps Engineer
                                </div>
                                <div className="flex justify-center items-center w-[20vw] h-[9vw] rounded text-black text-[0.6rem] font-bold bg-white border border-white/2">
                                    DevOps Engineer
                                </div>
                                <div className="flex justify-center items-center w-[20vw] h-[9vw] rounded text-black text-[0.6rem] font-bold bg-white border border-white/2">
                                    DevOps Engineer
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
