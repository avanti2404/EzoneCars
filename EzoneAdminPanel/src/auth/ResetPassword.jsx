import React, { useState } from 'react';
import { Car } from "lucide-react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { backendUrl } from '../App';

const ResetPassword = () => {
    const { token } = useParams();
    const navigate = useNavigate();

    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');

    const handleReset = async () => {
        if (password !== confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        try {
            const res = await axios.post(`${backendUrl}/admin/reset-password/${token}`, { password });
            setMessage(res.data.message);
            setError('');
            setTimeout(() => navigate('/'), 3000); // Redirect after 3 seconds
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
                        <h1 className="text-2xl font-bold text-primary-blue">Set New Password</h1>
                    </div>
                    <p className="text-center text-sm text-gray-600">Enter your new password below</p>
                </div>

                {message && <p className="text-green-600 text-sm text-center mt-2">{message}</p>}
                {error && <p className="text-red-500 text-sm text-center mt-2">{error}</p>}

                <div className='space-y-5 pt-6'>
                    <div className="space-y-2 ">
                        <label className='text-sm font-medium text-primary-blue'>New Password</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Enter new password"
                            className='w-full p-2 outline-none border border-gray-200 text-sm'
                        />
                    </div>

                    <div className="space-y-2 ">
                        <label className='text-sm font-medium text-primary-blue'>Confirm Password</label>
                        <input
                            type="password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            placeholder="Confirm new password"
                            className='w-full p-2 outline-none border border-gray-200 text-sm'
                        />
                    </div>

                    <button
                        onClick={handleReset}
                        className="w-full bg-primary-blue text-white py-3 text-sm font-medium rounded-lg"
                    >
                        Reset Password
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;
