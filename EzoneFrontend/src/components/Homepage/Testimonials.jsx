import React from 'react'
import Slider from 'react-slick'
import { FaStar } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TestimonialsData = [
  {
    id: 1,
    name: "Rohit Sharma",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 2,
    name: "Virat Kholi",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 3,
    name: "Shreyas Iyer",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 4,
    name: "Jasprit Bumrah",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
  {
    id: 5,
    name: "Varun Chakaravarthy",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/104/104",
  },
  {
    id: 6,
    name: "Mohammed Siraj",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque reiciendis inventore iste ratione ex alias quis magni at optio",
    img: "https://picsum.photos/103/103",
  },
]

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 3,
          infinite: true
        }
      },
      {
        breakpoint: 1020,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToScroll: 1,
          slidesToShow: 1,
          // infinite:true
        }
      },
    ]
  };
  return (
    <div className='pb-20'>
      <div className='containerr'>
        {/* top */}
        <div className='flex flex-col justify-center items-center w-full'>
          <p className=' text-primary-blue text-sm font-subHeading pb-1'>What our Customers Saying</p>
          <h2 className="text-3xl mb-4 font-bold font-heading text-primary-blue">
            TESTIMONIALS
          </h2>
          <h3 className="text-2xl mb-4 font-heading text-primary-blue italic">
          Don't just take our word for it - hear from our satisfied customers
          </h3>
        </div>

        {/* bottom */}
        <div >
          <Slider {...settings}>
            {
              TestimonialsData.map((data) => (
                <div className='mt-20 mb-2 text-center'>

                  <div key={data.id} className=' border-2 flex p-4 flex-col mx-5 rounded-xl bg-white relative shadow-xl mb-4'>

                    <div className=' h-[100px] -mb-8' >
                      <img src={data.img} className='  rounded-full border-2 border-primary-blue max-w-[100px] block mx-auto transform -translate-y-12' />
                    </div>

                    <div className='flex flex-col gap-3'>
                      <p className='text-gray-900 font-semibold'>{data.name}</p>
                      <div className='flex justify-center'>
                        {
                          [...Array(5)].map(star => (
                            <FaStar className='text-primary-blue' />
                          ))
                        }
                      </div>
                      <p className=' text-sm text-lightgray font-subHeading'>{data.text}</p>
                    </div>
                  </div>
                </div>
              ))
            }
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials