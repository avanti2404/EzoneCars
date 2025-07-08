import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Car } from "lucide-react";
import axios from 'axios';
import { backendUrl } from "../App";

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post(`${backendUrl}/admin/login`, { email, password });
            // Save token to localStorage
            localStorage.setItem("adminToken", res.data.token);
            navigate("/add-cars");
        } catch (err) {
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8"
            style={{ backgroundImage: "url('/bg1.jpg')" }}>
            <div className="w-full max-w-md rounded-lg p-6 bg-white shadow-m">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-2">
                        <Car className="h-6 w-6" />
                        <h1 className="text-2xl font-bold text-primary-blue">Car Rental Admin</h1>
                    </div>
                    <p className="text-center text-sm text-gray-600">Enter your credentials to access the admin panel</p>
                </div>

                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <form className="space-y-4 py-6" onSubmit={handleSubmit}>
                    <div className="space-y-2">
                        <label className='text-sm font-medium text-primary-blue'>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className='w-full p-2 outline-none border border-gray-200 text-sm'
                        />
                    </div>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between">
                            <label className='text-sm font-medium text-primary-blue'>Password</label>
                            <Link to="/forgot-password" className="text-sm font-medium underline-offset-4 hover:underline text-primary-blue">
                                Forgot password?
                            </Link>
                        </div>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className='w-full p-2 outline-none border border-gray-200 text-sm'
                            placeholder='Enter your password'
                            required
                        />
                    </div>
                    <div className="flex items-center space-x-2">
                        <input type="checkbox" className="w-4 h-4 cursor-pointer border border-gray-400" />
                        <label className="text-sm font-medium text-primary-blue">Remember me</label>
                    </div>

                    <button type="submit" className="w-full bg-primary-blue text-white py-3 rounded-lg">
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
