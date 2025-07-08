import { distance } from 'framer-motion';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LocalSearch = () => {
    const navigate = useNavigate();

    const [sourceCity, setSourceCity] = useState('');
    const [packageType, setPackageType] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        // if (!sourceCity || !packageType || !pickupDate || !pickupTime) {
        //     alert("Please fill in all fields.");
        //     return;
        // }

        // Send data to backend or use for search
        console.log("Local Search Data:", {
            sourceCity,
            packageType,
            pickupDate,
            pickupTime,
            packageType
        });

        // Redirect to results (optional)
        navigate(`/cars/local/${sourceCity}/${packageType}`, {state : {distance: 80}})
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Source City */}
                <div>
                    <label className="font-semibold text-gray-700">Source City</label>
                    <input
                        type="text"
                        placeholder="Enter source city"
                        className="w-full border p-2 rounded mt-1"
                        value={sourceCity}
                        onChange={(e) => setSourceCity(e.target.value)}
                    />
                </div>

                {/* Package Type */}
                <div>
                    <label className="font-semibold text-gray-700">Package Type</label>
                    <select
                        className="w-full border p-2 rounded mt-1"
                        value={packageType}
                        onChange={(e) => setPackageType(e.target.value)}
                    >
                        <option value="">Select Package</option>
                        <option value={"8HRS%20%2080KM"}>8HRS / 80KM</option>
                        <option value={"12HRS%20%20120KM"}>12HRS / 120KM</option>
                    </select>
                </div>

                {/* Pickup Date */}
                <div>
                    <label className="font-semibold text-gray-700">Pickup Date</label>
                    <input
                        type="date"
                        className="w-full border p-2 rounded mt-1"
                        value={pickupDate}
                        onChange={(e) => setPickupDate(e.target.value)}
                    />
                </div>

                {/* Pickup Time */}
                <div>
                    <label className="font-semibold text-gray-700">Pickup Time</label>
                    <input
                        type="time"
                        className="w-full border p-2 rounded mt-1"
                        value={pickupTime}
                        onChange={(e) => setPickupTime(e.target.value)}
                    />
                </div>
            </div>

            <div className="mt-6 flex justify-center">
                <button
                    type="submit"
                    className="bg-primary-blue text-white px-6 py-2 text-lg font-semibold rounded hover:bg-blue-700 transition duration-200"
                >
                    Search
                </button>
            </div>
        </form>
    );
};

export default LocalSearch;
