import React from "react";
import "./scroll.css";

const BelowMiddle = () => {
    const data = [
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 45, // Assuming progress is a percentage
        },
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 80, // Assuming progress is a percentage
        },
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 20, // Assuming progress is a percentage
        },
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 30, // Assuming progress is a percentage
        },
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 60, // Assuming progress is a percentage
        },
        {
            pass: "12345678",
            brand: "Броко",
            project: "RESTE SPEED",
            nickname: "Sparek Web",
            type: "Blog Post",
            department: "Choywriting",
            progress: 90, // Assuming progress is a percentage
        },
        // Add more data items...
    ];

    const getColorForProgress = (progress) => {
        if (progress >= 90) {
            return "bg-green-500";
        } else if (progress >= 70) {
            return "bg-yellow-500";
        } else if (progress >= 50) {
            return "bg-blue-500";
        } else if (progress >= 30) {
            return "bg-purple-500";
        } else {
            return "bg-red-500";
        }
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 ml-4">
            <div className="w-full md:w-[700px] h-[300px] mb-4 bg-slate-400 rounded-[35px] flex">
                <div className="h-[300px] w-[200px] rounded-tl-[35px] rounded-bl-[35px] bg-gray-800">
                    <div className="text-white">
                        <h1 className="text-white text-center text-[18px] font-bold ">
                            MarketingPasses
                        </h1>
                        <div className="flex flex-col mt-4 px-3 space-y-3 cursor-pointer">
                            <span className="text-[16px]">InProgress</span>
                            <span className="text-[16px]">Up Next</span>
                            <span className="text-[16px]">Drafts</span>
                            <span className="text-[16px]">Next Attention</span>
                            <span className="text-[16px]">Needs Approval</span>
                            <span className="text-[16px]">Completed</span>
                        </div>
                    </div>
                </div>

                <div className="bg-slate-900 w-[500px] rounded-tr-[35px] rounded-br-[35px] p-4 overflow-auto custom-scrollbar">
                    <table className="table-fixed min-w-full rounded-lg shadow-md">
                        <thead className="text-center text-white text-[16px]">
                            <tr>
                                <th className="p-3">#</th>
                                <th className="p-3">Brand</th>
                                <th className="p-3">Project</th>
                                <th className="p-3">Nickname</th>
                                <th className="p-3">Type</th>
                                <th className="p-3">Department</th>
                                <th className="p-3">Progress</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr
                                    key={item.pass}
                                    className="border-b text-white text-[14px] text-nowrap"
                                >
                                    <td className="p-3">{item.pass}</td>
                                    <td className="p-3">{item.brand}</td>
                                    <td className="p-3">{item.project}</td>
                                    <td className="p-3">{item.nickname}</td>
                                    <td className="p-3">{item.type}</td>
                                    <td className="p-3">{item.department}</td>
                                    <td className="p-3">
                                        <div className="h-4 w-full rounded-full overflow-hidden">
                                            <div
                                                className={`h-full ${getColorForProgress(
                                                    item.progress
                                                )}`}
                                                style={{ width: `${item.progress}%` }}
                                            ></div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex justify-center mt-4">
                        <button className=" text-white hover:text-red-400  text-[16px] ">
                            VIEW ALL
                        </button>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-[30px] shadow-md overflow-auto h-[330px] w-[320px] ml-40 text-center">
                <div className="">
                    <div className="text-center h-[40px] w-[320px] bg-gray-400 hover:bg-red-600 cursor-pointer hover:text-white">
                        <h2 className="text-[20px] font-bold mb-2">SCHEDULE COACHING</h2>
                    </div>
                    
                    <h3 className="text-lg mb-2">Upcoming Events</h3>
                    <p className="text-sm mb-4">RSVP for community events</p>
                    <ul className="space-y-7 pl-3">
                        
                        <li className="flex items-center">
                            <span className="text-red-700 font-bold mr-2 text-sm text-nowrap">JAN 25</span>
                            <span className="text-sm text-nowrap">MEMBER PARTY MEETING - 2:PM EST</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-700 font-bold mr-2 text-sm text-nowrap">JAN 25</span>
                            <span className="text-sm text-nowrap">MEMBER PARTY MEETING - 2:PM EST</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-700 font-bold mr-2 text-sm text-nowrap">JAN 25</span>
                            <span className="text-sm text-nowrap">MEMBER PARTY MEETING - 2:PM EST</span>
                        </li>
                        <li className="flex items-center">
                            <span className="text-red-700 font-bold mr-2 text-sm text-nowrap">JAN 25</span>
                            <span className="text-sm text-nowrap">MEMBER PARTY MEETING - 2:PM EST</span>
                        </li>
                        
                    </ul>
                    
                </div>
            </div>
        </div>
    );
};

export default BelowMiddle;
