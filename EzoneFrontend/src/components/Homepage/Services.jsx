import React from 'react'
import { User, Calendar, Car, Plane } from "lucide-react"

const Services = () => {
    const services = [
        { title: "Self-Drive Car Rentals", description: "Enjoy the freedom of driving your own rental car with our flexible self-drive options. Choose from a variety of vehicles to suit your needs.", icon: Car },
        { title: "Chauffeur-Driven Rentals", description: "Sit back and relax while our professional drivers take you to your destination. Ideal for business trips, city tours, or special occasions.", icon: User },
        { title: "Airport Transfers", description: "Get hassle-free airport pickups and drop-offs with our reliable and punctual transfer services. Perfect for travelers who need a seamless ride.", icon: Plane },
        { title: "Long-Term Car Leasing", description: "Need a vehicle for an extended period? Our affordable monthly car leasing plans are designed for businesses, professionals, and expats.", icon: Calendar }
    ];
    return (
        <section id='services' className="mb-10 md:mb-16 relative bg-cover bg-center h-full md:h-[400px] flex items-center text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww')" }}>
            <div className=" absolute inset-0 bg-blue-950/80"></div>
            <div className="containerr relative z-10 text-center py-5 lg:py-0">
                <h2 className="text-3xl font-bold font-heading mb-12">OUR SERVICES</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <div key={index} className="flex flex-col items-center text-center">
                            <div className="w-12 h-12 border-2 border-white rounded-full flex items-center justify-center mb-3">
                                <service.icon className="text-2xl font-bold"/>
                            </div>
                            <h3 className="font-bold uppercase tracking-wider">{service.title}</h3>
                            <p className="text-gray-300 text-sm mt-2">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services