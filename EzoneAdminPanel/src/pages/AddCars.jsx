import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

import { backendUrl } from "../App";

const AddCars = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/");
  }
  
  const { id } = useParams();
  const [carName, setCarName] = useState("");
  const [carType, setCarType] = useState("");
  const [seaters, setSeaters] = useState("");
  const [cities, setCities] = useState([]);
  const [isEdit, setIsEdit] = useState(false);

  const [oneway, setOneway] = useState({
    ratePerKm: "",
    minimumKmPD: "",
    dA: ""
  });

  const [local, setLocal] = useState({
    baseFare: "",
    packageType:""
  });

  const [roundTrip, setRoundTrip] = useState({
    ratePerKm: "",
    minimumKmPD: "",
    dA: ""
  });

  const [airport, setAirport] = useState({
    ratePerKm: "",
    minimumKmPD: "",
  });

  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);
  const [existingImages, setExistingImages] = useState([]);

  useEffect(() => {
    if (id) {
      setIsEdit(true);
      axios.get(`${backendUrl}/admin/getCar/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((response) => {
          const carData = response.data.data;
          setCarName(carData.carName);
          setCarType(carData.carType || "");
          setSeaters(carData.seaters || "");
          setExistingImages(carData.images || []);

          // Set trip type data
          if (carData.tripType) {
            setOneway(carData.tripType.oneway || { ratePerKm: "", minimumKmPD: "", dA: "" });
            setLocal(carData.tripType.local || { ratePerKm: "", packageType: "" });
            setRoundTrip(carData.tripType.roundTrip || { ratePerKm: "", minimumKmPD: "", dA: "" });
            setAirport(carData.tripType.airport || { ratePerKm: "", minimumKmPD: "" });
          }
        })
        .catch((error) => {
          console.error("Error fetching car data:", error);
        });
    }
  }, [id]);

  function validateFields(groupClass) {
    const fields = document.querySelectorAll(`.${groupClass}`);
    const fieldValues = Array.from(fields).map(field => field.value.trim());
    const someFilled = fieldValues.some(value => value !== "");
    const allFilled = fieldValues.every(value => value !== "");

    if (someFilled && !allFilled) {
      alert(`Either fill all fields or leave them empty in ${groupClass}!`);
      return false;
    }
    return true;
  }

  function validateForm() {
    return (
      validateFields("oneway") &&
      validateFields("roundtrip") &&
      validateFields("local") &&
      validateFields("airport")
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const mergedTrip = {
      oneway: { ...oneway },
      local: { ...local },
      roundTrip: { ...roundTrip },
      airport: { ...airport },
    };
    
    let location = cities.split(",").map(city => city.trim());
    console.log(location);

    const formData = new FormData();
    formData.append("name", carName);
    formData.append("carType", carType);
    formData.append("seaters", seaters);
    formData.append("location", location);
    formData.append("tripType", JSON.stringify(mergedTrip));

    if (img1) formData.append("image1", img1);
    if (img2) formData.append("image2", img2);
    if (img3) formData.append("image3", img3);

    try {
      if (isEdit) {
        await axios.put(`${backendUrl}/admin/editCar/${id}`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        Swal.fire(
          'Updated!',
          'The car has been Updated successfully.',
          'success'
        );
      } else {
        await axios.post(`${backendUrl}/admin/addCar`, formData, {
          headers: {
            Authorization: `Bearer ${token}`,
            'Content-Type': 'multipart/form-data'
          }
        });
        Swal.fire(
          'Added!',
          'The car has been Added successfully.',
          'success'
        );
      }

    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className='px-10 flex-flex-col w-full'>
      <h1 className='text-3xl font-semibold text-primary-blue py-6'>
        {isEdit ? 'Edit Car' : 'Add New Car'}
      </h1>

      <form onSubmit={handleSubmit} className='relative flex gap-10 w-full '>
        <div className='space-y-4 py-4 w-[45%] h-fit'>
          <div className='flex justify-between gap-5'>
            <div className="space-y-2 w-full">
              <label className='text-sm'>Car Name</label>
              <input
                type="text"
                value={carName}
                required
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setCarName(e.target.value)}
              />
            </div>
            <div className="space-y-2 w-full">
              <label className='text-sm'>Cities</label>
              <input
                type="text"
                placeholder="e.g. Mumbai, Pune"
                value={cities}
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setCities(e.target.value)}
              />
            </div>
          </div>

          <div className='flex justify-between gap-5'>
            <div className="space-y-2 w-full">
              <label className='text-sm'>Car type</label>
              <input
                type="text"
                placeholder="e.g. SUV AC"
                value={carType}
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setCarType(e.target.value)}
              />
            </div>
            <div className="space-y-2 w-full">
              <label className='text-sm'>Seaters</label>
              <input
                type="number"
                placeholder="e.g. 7"
                value={seaters}
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setSeaters(e.target.value)}
              />
            </div>
          </div>

          <div className='flex gap-3'>
            {existingImages.map((img, index) => (
              <div key={index} className="space-y-2">
                <label className='text-sm'>Existing Image {index + 1}</label>
                <img src={img} alt={`Car ${index + 1}`} className="w-16 h-16 object-cover" />
              </div>
            ))}
            <div className="space-y-2">
              <label className='text-sm'>Car Image</label>
              <input
                type="file"
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setImg1(e.target.files[0])}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Car Image</label>
              <input
                type="file"
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setImg2(e.target.files[0])}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Car Image</label>
              <input
                type="file"
                className='w-full p-2 outline-none border border-gray-200 text-sm'
                onChange={(e) => setImg3(e.target.files[0])}
              />
            </div>
          </div>

          {/* One Way section */}
          <div className="space-y-3 p-3 h-fit border border-gray-300">
            <h1 className='text-lg font-semibold'>One Way</h1>
            <div className="space-y-2">
              <label className='text-sm'>Rate/Km (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={oneway.ratePerKm || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm oneway'
                onChange={(e) => setOneway({ ...oneway, ratePerKm: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Minimum Km/Day (km)</label>
              <input
                type="number"
                placeholder="0"
                value={oneway.minimumKmPD || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm oneway'
                onChange={(e) => setOneway({ ...oneway, minimumKmPD: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Driver Allowances (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={oneway.dA || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm oneway'
                onChange={(e) => setOneway({ ...oneway, dA: e.target.value })}
              />
            </div>
          </div>

          <button type='submit' className="bg-primary-blue text-white w-44 px-4 py-2 rounded-md transition-colors">
            {isEdit ? 'Update Car' : 'Add Car'}
          </button>
        </div>

        {/* Fare Breakup */}
        <div className='flex flex-col gap-2 w-[45%] py-4'>
          {/* Local section */}
          <div className="p-3 h-fit border border-gray-300">
            <h1 className='text-lg font-semibold'>Local</h1>
            <div className="space-y-2">
              <label className='text-sm'>Base Fare (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={local.baseFare || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm local'
                onChange={(e) => setLocal({ ...local, baseFare: e.target.value })}
              />
               <select
                  onChange={(e) => setLocal({ ...local, packageType:e.target.value})}
                  className="w-full border p-2 rounded"
                >
                  <option>Select Package </option>
                  <option value={"8HRS%20%2080KM"}>8HRS / 80KM</option>
                  <option value={"12HRS%20%20120KM"}>12HRS / 120KM</option> 
                </select>
            </div>
          </div>

          {/* Round Trip section */}
          <div className="space-y-3 p-3 h-fit border border-gray-300">
            <h1 className='text-lg font-semibold'>Round Trip</h1>
            <div className="space-y-2">
              <label className='text-sm'>Rate/Km (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={roundTrip.ratePerKm || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm roundtrip'
                onChange={(e) => setRoundTrip({ ...roundTrip, ratePerKm: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Minimum Km/Day (km)</label>
              <input
                type="number"
                placeholder="0"
                value={roundTrip.minimumKmPD || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm roundtrip'
                onChange={(e) => setRoundTrip({ ...roundTrip, minimumKmPD: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Driver Allowances (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={roundTrip.dA || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm roundtrip'
                onChange={(e) => setRoundTrip({ ...roundTrip, dA: e.target.value })}
              />
            </div>
          </div>

          {/* Airport section */}
          <div className="space-y-3 p-3 h-fit border border-gray-300">
            <h1 className='text-lg font-semibold'>Airport</h1>
            <div className="space-y-2">
              <label className='text-sm'>Rate/Km (₹)</label>
              <input
                type="number"
                placeholder="0"
                value={airport.ratePerKm || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm airport'
                onChange={(e) => setAirport({ ...airport, ratePerKm: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <label className='text-sm'>Minimum Km/Day (km)</label>
              <input
                type="number"
                placeholder="0"
                value={airport.minimumKmPD || ""}
                className='w-full p-2 outline-none border border-gray-200 text-sm airport'
                onChange={(e) => setAirport({ ...airport, minimumKmPD: e.target.value })}
              />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCars;