import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slides = [
    {
        image: "https://images.unsplash.com/photo-1529369623266-f5264b696110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww",
        title: "PODA ISLAND, ANDAMAN SEA",
        location: "KRABI, IN THAILAND",
    },
    {
        image: "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
        title: "MACHU PICCHU, PERU",
        location: "LOST CITY OF INCAS",
    },
    {
        image: "https://plus.unsplash.com/premium_photo-1682089485470-4d575051f326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMHJlbnRhbCUyMGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D",
        title: "MALDIVES BEACHES",
        location: "PARADISE ON EARTH",
    },
];

const PopularDestinations = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        centerMode: true,
        centerPadding: "160px",
        slidesToShow: 1,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true, // Enable dots below slider
        arrows: false, // Remove arrows
        beforeChange: (current, next) => setActiveSlide(next),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    centerPadding: "50px",
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    centerMode: false,
                    centerPadding: "0px",
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <section id="popularDestinations" className="pb-10 md:mt-16 flex flex-col items-center w-full gap-8 scroll-mt-16">
            <div className="w-full text-center flex flex-col items-center">
                <h2 className="text-3xl mb-4 font-bold font-heading text-primary-blue">
                    POPULAR DESTINATIONS
                </h2>
                <h3 className="text-2xl mb-4 font-heading text-primary-blue italic">
                    Every destination is a new chapter in your story.
                </h3>
                <p className="text-gray-600 mb-4 max-w-6xl">
                    Discover the world's most stunning locations with seamless travel experiences. From breathtaking landscapes to rich cultural journeys, we ensure every trip is memorable. Travel with comfort, adventure, and professionalism—making every destination unforgettable!
                </p>
            </div>

            <div className="w-full flex justify-center md:py-5">
                <Slider {...settings} className="w-full md:w-3/4 pb-5">
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className={`px-2 transition-transform duration-300 ${
                                activeSlide === index ? "scale-110" : "scale-90 opacity-55"
                            }`}
                        >
                            <div className="relative group">
                                <img
                                    src={slide.image}
                                    alt={slide.title}
                                    className="w-full h-[350px] object-cover rounded-md shadow-lg transition-all"
                                />
                                <div className="absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-4 rounded-md">
                                    <h2 className="text-base font-semibold font-heading">{slide.title}</h2>
                                    <p className="text-sm">{slide.location}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default PopularDestinations;
