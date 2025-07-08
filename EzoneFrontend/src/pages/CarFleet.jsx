import React, { useState } from "react";
import Banner from "../components/Banner";
import { ChevronRight, ChevronLeft, ChevronDown, X } from "lucide-react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const carData = [
    {
        company: "Toyota",
        models: [
            {
                model: "Camry",
                image: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202201/2022_Toyota_Camry_Hybrid-_Exte.jpg",
                images: [
                    "https://cars.usnews.com/static/images/Auto/izmo/i4510/2014_toyota_camry_sideview.jpg",
                    "https://content.carlelo.com/uploads/model/camry66.webp",
                    "https://imgd.aeplcdn.com/370x208/n/cw/ec/37561/camry-interior-dashboard.jpeg?q=80"
                ]
            },
            {
                model: "Corolla",
                image: "https://greatdubai.com/uploads/blog/1679469474.jpg",
                images: [
                    "https://images.pexels.com/photos/19581626/pexels-photo-19581626/free-photo-of-raindrops-on-black-toyota-corolla.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
                    "https://i.ytimg.com/vi/DoY_StTAS0Y/maxresdefault.jpg",
                    "https://imgcdn.oto.com/large/gallery/interior/38/2227/toyota-corolla-altis-dashboard-view-871920.jpg"
                ]
            }
        ]
    },
    {
        company: "Honda",
        models: [
            {
                model: "Civic",
                image: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Honda/Civic/7740/1585801296746/front-left-side-47.jpg",
                images: [
                    "https://5.imimg.com/data5/NF/YJ/EI/GLADMIN-20598367/civic-500x500-500x500.png",
                    "https://cdn.zeebiz.com/sites/default/files/2019/03/07/77369-honda-civic-main.jpg",
                    "https://www.selectcarleasing.co.uk/rails/active_storage/blobs/eyJfcmFpbHMiOnsibWVzc2FnZSI6IkJBaHBBdk5IIiwiZXhwIjpudWxsLCJwdXIiOiJibG9iX2lkIn19--51d0ceacda60bab58d9c590f4f4323ae46912e46/Honda-Civic_Type_R-2020-1280-11.jpgg"
                ]
            }
        ]
    }
];

const CarFleet = () => {
    const imgUrl = "https://chevin-assets.s3.eu-west-1.amazonaws.com/wp-content/uploads/2021/01/22160634/Five-Tips-Best-Vehicles_LR.jpg";
    const bannerHeader = "Explore Our Car Fleet";

    const [selectedCompany, setSelectedCompany] = useState(carData[0].company);
    const [selectedModel, setSelectedModel] = useState(null);
    const [isOpen, setIsOpen] = useState(false);

    const selectedCars = carData.find(car => car.company === selectedCompany)?.models || [];

    const handleCompanySelect = (company) => {
        setSelectedCompany(company);
        setIsOpen(false);
    };

    // Custom Right Arrow Component
    const NextArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 -right-8 transform -translate-y-1/2 border border-primary-blue text-primary-blue hover:text-white rounded-full cursor-pointer hover:bg-primary-blue transition-all duration-700 hidden lg:block"
            onClick={onClick}
        >
            <ChevronRight size={20} />
        </div>
    );

    const PrevArrow = ({ onClick }) => (
        <div
            className="absolute top-1/2 -left-8 transform -translate-y-1/2 border border-primary-blue text-primary-blue hover:text-white rounded-full cursor-pointer hover:bg-primary-blue transition-all duration-700 hidden lg:block"
            onClick={onClick}
        >
            <ChevronLeft size={20} />
        </div>
    );

    return (
        <>
            <Banner bannerImgUrl={imgUrl} bannerHeader={bannerHeader} />
            <div className="py-16 containerr flex flex-col items-center w-full gap-10">
                {/* Dropdown */}
                <div className="relative w-40">
                    <button className="w-full border border-gray-300 px-2 py-1 text-gray-700 flex items-center justify-between focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
                        {selectedCompany}
                        <ChevronDown size={16} />
                    </button>
                    {isOpen && (
                        <div className="absolute w-full border border-gray-300 bg-white shadow-md mt-1">
                            {carData.map(({ company }) => (
                                <div key={company} className="px-2 py-1 text-gray-700 cursor-pointer hover:bg-gray-200" onClick={() => handleCompanySelect(company)}>
                                    {company}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className='flex gap-5 items-center justify-center w-full'>
                    <hr className='w-[40%] md:w-[10%] border border-primary-blue'></hr>
                    <h1 className='text-3xl text-primary-blue font-heading font-bold'>{selectedCompany}</h1>
                    <hr className='w-[40%] md:w-[10%] border border-primary-blue'></hr>
                </div>

                {/* Car Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-6">
                    {selectedCars.map(car => (
                        <div key={car.model} className="border rounded-lg shadow-md overflow-hidden cursor-pointer" onClick={() => setSelectedModel(car)}>
                            <img src={car.image} alt={car.model} className="w-full h-60 object-cover" />
                            <div className="p-3 flex items-center justify-between">
                                <h3 className="text-lg font-bold">{selectedCompany}</h3>
                                <p className="text-gray-600">{car.model}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Image Carousel Modal */}
            {selectedModel && (
                <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
                    <div className="bg-white p-8 md:p-12 rounded-lg relative w-[90%] md:w-[70%] lg:w-[40%] ">
                        <button className="absolute top-2 right-2 md:top-3 md:right-3 text-black" onClick={() => setSelectedModel(null)}>
                            <X size={24} />
                        </button>
                        <Slider dots={true} infinite={true} speed={500} slidesToShow={1} slidesToScroll={1} nextArrow = {<NextArrow />}
                        prevArrow = {<PrevArrow />}>
                            {selectedModel.images.map((img, index) => (
                                <div className="relative md:h-[300px] overflow-hidden px-1">
                                    <img
                                        key={index} src={img} alt={`${selectedModel.model} ${index + 1}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>

                            ))}
                        </Slider>
                    </div>
                </div>
            )}
        </>
    );
};

export default CarFleet;
