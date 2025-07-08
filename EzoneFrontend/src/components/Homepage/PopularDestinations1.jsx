import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PopularDestinations1 = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    arrows: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    arrows: false
                }
            },
        ],
    };

    const destinations = [
        {
            title: "Goa",
            description: "Experience the vibrant beaches and nightlife of Goa.",
            image: "https://plus.unsplash.com/premium_photo-1729585926215-656439d294a7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RXhwZXJpZW5jZSUyMHRoZSUyMHZpYnJhbnQlMjBiZWFjaGVzJTIwYW5kJTIwbmlnaHRsaWZlJTIwb2YlMjBHb2F8ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Jaipur",
            description: "Explore the rich heritage and royal palaces of the Pink City.",
            image: "https://plus.unsplash.com/premium_photo-1697730373328-26e408d64025?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEV4cGxvcmUlMjB0aGUlMjByaWNoJTIwaGVyaXRhZ2UlMjBhbmQlMjByb3lhbCUyMHBhbGFjZXMlMjBvZiUyMEphaXB1ciUzQnMlMjBQaW5rJTIwQ2l0eS58ZW58MHx8MHx8fDA%3D",
        },
        {
            title: "Kerala",
            description: "Enjoy the serene backwaters and lush greenery of Kerala.",
            image: "https://plus.unsplash.com/premium_photo-1697729438401-fcb4ff66d9a8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RW5qb3klMjB0aGUlMjBzZXJlbmUlMjBiYWNrd2F0ZXJzJTIwYW5kJTIwbHVzaCUyMGdyZWVuZXJ5JTIwb2YlMjBLZXJhbGEufGVufDB8fDB8fHww",
        },
        {
            title: "Varanasi",
            description: "Witness the spiritual and cultural essence of India in Varanasi.",
            image: "https://media.istockphoto.com/id/92236215/photo/varanasi-life.webp?a=1&b=1&s=612x612&w=0&k=20&c=evy6KPwvsaSwBAhV6S-3en6SXGRe7ewKjQ71hq_FPyo=",
        },
        {
            title: "Ladakh",
            description: "Explore the breathtaking landscapes and monasteries of Ladakh.",
            image: "https://plus.unsplash.com/premium_photo-1661962740957-ccd5130e194e?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8RXhwbG9yZSUyMHRoZSUyMGJyZWF0aHRha2luZyUyMGxhbmRzY2FwZXMlMjBhbmQlMjBtb25hc3RlcmllcyUyMG9mJTIwTGFkYWtoLnxlbnwwfHwwfHx8MA%3D%3D",
        },
        {
            title: "Mysore",
            description: "Discover the grandeur of Mysore Palace and vibrant markets.",
            image: "https://plus.unsplash.com/premium_photo-1697730494992-7d5a0c46ea52?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RGlzY292ZXIlMjB0aGUlMjBncmFuZGV1ciUyMG9mJTIwTXlzb3JlJTIwUGFsYWNlJTIwYW5kJTIwdmlicmFudCUyMG1hcmtldHMufGVufDB8fDB8fHww",
        },
    ];


    return (
        <section id="popularDestinations" className="py-16 mb-10 md:mb-16 bg-gray-100">
            <div className="flex flex-col md:flex-row items-center gap-8 containerr relative ">
                {/* Left Section */}
                <div className="w-full md:w-1/3 text-center md:text-left">
                    <h2 className="text-3xl font-bold text-primary-blue mb-4 w-full">
                        <span className="font-heading uppercase">Popular Destinations</span>
                    </h2>
                    <h3 className="text-2xl mb-4 font-heading text-primary-blue italic">
                        Every destination is a new chapter in your story.
                    </h3>
                    <p className="text-gray-600 mb-4">
                        From breathtaking landscapes to rich cultural journeys, we ensure every trip is memorable. Travel with comfort, adventure, and professionalism—making every destination unforgettable!
                    </p>
                </div>

                {/* Slider Section */}
                <div className="w-full md:w-2/3 relative">
                    <Slider {...settings}>
                        {destinations.map((item, index) => (
                            <div key={index} className="px-2">
                                <div className="relative h-64 rounded-xl shadow-md overflow-hidden group">
                                    {/* Image */}
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="w-full h-full object-cover"
                                    />

                                    {/* Overlay (hidden by default, shows on hover) */}
                                    <div className="absolute inset-0 bg-black/70 bg-opacity-90 flex flex-col items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-6">
                                        <h3 className="text-lg font-semibold">{item.title}</h3>
                                        <p className="text-sm text-center">{item.description}</p>
                                    </div>

                                    {/* Title (always visible) */}
                                    <div className="absolute bottom-4 left-4 group-hover:opacity-0 transition-opacity duration-500 text-white px-3 py-1 rounded-md">
                                        {item.title}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    )
}

export default PopularDestinations1
