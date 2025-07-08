import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronLeft, CalendarDays, Car, MapPin } from "lucide-react"
import BillingDetailsForm from '../components/CheckoutPage/BillingDetailsForm'

const Checkout = () => {

    // Sample car details (would come from props or context in a real app)
    const carDetails = {
        name: "Toyota Camry",
        tripFor: "New York City → Boston",
        tripType: "One Way",
        pickupDateTime: "15 Mar 2025 - 10:30 AM",
        totalFare: "2100",
    }

    return (
        <div className="min-h-screen flex flex-col w-full">
            <div className="bg-primary-blue text-white py-4">
                <div className="containerr max-w-6xl mx-auto px-4">
                    <Link to='/' className="flex items-center text-sm font-medium hover:underline w-fit">
                        <ChevronLeft className="h-4 w-4 mr-1" />
                        Back to Home
                    </Link>
                </div>
            </div>

            <div className='containerr w-full flex flex-col md:flex-row gap-8 py-10 md:py-16'>
                <BillingDetailsForm/>

                <div className='flex flex-col w-full md:w-[35%] bg-gray-200/50'>
                    <div className='p-5 border-b border-gray-300'>
                        <h1 className='text-2xl font-bold text-primary-blue'>Selected Car</h1>
                    </div>

                    <div className='p-5 flex flex-col gap-5'>
                        <div className="relative w-full h-48 bg-white rounded-lg overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1502877338535-766e1452684a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyfGVufDB8fDB8fHww"
                                alt="Toyota Camry"
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <h3 className="text-xl font-bold text-center">{carDetails.name}</h3>
                        <hr className='border-1 border-gray-300'></hr>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3">
                                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Trip For</p>
                                    <p className="font-medium">{carDetails.tripFor}</p>
                                </div> 
                            </div>

                            <div className="flex items-start gap-3">
                                <Car className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Trip Type</p>
                                    <p className="font-medium">{carDetails.tripType}</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-3">
                                <CalendarDays className="h-5 w-5 text-primary mt-0.5" />
                                <div>
                                    <p className="text-sm font-medium">Pickup Date & Time</p>
                                    <p className="font-medium">{carDetails.pickupDateTime}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-primary-blue text-white flex justify-between py-5 px-5'>
                        <span className="font-medium">Total Fare</span>
                        <span className="text-2xl font-bold">₹{carDetails.totalFare}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Checkout