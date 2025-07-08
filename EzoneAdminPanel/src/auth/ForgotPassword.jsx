import React, { useState } from 'react';
import { ChevronLeft, Car } from "lucide-react";
import { Link } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../App';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async () => {
        try {
            const res = await axios.post(`${backendUrl}/admin/forgot-password`, { email });
            setMessage(res.data.message);
            setError('');
        } catch (err) {
            setMessage('');
            setError(err.response?.data?.message || "Something went wrong");
        }
    };

    return (
        <div className="flex min-h-screen items-center justify-center bg-cover bg-center px-4 py-12 sm:px-6 lg:px-8"
            style={{ backgroundImage: "url('/bg1.jpg')" }}>
            <div className="w-full max-w-md rounded-lg p-6 bg-white shadow-md">
                <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-center gap-2">
                        <Car className="h-6 w-6" />
                        <h1 className="text-2xl font-bold text-primary-blue">Reset Password</h1>
                    </div>
                    <p className="text-center text-sm text-gray-600">Enter your email to receive a password reset link</p>
                </div>

                {message && <p className="text-green-600 text-sm text-center mt-2">{message}</p>}
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <div className='space-y-5 pt-6'>
                    <div className="space-y-2 ">
                        <label className='text-sm font-medium text-primary-blue'>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your email address"
                            className='w-full p-2 outline-none border border-gray-200 text-sm'
                        />
                    </div>

                    <button
                        onClick={handleSubmit}
                        className="w-full bg-primary-blue text-white py-3 text-sm font-medium rounded-lg"
                    >
                        Send Reset Link
                    </button>

                    <Link to='/' className="flex items-center justify-center text-sm font-medium underline-offset-4 hover:underline text-gray-500 ">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;
