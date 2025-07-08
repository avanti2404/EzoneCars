import React from 'react'
import { Award, Calendar, ChevronLeft, ChevronRight, MapPin, Users } from "lucide-react"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const AchievementsSection = () => {
    // Custom Right Arrow Component
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 -right-10 transform -translate-y-1/2 border border-primary-blue text-primary-blue hover:text-white rounded-full cursor-pointer hover:bg-primary-blue transition-all duration-700 hidden lg:block"
            onClick={onClick}
        >
            <ChevronRight size={20} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 -left-10 transform -translate-y-1/2 border border-primary-blue text-primary-blue hover:text-white rounded-full cursor-pointer hover:bg-primary-blue transition-all duration-700 hidden lg:block"
            onClick={onClick}
        >
            <ChevronLeft size={20} />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ],
    };

    const achievements = [
        {
            client: "G20 Summit",
            description: "Deployed transportation services for the G20 Summit across multiple cities.",
            year: "July - September 2023",
            location: "Mumbai, Gandhi Nagar, Ahmedabad",
            icon: <Award className="h-5 w-5 text-primary" />,
        },
        {
            client: "Aditya Birla Group",
            description: "Deployed cars for Birla Mandir Inauguration at Goa.",
            year: "October 2023",
            location: "Goa",
            icon: <Award className="h-5 w-5 text-primary" />,
        },
        {
            client: "IBM Event",
            description: "Provided over 50 cars for the IBM event at JIO Convention Centre",
            year: "2022",
            location: "Mumbai",
            icon: <Users className="h-5 w-5 text-primary" />,
        },
        {
            client: "Mahindra & Mahindra",
            description: "Successfully transported 5 coaches and 30 SUV vehicles for trainee employees from Mumbai to Nashik.",
            year: "June 2022",
            location: "Mumbai to Nashik",
            icon: <Users className="h-5 w-5 text-primary" />,
        },
        {
            client: "Wedding Events",
            description: "Handled 70+ cars fleet for wedding events in Mumbai.",
            year: "2022",
            location: "Mumbai",
            icon: <Users className="h-5 w-5 text-primary" />,
        },
        {
            client: "Samsung Electronics",
            description: "Successfully executed event for HARMAN SOUNDS with 85+ cars.",
            year: "2018",
            location: "Hotel Renaissance, Mumbai",
            icon: <Award className="h-5 w-5 text-primary" />,
        },
        {
            client: "Netflix - Will Smith",
            description:
                "Successfully executed transportation for Hollywood Actor Mr. Will Smith during the BRIGHT Movie Event.",
            year: "2017",
            location: "Mumbai",
            icon: <Award className="h-5 w-5 text-primary" />,
        },
        {
            client: "Netflix - Sacred Games",
            description: "Successfully drove 15 coaches and 25+ cars including luxury and mid-segment vehicles.",
            year: "August 2017",
            location: "Mumbai",
            icon: <Users className="h-5 w-5 text-primary" />,
        },
        {
            client: "South African Consulate",
            description: "Successfully handled the President Embassy Delegation with 30+ luxury cars and 40+ other cars.",
            year: "2010",
            location: "Mumbai",
            icon: <Award className="h-5 w-5 text-primary" />,
        },
    ]

    return (
        <section id='successfulAchievements' className="md:py-16 mb-10 md:mb-16 h-[70vh] md:min-h-screen relative bg-cover bg-center flex items-center md:items-start " style={{ backgroundImage: "url('https://turuhi.com/storage/story/6-Nubra-Valley-Ladakh.jpeg')" }}>
            <div className=" absolute inset-0 bg-gradient-to-b from-white md:via-white/70 to-white/5"></div>
            <div className="containerr w-full relative text-primary-blue flex flex-col items-center">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold tracking-tight md:text-3xl font-heading uppercase">Successful Achievements</h2>
                    <p className="mt-4 max-w-3xl mx-auto">
                        EZONE CARS has proudly served prestigious clients and events with excellence in ground transportation
                        services.
                    </p>
                </div>

                <div className="w-full md:max-w-4xl mx-auto">
                    <Slider {...settings}>
                        {achievements.map((achievement, index) => (
                            <div className='px-3'>
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col justify-between border border-border p-4 mx-auto h-40 "
                                >
                                    <div className="flex gap-4 items-start">
                                        <div className="bg-gray-200 p-2 rounded-full text-gray-800">{achievement.icon}</div>
                                        <div>
                                            <h3 className="font-semibold text-lg mb-2 text-gray-700">{achievement.client}</h3>
                                            <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                                            <div className="flex items-center text-xs text-gray-600 mt-auto">
                                                <Calendar className="h-3.5 w-3.5 mr-1" />
                                                <span>{achievement.year}</span>
                                                {achievement.location && (
                                                    <>
                                                        <span className="mx-2">•</span>
                                                        <MapPin className="h-3.5 w-3.5 mr-1" />
                                                        <span>{achievement.location}</span>
                                                    </>
                                                )}
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>

                <div className="mt-12 text-center">
                    <div className="inline-flex items-center justify-center p-4 bg-primary/10 rounded-lg">
                        <p className="text-lg font-medium">
                            Successfully managed transportation for <span className="font-bold text-primary">500+</span> events across
                            India
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default AchievementsSection