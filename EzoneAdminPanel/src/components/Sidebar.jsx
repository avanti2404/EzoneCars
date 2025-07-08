import React from 'react';
import { Plus, List } from "lucide-react";
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Sidebar = () => {
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/");
    };

    return (
        <div className='fixed flex flex-col bg-gray-200/50 h-full border-r border-gray-300 w-[18%]'>
            <h1 className='p-6 text-2xl font-semibold text-primary-blue border-b border-gray-300'>Ezone Cars Admin</h1>
            <div className='flex flex-col pt-3 pb-10 h-full justify-between'>
                <div className='flex flex-col gap-1'>
                    <Link to='/add-cars'>
                        <button
                            className={`w-full flex items-center px-6 py-2 ${location.pathname === "/add-cars" ? "bg-gray-300/60" : "hover:bg-gray-200"}`}>
                            <Plus className="mr-2 h-4 w-4" />
                            <span>Add Car</span>
                        </button>
                    </Link>

                    <Link to='/get-cars'>
                        <button
                            className={`w-full flex items-center px-6 py-2 ${location.pathname === "/get-cars" ? "bg-gray-300/60" : "hover:bg-gray-200"}`}>
                            <List className="mr-2 h-4 w-4" />
                            <span>Get Cars</span>
                        </button>
                    </Link>

                    <Link to='/contact-details'>
                        <button
                            className={`w-full flex items-center px-6 py-2 ${location.pathname === "/contact-details" ? "bg-gray-300/60" : "hover:bg-gray-200"}`}>
                            <List className="mr-2 h-4 w-4" />
                            <span>Contact Details</span>
                        </button>
                    </Link>
                </div>

                <button className="bg-primary-blue text-white px-4 py-2 rounded-md transition-colors mx-6" onClick={handleLogout}>
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
