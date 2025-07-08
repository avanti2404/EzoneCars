import React, { useState } from 'react';

const AirportSearch = () => {
    const [sourceCity, setSourceCity] = useState('');
    const [tripType, setTripType] = useState('From the Airport');
    const [location, setLocation] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        // Basic validation
        // if (!sourceCity || !location || !pickupDate || !pickupTime) {
        //     alert('Please fill in all fields.');
        //     return;
        // }

        console.log('Airport Search Data:', {
            sourceCity,
            tripType,
            location,
            pickupDate,
            pickupTime,
        });

        // TODO: navigate or fetch backend data here
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

                {/* Trip Type */}
                <div>
                    <label className="font-semibold text-gray-700">Trip Type</label>
                    <select
                        className="w-full border p-2 rounded mt-1"
                        value={tripType}
                        onChange={(e) => setTripType(e.target.value)}
                    >
                        <option>From the Airport</option>
                        <option>To the Airport</option>
                    </select>
                </div>

                {/* Location Field */}
                <div>
                    <label className="font-semibold text-gray-700">
                        {tripType === 'From the Airport' ? 'Drop Location' : 'Pickup Location'}
                    </label>
                    <input
                        type="text"
                        placeholder="Enter location"
                        className="w-full border p-2 rounded mt-1"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                    />
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

            {/* Submit Button */}
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

export default AirportSearch;
