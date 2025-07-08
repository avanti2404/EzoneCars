import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const Hero = () => {
    const slides = [
        {
            image: "https://images.unsplash.com/photo-1529369623266-f5264b696110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FyJTIwcmVudGFsfGVufDB8fDB8fHww",
            title: "Rent the Perfect Car for Your Next Journey",
        },
        {
            image:
                "https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGNhciUyMHJlbnRhbHxlbnwwfHwwfHx8MA%3D%3D",
            title: "Fast, Affordable, Reliable – Your Ride, Your Way!",
        },
        {
            image:
                "https://images.unsplash.com/photo-1532382129185-7d04c00155ee?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fHN1dnxlbnwwfHwwfHx8MA%3D%3D",
            title: "Discover Your Next Adventure",
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 4000); // Change slide every 3 seconds
        return () => clearInterval(interval);
    }, [slides.length]);

    return (
        <>
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="h-[20rem] md:h-[30rem] flex flex-col justify-center items-center relative bg-black bg-opacity-30"
            >
                <motion.img
                    key={slides[currentIndex].image}
                    src={slides[currentIndex].image}
                    alt="Hero"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 2 }}
                    className="w-full h-full object-cover absolute inset-0 -z-10"
                />
                <div className="text-center text-white px-5 md:px-0">
                    <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold mb-5 font-heading">
                        {slides[currentIndex].title}
                    </h2>
                    <p className="text-sm md:text-lg py-[2px] text-white">
                        Explore breathtaking destinations and create unforgettable memories <br></br>with our curated travel experiences.
                    </p>
                </div>
            </motion.div>
        </>
    );
};

export default Hero;
