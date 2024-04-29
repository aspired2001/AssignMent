
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";

const Navbar = () => {
    return (
        <nav className="flex items-center justify-between py-4 px-6 bg-transparent">
            {/* Overview */}
            <div className="text-white font-bold text-2xl">
                <span>Overview</span>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
                {/* Message Icon */}
                <HiOutlineMail className="text-white" size={44} />

                {/* Search Input Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="bg-white rounded-full pl-12 pr-2 py-1 text-gray-800 focus:outline-none"
                    />
                    <AiOutlineSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800" size={24} />
                </div>

                {/* Profile Bar */}
                <div className="flex items-center space-x-2">
                    {/* Profile Image */}
                    <img
                        src="assets/ashley.png"
                        alt="Profile"
                        className="h-8 w-8 rounded-full border-2 border-white"
                    />

                    {/* Profile Text */}
                    <div className="flex items-center space-x-1 text-white ">
                        <span>Ashley W</span>
                        <MdKeyboardArrowDown size={24} />
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
