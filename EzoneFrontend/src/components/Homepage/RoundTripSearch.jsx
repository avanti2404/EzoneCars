// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const RoundTripSearch = () => {
//     const navigate = useNavigate();

//     const [sourceCity, setSourceCity] = useState('');
//     const [destinationCities, setDestinationCities] = useState(['']);
//     const [pickupDate, setPickupDate] = useState('');
//     const [pickupTime, setPickupTime] = useState('');
//     const [dropDate, setDropDate] = useState('');

//     const handleSubmit = (e) => {
//         e.preventDefault();

//         // Basic validation
//         // if (!sourceCity || destinationCities.some(city => city === '') || !pickupDate || !pickupTime || !dropDate) {
//         //     alert("Please fill in all fields.");
//         //     return;
//         // }

//         console.log("Round Trip Search Data:", {
//             sourceCity,
//             destinationCities,
//             pickupDate,
//             pickupTime,
//             dropDate
//         });

//         navigate(`/cars/roundtrip/${sourceCity}`);
//     };

//     const addDestinationCity = () => {
//         setDestinationCities([...destinationCities, '']);
//     };

//     const removeDestinationCity = (index) => {
//         setDestinationCities(destinationCities.filter((_, i) => i !== index));
//     };

//     const handleDestinationCityChange = (index, value) => {
//         const updatedCities = [...destinationCities];
//         updatedCities[index] = value;
//         setDestinationCities(updatedCities);
//     };

//     return (
//         <form onSubmit={handleSubmit} className="mt-6">
//             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
//                 {/* Source City */}
//                 <div>
//                     <label className="font-semibold text-gray-700">Source City</label>
//                     <input
//                         type="text"
//                         placeholder="Enter source city"
//                         className="w-full border p-2 rounded mt-1"
//                         value={sourceCity}
//                         onChange={(e) => setSourceCity(e.target.value)}
//                     />
//                 </div>

//                 {/* Destination Cities */}
//                 {destinationCities.map((city, index) => (
//                     <div key={index}>
//                         <label className="font-semibold text-gray-700">Destination City {index + 1}</label>
//                         <div className="flex items-center gap-2 mt-1">
//                             <input
//                                 type="text"
//                                 placeholder="Enter destination city"
//                                 className="w-full border p-2 rounded"
//                                 value={city}
//                                 onChange={(e) => handleDestinationCityChange(index, e.target.value)}
//                             />
//                             {index > 0 && (
//                                 <button
//                                     type="button"
//                                     onClick={() => removeDestinationCity(index)}
//                                     className="text-red-500 hover:text-red-700"
//                                     title="Remove"
//                                 >
//                                     <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                         <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
//                                     </svg>
//                                 </button>
//                             )}
//                             <button
//                                 type="button"
//                                 onClick={addDestinationCity}
//                                 className="text-primary-blue hover:text-blue-700"
//                                 title="Add"
//                             >
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
//                                 </svg>
//                             </button>
//                         </div>
//                     </div>
//                 ))}

//                 {/* Pickup Date */}
//                 <div>
//                     <label className="font-semibold text-gray-700">Pickup Date</label>
//                     <input
//                         type="date"
//                         className="w-full border p-2 rounded mt-1"
//                         value={pickupDate}
//                         onChange={(e) => setPickupDate(e.target.value)}
//                     />
//                 </div>

//                 {/* Pickup Time */}
//                 <div>
//                     <label className="font-semibold text-gray-700">Pickup Time</label>
//                     <input
//                         type="time"
//                         className="w-full border p-2 rounded mt-1"
//                         value={pickupTime}
//                         onChange={(e) => setPickupTime(e.target.value)}
//                     />
//                 </div>

//                 {/* Drop Date */}
//                 <div>
//                     <label className="font-semibold text-gray-700">Drop Date</label>
//                     <input
//                         type="date"
//                         className="w-full border p-2 rounded mt-1"
//                         value={dropDate}
//                         onChange={(e) => setDropDate(e.target.value)}
//                     />
//                 </div>
//             </div>

//             {/* Submit Button */}
//             <div className="mt-6 flex justify-center">
//                 <button
//                     type="submit"
//                     className="bg-primary-blue text-white px-6 py-2 text-lg font-semibold rounded hover:bg-blue-700 transition duration-200"
//                 >
//                     Search
//                 </button>
//             </div>
//         </form>
//     );
// };

// export default RoundTripSearch;




import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Autocomplete, useLoadScript } from '@react-google-maps/api';

const RoundTripSearch = () => {
    const navigate = useNavigate();
    const [sourceCity, setSourceCity] = useState('');
    const [destinationCities, setDestinationCities] = useState(['']);
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const [dropDate, setDropDate] = useState('');
    let distance;

    const sourceAutocompleteRef = useRef(null);
    const destinationRefs = useRef([]);
    const originRef = useRef();

    const distances = useRef([]);
    const durations = useRef([]);

    const libraries = ['places'];

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
        libraries,
    });

    const options = {
        componentRestrictions: { country: "in" },
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
        types: ["(cities)"]
    };

    const extractCityName = (place) => {
        const addressComponents = place.address_components;
        const city = addressComponents?.find((c) => c.types.includes("locality"))?.long_name;
        const fallbackCity = addressComponents?.find((c) => c.types.includes("administrative_area_level_2"))?.long_name;
        return city || fallbackCity || place.name;
    };

    const sourceHandlePlaceChanged = () => {
        const place = sourceAutocompleteRef.current.getPlace();
        setSourceCity(extractCityName(place));
    };

    const destinationHandlePlaceChanged = (index) => {
        const place = destinationRefs.current[index].getPlace();
        const updatedCities = [...destinationCities];
        updatedCities[index] = extractCityName(place);
        setDestinationCities(updatedCities);
    };

    const addDestinationCity = () => {
        setDestinationCities([...destinationCities, '']);
    };

    const removeDestinationCity = (index) => {
        setDestinationCities(destinationCities.filter((_, i) => i !== index));
        destinationRefs.current.splice(index, 1); // Remove corresponding ref
    };

    // const calcRoutes = async () => {
    //     const directionService = new google.maps.DirectionsService();
    //     distances.current = [];
    //     durations.current = [];

    //     for (let city of destinationCities) {
    //         const result = await directionService.route({
    //             origin: originRef.current.value,
    //             destination: city,
    //             travelMode: google.maps.TravelMode.DRIVING,
    //         });
    //         distances.current.push(result.routes[0].legs[0].distance.text);
    //         durations.current.push(result.routes[0].legs[0].duration.text);
    //     }
    // };
    const calcRoutes = async () => {
        const directionService = new google.maps.DirectionsService();
        distances.current = [];
        durations.current = [];
    
        let currentOrigin = originRef.current.value;
    
        for (let i = 0; i < destinationCities.length; i++) {
            const destination = destinationCities[i];
            const result = await directionService.route({
                origin: currentOrigin,
                destination,
                travelMode: google.maps.TravelMode.DRIVING,
            });
    
            distances.current.push(result.routes[0].legs[0].distance.text);
            durations.current.push(result.routes[0].legs[0].duration.text);
    
            // Update origin for next leg
            currentOrigin = destination;
        }
    };

    const forDistance = async(arr) => {
       
            return arr.map(str => {
              const index = str.indexOf(' ');
              return index === -1 ? str : str.substring(0, index);
            });
          
          
    };
    


    const handleSubmit = async () => {
        await calcRoutes();
        distance= await forDistance(distances.current);
        const dist = distance.reduce((total, num) => total + Number(num), 0);
        console.log(dist);

        
        
        

        console.log("Round Trip Data:", {
            sourceCity,
            destinationCities,
            pickupDate,
            pickupTime,
            dropDate,
            distance:dist,
            durations: durations.current,
            
        });

        navigate(`/cars/roundtrip/${sourceCity}`, {
            state: {
                destinationCities,
                pickupDate,
                pickupTime,
                dropDate,
                distance: dist,
                duration: durations.current,
                temp:"RED"
            }
        });
    };

    return isLoaded ? (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Source City */}
                <div>
                    <label className="font-semibold text-gray-700">Source City</label>
                    <Autocomplete options={options} onPlaceChanged={sourceHandlePlaceChanged} onLoad={(autocomplete) => (sourceAutocompleteRef.current = autocomplete)}>
                        <input type="text" ref={originRef} placeholder="Enter source city" className="w-full border p-2 rounded mt-1" />
                    </Autocomplete>
                </div>

                {/* Destination Cities */}
                {destinationCities.map((city, index) => (
                    <div key={index}>
                        <label className="font-semibold text-gray-700">Destination City {index + 1}</label>
                        <div className="flex items-center gap-2 mt-1">
                            <Autocomplete
                                options={options}
                                onPlaceChanged={() => destinationHandlePlaceChanged(index)}
                                onLoad={(autocomplete) => (destinationRefs.current[index] = autocomplete)}
                            >
                                <input type="text" placeholder="Enter destination city" className="w-full border p-2 rounded" />
                            </Autocomplete>
                            {index > 0 && (
                                <button type="button" onClick={() => removeDestinationCity(index)} className="text-red-500 hover:text-red-700">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
                                    </svg>
                                </button>
                            )}
                            <button type="button" onClick={addDestinationCity} className="text-primary-blue hover:text-blue-700">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                                </svg>
                            </button>
                        </div>
                    </div>
                ))}

                {/* Pickup Date */}
                <div>
                    <label className="font-semibold text-gray-700">Pickup Date</label>
                    <input type="date" className="w-full border p-2 rounded mt-1" value={pickupDate} onChange={(e) => setPickupDate(e.target.value)} />
                </div>

                {/* Pickup Time */}
                <div>
                    <label className="font-semibold text-gray-700">Pickup Time</label>
                    <input type="time" className="w-full border p-2 rounded mt-1" value={pickupTime} onChange={(e) => setPickupTime(e.target.value)} />
                </div>

                {/* Drop Date */}
                <div>
                    <label className="font-semibold text-gray-700">Drop Date</label>
                    <input type="date" className="w-full border p-2 rounded mt-1" value={dropDate} onChange={(e) => setDropDate(e.target.value)} />
                </div>
            </div>

            {/* Submit Button */}
            <div className="mt-6 flex justify-center">
                <button
                    type="button"
                    onClick={handleSubmit}
                    className="bg-primary-blue text-white px-6 py-2 text-lg font-semibold rounded hover:bg-blue-700 transition duration-200"
                >
                    Search
                </button>
            </div>
        </div>
    ) : (
        <div>Wait for response</div>
    );
};

export default RoundTripSearch;
