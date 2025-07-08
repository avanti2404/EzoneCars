import React, { useState } from 'react';

const AboutUs = () => {
    const [showMore, setShowMore] = useState(false);

    return (
        <section id="about" className="py-10 md:py-20 ">
            <div className="containerr">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div className='text-center md:text-left'>
                        <h2 className="text-3xl mb-4 font-bold font-heading text-primary-blue">
                            ABOUT EZONE CARS
                        </h2>
                        <p className="text-gray-600 mb-4">
                            We are privileged to introduce to you as eZone Cars, a Tours and Travels
                            company in the hospitality industry in INDIA founded in November 2009, incorporated in October 2010.
                        </p>
                        <p className="text-gray-600 mb-6">
                            Our aim is to provide our clients with the most efficient services coupled with our
                            exceptional expertise, rich experience, and enthusiasm. We hope to achieve this
                            objective with a strong ability to meet strict time schedules, competence, and a high sense of professionalism.
                        </p>

                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-blue">500+</div>
                                <div className="text-sm text-gray-600">Locations</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-blue">10K+</div>
                                <div className="text-sm text-gray-600">Vehicles</div>
                            </div>
                            <div className="text-center">
                                <div className="text-3xl font-bold text-primary-blue">1M+</div>
                                <div className="text-sm text-gray-600">Happy Customers</div>
                            </div>
                        </div>

                        <button
                            className="border border-primary-blue text-primary-blue hover:bg-primary-blue hover:text-white w-40 py-3 transition-all duration-700 "
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "Learn Less" : "Learn More"}
                        </button>
                        {showMore && (
                            <div className="mt-4 text-gray-600 md:hidden">
                                <p className="mb-4">
                                    Aiming at quality and affordable services, EZONE CARS. has acquired the best human resources,
                                    vehicles, and logistics necessary for this modern-day tour/rental operation.
                                </p>
                                <p className="mb-4">
                                    Furthermore, with our unique approach of dedication to duty, innovation, and determination, we
                                    always provide well-trained and qualified personnel to render nothing but true customer
                                    satisfaction to our distinguished clients.
                                </p>
                                <p>
                                    With our determination and experience in the car rental and tourism industry, we are therefore
                                    this letter proposing the following service for your perusal and collaboration
                                </p>
                            </div>
                        )}
                    </div>

                    <div className="relative lg:h-[400px] overflow-hidden">
                        <img
                            src="https://plus.unsplash.com/premium_photo-1682089485470-4d575051f326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMHJlbnRhbCUyMGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D"
                            alt="About Us"
                            className="object-cover w-full h-full"
                        />
                    </div>
                </div>
                {showMore && (
                    <div className="mt-4 text-gray-600 hidden md:block">
                        <p className="mb-4">
                            Aiming at quality and affordable services, EZONE CARS. has acquired the best human resources,
                            vehicles, and logistics necessary for this modern-day tour/rental operation.
                        </p>
                        <p className="mb-4">
                            Furthermore, with our unique approach of dedication to duty, innovation, and determination, we
                            always provide well-trained and qualified personnel to render nothing but true customer
                            satisfaction to our distinguished clients.
                        </p>
                        <p>
                            With our determination and experience in the car rental and tourism industry, we are therefore
                            this letter proposing the following service for your perusal and collaboration
                        </p>
                    </div>
                )}
            </div>
        </section>
    );
};

export default AboutUs;
