import React from "react";
import { AiOutlineSend } from "react-icons/ai";

const Middle = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-4 mt-12">
            {/* First div */}
            <div className="w-full md:w-[400px] h-[260px] rounded-xl bg-white p-8 flex flex-col justify-between mt-4">
                {/* Welcome Message */}
                <div className="mb-8">
                    <h1 className="font-bold text-4xl mb-2">Welcome Ashley</h1>
                    <p className="text-2xl text-gray-600">Let&apos;s make something amazing!</p>
                </div>

                {/* Image, Search Input Bar, and Send Button */}
                <div className="flex items-center justify-between">
                    {/* Image */}
                    <div className="flex items-center">
                        <img src="assets/SalesGuy.svg" alt="Your Image" className="w-16 h-16 rounded-full" />
                    </div>

                    {/* Search Input Bar */}
                    <div className="flex items-center flex-col">
                        <p className="text-xs text-gray-500 mr-10 mb-2">How can I help you today?</p>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-white rounded-full px-4 py-2 focus:outline-none focus:ring-2  w-[200px] shadow-md"
                        />
                    </div>

                    {/* Send Button */}
                    <button className="bg-red-700 mt-4 ml-3 text-white px-4 py-2 rounded-full focus:outline-none">
                        <AiOutlineSend size={24} className="text-white" />
                    </button>
                </div>
            </div>

            {/* Second div */}
            <div className="w-full md:w-[300px] h-[260px] mt-3 rounded-xl bg-transparent border border-gray-300 p-4 flex flex-col">
                {/* MyBrands Header */}
                <h2 className="text-lg text-white font-bold mb-4">MyBrands</h2>

                {/* Images and Text */}
                <div className="flex justify-between flex-col">
                    {/* Item 1 */}
                    <div className="flex items-center gap-16 border-t-2 border-b-2">
                        <img src="assets/smart.png" alt="Image 1" className="w-24 h-16 rounded-[20px]" />
                        <p className="ml-2 font-bold text-white">Lvl 55</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-16 border-t-2 border-b-2">
                        <img src="assets/fedex.png" alt="Image 2" className="w-24 h-16 rounded-[20px]" />
                        <p className="ml-2 font-bold text-white">Lvl 55</p>
                    </div>

                    {/* Item 3 */}
                    <div className="flex items-center gap-16">
                        <img src="assets/spacex.png" alt="Image 3" className="w-24 h-16 rounded-[20px]" />
                        <p className="ml-2 font-bold pb-2 text-white">Lvl 55</p>
                    </div>
                </div>
            </div>

            {/* Third div */}
            <div className="w-full md:w-[300px] h-[250px] mt-3 rounded-xl bg-transparent border border-gray-300 p-4 flex flex-col">
                {/* MyBrands Header */}
                <h2 className="text-lg text-white font-bold mb-4">MyProducts</h2>

                {/* Images and Text */}
                <div className="flex justify-between flex-col border-b-2 border-t-2">
                    {/* Item 1 */}
                    <div className="flex items-center gap-16 border-b-2">
                        <img src="assets/smart.png" alt="Image 1" className="w-24 h-16 rounded-[20px]" />
                        <p className="ml-2 font-bold text-white">4/5</p>
                    </div>

                    {/* Item 2 */}
                    <div className="flex items-center gap-16">
                        <img src="assets/fedex.png" alt="Image 2" className="w-24 h-16 rounded-[20px]" />
                        <p className="ml-2 font-bold text-white">3/5</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Middle;
