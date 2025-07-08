import { useState } from "react";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { Link } from "react-router-dom";

const CarCard = ({ car }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [activeTab, setActiveTab] = useState("fareBreakup");
    const temp = car.TT
    

    // const index = car.dist.indexOf(' ');
    let runningDist =  car.dist
    let chargedDist = runningDist*2 // for oneway and it will affect other triptypes

    let BaseFare = Number(car.tripType[temp].ratePerKm) * chargedDist
    let dA = Number(car.tripType[temp].dA) 

    let GST = Math.ceil(BaseFare*0.05)
    

    // console.log(car.tripType.oneway.minimumKmPD);
    
    const toggleDetails = () => {
        setIsExpanded(!isExpanded);
    };

    const renderTabContent = () => {
        if (activeTab === "fareBreakup") {
            if (car.TT === "local") {
                return (
                    <div className="flex flex-col gap-2">
                        <div className="flex justify-between py-2">
                            <span>Base Fare</span>
                            <span>Rs.</span>
                        </div>
                        <div className="flex justify-between py-2 border-b">
                            <span>GST(5%)</span>
                            <span>Rs.{car.gst}</span>
                        </div>
                        <div className="flex justify-between pb-2 font-bold">
                            <span>Total Fare</span>
                            <span>Rs.{car.totalFare}</span>
                        </div>
                    </div>
                );
            }

            if (car.TT === "oneway" || car.TT === "roundTrip") {
                return (  
                    <div className="grid grid-cols-2 gap-10 text-sm">
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span>Rate/Km</span>
                                 <span className="text-gray-600">Rs. {car.tripType[temp].ratePerKm}/Km</span>
                            </div>
                            {car.TT === "roundTrip" && (
                                <div className="flex justify-between">
                                    <span>No. of Days</span>
                                    <span className="text-gray-600">{car.noOfDays}</span>
                                </div>
                            )}
                            <div className="flex justify-between">
                                <span>Minimum Km/Day</span>
                                <span className="text-gray-600">{car.tripType[temp].minimumKmPD}Km</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Running Distance</span>
                                <span className="text-gray-600">{runningDist}Km</span>
                                {/* <span className="text-gray-600">{Math.ceil(Number(car.dist))}Km</span> */}
                            </div>
                            <div className="flex justify-between">
                                <span>Charged Distance</span>
                                <span className="text-gray-600">{chargedDist}Km</span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex justify-between">
                                <span>Base Fare</span>
                                <span className="text-gray-600">Rs.{BaseFare}</span>
                            </div>
                            <div className="flex justify-between">
                                <span>GST(5%)</span>
                                <span className="text-gray-600">Rs.{GST}</span>   
                            </div>
                            <div className="flex justify-between">
                                <span>Driver Allowances</span>
                                <span className="text-gray-600">Rs.{dA}</span>
                            </div>
                            <div className="col-span-2 border-t pt-2 flex justify-between font-bold">
                                <span>Total Fare</span>
                                <span>Rs.{BaseFare+GST+dA}</span>
                            </div>
                        </div>
                    </div>
                );
            }
        }

        if (activeTab === "exclusion") {
            return <p>✔ Toll, Parking, etc., not included in the price.</p>;
        }

        if (activeTab === "extraCharges") {
            return <p>✔ Extra driver allowance if cab used before 6 AM & after 10 PM.</p>;
        }

        if (activeTab === "terms") {
            return <p>✔ Both extra hours and km are applicable.</p>;
        }

        return null;
    };


    return (
        <div className="w-full max-w-4xl bg-white shadow-sm border p-3 md:p-4">
            {/* Car Card */}
            <div className="flex justify-between gap-2 md:gap-4">
                {/* Left section - Car image */}
                <div className="flex-shrink-0 w-32 h-32 hidden md:block">
                    <img
                        src={car.images[0]}
                        alt="Maruti Swift Dzire"
                        className="w-full h-full object-contain"
                    />
                </div>

                {/* Middle section - Car details */}
                <div className="flex-grow">
                    <h2 className="md:text-xl font-bold mb-2">{car.carName}</h2>
                    <div className="mb-3 px-2 md:py-1 text-xs border border-gray-300 w-fit">
                        {car.carType}
                    </div>

                    <div className="space-y-2">
                        <div className="flex items-center gap-1 md:gap-3 text-sm md:text-base">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-100 flex items-center justify-center border border-gray-500">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                            </div>
                            <div className="flex gap-4">
                                <span className="font-medium ">Packages</span>
                                <span className="text-gray-600"></span>
                            </div>

                        </div>

                        <div className="flex items-center gap-1 md:gap-3 text-sm md:text-base">
                            <div className="w-4 h-4 md:w-5 md:h-5 rounded-full bg-gray-100 flex items-center justify-center border border-gray-500">
                                <Check className="w-3 h-3 md:w-4 md:h-4 text-gray-500" />
                            </div>
                            <div className="flex gap-4">
                                <span className="font-medium">Charged</span>
                                <span className="text-gray-600">{chargedDist} Km</span>
                            </div>
                            <button
                                onClick={toggleDetails}
                                className=" md:flex items-center text-primary-blue hover:text-blue-700 transition-colors hidden"
                            >
                                {isExpanded ? (
                                    <>
                                        Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                                    </>
                                ) : (
                                    <>
                                        View Details <ChevronDown className="ml-1 h-4 w-4" />
                                    </>
                                )}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Right section - Price and booking */}
                <div className="flex flex-col justify-between md:justify-start text-center">
                    <div className=" mb-2">
                        <span className="text-lg md:text-2xl font-bold">₹{BaseFare+GST+dA}</span>
                        <p className="text-xs md:text-sm text-gray-600">Inc. GST & DA</p>
                    </div>
                    <Link to='/cars/checkout'><button className="bg-primary-blue text-white px-6 py-2 text-sm mb-2">
                        Book Now
                    </button></Link>
                    <button
                        onClick={toggleDetails}
                        className="flex justify-center text-primary-blue  md:hidden text-sm"
                    >
                        {isExpanded ? (
                            <>
                                Hide Details <ChevronUp className="ml-1 h-4 w-4" />
                            </>
                        ) : (
                            <>
                                View Details <ChevronDown className="ml-1 h-4 w-4" />
                            </>
                        )}
                    </button>
                </div>
            </div>

            {/* Expanded Details Section (Now Below the Card) */}
            {isExpanded && (
                <div className="mt-3 border-t border-gray-200 p-3 ">
                    <div className="flex flex-wrap gap-3 text-sm">
                        <button
                            className={`px-3 py-1 md:py-2 ${activeTab === "fareBreakup" ? "bg-primary-blue text-white" : "text-primary-blue"}`}
                            onClick={() => setActiveTab("fareBreakup")}
                        >
                            Fare Breakup
                        </button>
                        <button
                            className={`px-3 py-1 md:py-2  ${activeTab === "exclusion" ? "bg-primary-blue text-white" : "text-primary-blue"}`}
                            onClick={() => setActiveTab("exclusion")}
                        >
                            Exclusion
                        </button>
                        <button
                            className={`px-3 py-1 md:py-2  ${activeTab === "extraCharges" ? "bg-primary-blue text-white" : "text-primary-blue"}`}
                            onClick={() => setActiveTab("extraCharges")}
                        >
                            Extra Charges
                        </button>
                        <button
                            className={`px-3 py-1 md:py-2  ${activeTab === "terms" ? "bg-primary-blue text-white" : "text-primary-blue"}`}
                            onClick={() => setActiveTab("terms")}
                        >
                            Terms & Conditions
                        </button>
                    </div>

                    <div className="mt-2 text-gray-600  text-sm">{renderTabContent()}</div>
                </div>
            )}
        </div>
    );
};

export default CarCard;
