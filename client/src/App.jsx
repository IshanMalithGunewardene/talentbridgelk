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
                                <h1 className="text-2xl font-bold">
                                    Meet Talent bridge LK
                                </h1>
                                <p className="text-[0.6rem] font-light">
                                    search for better internships or jobs and
                                    learn to qualify
                                </p>
                                <div className="flex h-10 justify-center items-center gap-1 border border-amber-300">
                                    <input
                                        className="border border-gray-300/10 mt-3 rounded-full bg-gray-800 
                                    placeholder:text-[0.5rem] pl-3 pb-2"
                                        placeholder="Search for internships or jobs"
                                    />
                                    <button className="mt-2 px-4 py-1 bg-white rounded-full text-sm font-medium hover:bg-gray-100 transition-colors">
                                        <span className="text-black">
                                            Search
                                        </span>
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
