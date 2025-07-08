import { Search, Calendar, Car, MapPin } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "Choose Your Location",
        description: "Select your pick-up and drop-off locations from our extensive network of rental offices.",
        icon: MapPin,
    },
    {
        id: 2,
        title: "Select Date & Time",
        description: "Choose your rental period with our easy-to-use calendar and time selector.",
        icon: Calendar,
    },
    {
        id: 3,
        title: "Find Your Car",
        description: "Browse our fleet and select the perfect vehicle for your journey.",
        icon: Search,
    },
    {
        id: 4,
        title: "Enjoy Your Ride",
        description: "Pick up your car and start your adventure with confidence and peace of mind.",
        icon: Car,
    },
]

const HowItWorks = () => {
    return (
        <section id="howItWorks" className="mb-10 md:mb-16">
            <div className="containerr flex flex-col md:flex-row gap-10 md:gap-20 items-center">
                <div className="w-full md:w-[20%]  flex flex-col items-center justify-center">
                    <h2 className="text-[26px] font-bold font-heading mb-2 text-center text-primary-blue">HOW IT WORKS</h2>
                    <p className="text-gray-600 text-center">Renting a car with eZone is quick and easy</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full md:w-[80%] ">
                    {steps.map((step) => (
                        <div key={step.id} className="flex flex-col items-center text-center ">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-primary-blue flex items-center justify-center">
                                <step.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
                            </div>
                            <div className="bg-white p-3 w-full flex flex-col flex-grow">
                                <h3 className="text-lg font-semibold mb-2 text-gray-700">{step.title}</h3>
                                <p className="text-gray-600 flex-grow">{step.description}</p>
                            </div>
                        </div>

                    ))}
                </div>
            </div>
        </section>
    )
}

export default HowItWorks