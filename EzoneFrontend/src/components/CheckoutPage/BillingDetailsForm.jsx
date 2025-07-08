import React, { useState } from 'react'
import { MapPin, Phone, User, Mail } from "lucide-react"

const BillingDetailsForm = () => {
    const [formData, setFormData] = useState({
        mobileNumber: "",
        email: "",
        fullName: "",
        pickupLocation: "",
        agreeToTerms: false,
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleCheckboxChange = () => {
        setFormData((prev) => ({
            ...prev,
            agreeToTerms: !prev.agreeToTerms,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("Form submitted:", formData)

        // Show success alert
        alert("Form submitted successfully!");

        // Reset form fields
        setFormData({
            mobileNumber: "",
            email: "",
            fullName: "",
            pickupLocation: "",
            agreeToTerms: false,
        });
        // Handle form submission logic here
    }

    return (
        <div className='flex flex-col w-full md:w-[65%] max-h-fit shadow-lg border-0'>
            <div className=' p-5 bg-gray-200/50 border-b border-gray-200'>
                <h1 className='text-3xl font-bold text-primary-blue mb-2'>Billing Details</h1>
                <p className='text-gray-600'>Please enter your contact information</p>
            </div>
            <div className='p-5 '>
                <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <User className="h-4 w-4" />
                                Full Name
                            </label>
                            <input
                                id="fullName"
                                name="fullName"
                                type='text'
                                placeholder="Enter your full name"
                                value={formData.fullName}
                                onChange={handleChange}
                                required
                                className='w-full p-2 outline-none border border-gray-200 text-sm'
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <Phone className="h-4 w-4" />
                                Mobile Number
                            </label>
                            <input
                                id="mobileNumber"
                                type='number'
                                name="mobileNumber"
                                placeholder="Enter your mobile number"
                                value={formData.mobileNumber}
                                onChange={handleChange}
                                required
                                className='w-full p-2 outline-none border border-gray-200 text-sm'
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <Mail className="h-4 w-4" />
                                Email
                            </label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="Enter your email address"
                                value={formData.email}
                                onChange={handleChange}
                                className='w-full p-2 outline-none border border-gray-200 text-sm'
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="flex items-center gap-2 text-sm">
                                <MapPin className="h-4 w-4" />
                                Pickup Location
                            </label>
                            <input
                                id="pickupLocation"
                                type='text'
                                name="pickupLocation"
                                placeholder="Enter pickup location"
                                value={formData.pickupLocation}
                                onChange={handleChange}
                                required
                                className='w-full p-2 outline-none border border-gray-200 text-sm'
                            />
                        </div>
                        <div className="pt-2 space-y-4">
                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    checked={formData.agreeToTerms}
                                    onChange={handleCheckboxChange}
                                    className="w-4 h-4 cursor-pointer border border-gray-400 checked:bg-primary-blue checked:text-white checked:border-primary-blue"
                                />
                                <label htmlFor="terms" className="text-sm">
                                    I agree to the{" "}
                                    <a href="#" className="text-primary hover:underline">
                                        terms and conditions
                                    </a>
                                </label>
                            </div>

                            <button
                                type="submit"
                                className={`w-full md:w-auto px-4 py-2 font-semibold transition-colors ${formData.agreeToTerms
                                    ? "bg-primary-blue text-white"
                                    : "bg-gray-200/70 text-gray-700 cursor-not-allowed"
                                    }`}
                                disabled={!formData.agreeToTerms}
                            >
                                Complete Booking
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BillingDetailsForm