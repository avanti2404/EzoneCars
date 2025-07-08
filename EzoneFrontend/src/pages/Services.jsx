import React from 'react'
import Banner from '../components/Banner'

const Services = () => {
  const imgUrl = "https://images.unsplash.com/photo-1526626607369-f89fe1ed77a9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y2FyJTIwcGFya2luZ3xlbnwwfHwwfHx8MA%3D%3D"

  const bannerHeader = "Our Services"

  return (
    <>
      <Banner bannerImgUrl={imgUrl} bannerHeader={bannerHeader} />

      {/* service 1 */}
      <div className='w-full py-10 reveal-up'>
        <div className='containerr flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://chikucab.com/images/home/homebanner.webp')" }}>
            </div>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8 '>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Car and Coach Rental Services <br></br>(India & International)</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Rent well-maintained cars and luxury coaches for seamless travel in India and abroad, ensuring a comfortable and hassle-free journey.</p>
          </div>
        </div>
      </div>

      {/* service 2 */}
      <div className='w-full py-10 bg-gray-200/70 reveal-up'>
        <div className='containerr flex flex-col-reverse md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Tours & Travels</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Explore breathtaking destinations with customized tour packages, ensuring an unforgettable travel experience with expert guidance.</p>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://divyatourstravels.in/public/img/jk.jpg')" }}>
            </div>
          </div>
        </div>
      </div>

      {/* service 3 */}
      <div className='w-full py-10 reveal-up'>
        <div className='containerr flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://indiantravelhouse.com/wp-content/uploads/2024/05/Conference.jpg')" }}>
            </div>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Events & Conference</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Reliable transport solutions for corporate events, business meetings, and large conferences, ensuring timely and professional services.</p>
          </div>
        </div>
      </div>

      {/* service 4 */}
      <div className='w-full py-10 bg-gray-200/70 reveal-up'>
        <div className='containerr flex flex-col-reverse md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Special Tour Packages (India)</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Experience tailor-made tour packages across India, offering adventure, culture, and relaxation as per your preference.</p>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://htoindia.com/wp-content/uploads/2017/02/tour-pakages.jpg')" }}>
            </div>
          </div>
        </div>
      </div>

      {/* service 5 */}
      <div className='w-full py-10 reveal-up'>
        <div className='containerr flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://ae.deiratravel.com/wp-content/uploads/2024/11/tickets.jpg')" }}>
            </div>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Hotel and Air Ticket Services</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Hassle-free booking of hotels and flights at the best prices, ensuring a smooth travel experience from start to finish.</p>
          </div>
        </div>
      </div>

      {/* service 6 */}
      <div className='w-full py-10 bg-gray-200/70 reveal-up'>
        <div className='containerr flex flex-col-reverse md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue '>Corporate and Employee Transportation</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Efficient and comfortable transport solutions for employees and corporate clients, ensuring safe and punctual travel.</p>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://5.imimg.com/data5/KI/EP/DD/SELLER-7863778/employee-transport-service-500x500.png')" }}>
            </div>
          </div>
        </div>
      </div>

      {/* service 7 */}
      <div className='w-full py-10 reveal-up'>
        <div className='containerr flex flex-col md:flex-row gap-10 md:gap-0'>
          <div className='w-full md:w-[50%] md:p-10 flex items-center justify-center'>
            <div className="w-[30rem] aspect-video relative bg-cover bg-center" style={{ backgroundImage: "url('https://plus.unsplash.com/premium_photo-1682089485470-4d575051f326?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGNhciUyMHJlbnRhbCUyMGFib3V0JTIwdXN8ZW58MHx8MHx8fDA%3D')" }}>
            </div>
          </div>
          <div className='w-full md:w-[50%] md:p-10 flex flex-col items-center justify-center gap-8'>
              <h1 className='w-full text-center text-3xl font-bold font-heading text-primary-blue'>Guide Services</h1>
              <hr className='w-[40%] md:w-[30%] border border-primary-blue'></hr>
              <p className='w-full text-center text-gray-600'>Professional tour guides to help you explore new destinations, providing insightful local knowledge and seamless experiences.</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services