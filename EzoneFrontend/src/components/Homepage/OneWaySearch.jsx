import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Autocomplete,useLoadScript} from '@react-google-maps/api'

const OneWaySearch = () => {
    const navigate = useNavigate();

    window.google = window.google ? window.google : {}

    const [sourceCity, setSourceCity] = useState('');
    const [destinationCity, setDestinationCity] = useState('');
    const [pickupDate, setPickupDate] = useState('');
    const [pickupTime, setPickupTime] = useState('');
    const sourceAutocompleteRef = useRef(null);
    const destinationAutocompleteRef = useRef(null);
    
    const distance = useRef(null);
    const duration = useRef(null);

    /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef()

    /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef()

    const libraries = ['places']

    // google APi for cities    
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API,
        libraries,
    });

    const calcRoute = async () => {
        let city1 = "Mumbai"
        let city2 = "Pune"
        if (originRef.current.value === '' || destinationRef.current.value === '') {
            return
        }
        const directionService = new google.maps.DirectionsService()
        const result = await directionService.route({
            origin: originRef.current.value,
            // origin: city1,
            destination: destinationRef.current.value,
            // destination: city2,
            travelMode: google.maps.TravelMode.DRIVING

        })

        // await setDistance(result.routes[0].legs[0].distance.text)
        distance.current = result.routes[0].legs[0].distance.text
        // await setDuration(result.routes[0].legs[0].duration.text)
        duration.current = result.routes[0].legs[0].duration.text
        console.log("below is dist and dur inside cal route funtion");
        console.log(distance.current,duration.current);
        
        console.log(originRef.current.value);
        console.log(destinationRef.current.value);
        
    }

    const options = {
        componentRestrictions: { country: "in" },
        fields: ["address_components", "geometry", "icon", "name"],
        strictBounds: false,
        types: ["(cities)"]
    };

    const sourceHandlePlaceChanged = () => {
        const place = sourceAutocompleteRef.current.getPlace();

        const addressComponents = place.address_components;

        const city = addressComponents?.find((component) =>
            component.types.includes("locality")
        )?.long_name;

        // Fallback: sometimes "locality" may not exist, use "administrative_area_level_2"
        const fallbackCity = addressComponents?.find((component) =>
            component.types.includes("administrative_area_level_2")
        )?.long_name;

        const finalCity = city || fallbackCity || place.name;

        console.log("Selected City:", finalCity); // This will be just "Pune"
        setSourceCity(finalCity)
        // setSourceCity(finalCity)

        // console.log(sourceCity);
        
    }

    const destinationHandlePlaceChanged = () => {
        const place = destinationAutocompleteRef.current.getPlace();

        const addressComponents = place.address_components;

        const city = addressComponents?.find((component) =>
            component.types.includes("locality")
        )?.long_name;

        // Fallback: sometimes "locality" may not exist, use "administrative_area_level_2"
        const fallbackCity = addressComponents?.find((component) =>
            component.types.includes("administrative_area_level_2")
        )?.long_name;

        const finalCity = city || fallbackCity || place.name;

        console.log("Selected City:", finalCity); // This will be just "Pune"
        // setSourceCity(finalCity)
        setDestinationCity(finalCity)
        // console.log(sourceCity);
        
    }


    const handleSubmit = async() => {
        
       
        // Basic validation
        // if (!sourceCity || !destinationCity || !pickupDate || !pickupTime) {
        //     alert("Please fill in all fields.");
        //     return;
        // }
        await calcRoute()
        console.log("Below is distance and duration ");
        
        console.log(distance);
        const index = distance.current.indexOf(' ');
        let dist =  Math.ceil(distance.current.substring(0, index));
        console.log(dist);
        
        // console.log(duration);
        

        console.log("One Way Search Data:", {
            sourceCity,
            destinationCity,
            pickupDate,
            pickupTime,
            dist,
        });

        // Navigate to car results page
        navigate(`/cars/oneway/${sourceCity}`, { state: { distance:dist,duration:duration.current }});
    };

    return (
        isLoaded ? 
        // <form onSubmit={handleSubmit} className="mt-6">
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {/* Source City */}
                <div>
                    <label className="font-semibold text-gray-700">Source City</label>
                    {/* <input
                        type="text"
                        placeholder="Enter source city"
                        className="w-full border p-2 rounded mt-1"
                        value={sourceCity}
                        onChange={(e) => setSourceCity(e.target.value)}
                        /> */}
                    <Autocomplete options={options} onPlaceChanged={sourceHandlePlaceChanged} onLoad={(autocomplete) => (sourceAutocompleteRef.current = autocomplete)}>
                        <input type="text" ref={originRef} placeholder="Enter source city" 
                        // onChange={(e) => setSourceCity(e.target.value)}
                        className="w-full border p-2 rounded mt-1"/>
                    </Autocomplete>
                </div>

                {/* Destination City */}
                <div>
                    <label className="font-semibold text-gray-700">Destination City</label>
                    <Autocomplete options={options} onPlaceChanged={destinationHandlePlaceChanged} onLoad={(autocomplete) => (destinationAutocompleteRef.current = autocomplete)}>
                        <input type="text" ref={destinationRef} placeholder="Enter Destination City"
                        className="w-full border p-2 rounded mt-1"/>
                    </Autocomplete>
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
                    onClick={handleSubmit}
                    className="bg-primary-blue text-white px-6 py-2 text-lg font-semibold rounded hover:bg-blue-700 transition duration-200"
                >
                    Search
                </button>
            </div>
        </div>
        // </form>
         : (
            <div>Wait for response</div>
        )
    );
};

export default OneWaySearch;
