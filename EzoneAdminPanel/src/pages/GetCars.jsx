import React, { useState, useEffect } from 'react';
import { Edit, Trash2, ChevronDown } from "lucide-react";
import { IoSearch } from "react-icons/io5";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

import { backendUrl } from "../App";

const GetCars = () => {
  const navigate = useNavigate();
  const token = localStorage.getItem("adminToken");
  if (!token) {
    navigate("/");
  }
  
  const [selectedTripType, setSelectedTripType] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const options = ["All", "Local", "One Way", "Round Trip", "Airport"];
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getCars();
  }, []);

  const getCars = () => {
    axios.get(`${backendUrl}/admin/getCars`, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((response) => {
        setAllData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching cars:", error);
      });
  };

  const edit = (id) => {
    navigate(`/edit-car/${id}`);
  };

  const deleteCar = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(id)
        axios.delete(`${backendUrl}/admin/removeCar/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        })
          .then(() => {
            Swal.fire(
              'Deleted!',
              'The car has been deleted.',
              'success'
            );
            getCars(); // Refresh the list
          })
          .catch((error) => {
            console.error("Error deleting car:", error);
            Swal.fire(
              'Error!',
              'There was an error deleting the car.',
              'error'
            );
          });
      }
    });
  };

  // Filter cars based on search term and selected trip type
  const filteredCars = allData.filter((car) => {
    // Search term filter
    const matchesSearch = car.carName.toLowerCase().includes(searchTerm.toLowerCase());

    // Trip type filter
    let matchesTripType = true;
    if (selectedTripType !== "All") {
      const tripKey = selectedTripType.toLowerCase().replace(" ", "");
      matchesTripType = car.tripType[tripKey] &&
        Object.values(car.tripType[tripKey]).some(val => val !== "" && val !== undefined);
    }

    return matchesSearch && matchesTripType;
  });

  return (
    <div className='px-10 flex-flex-col w-full'>
      <h1 className='text-3xl font-semibold text-primary-blue py-6'>Available Cars List</h1>

      {/* Filter and Search */}
      <div className='gap-5 flex flex-col md:flex-row justify-between py-5'>
        <div className='flex items-center gap-3'>
          <span className="text-darkgray">Show</span>
          <div className='relative w-32'>
            <button
              className="w-full border border-gray-300 px-2 py-1 text-gray-700 text-left flex items-center justify-between focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {selectedTripType}
              <ChevronDown size={16} />
            </button>
            {isOpen && (
              <div className="absolute w-full border border-gray-300 bg-white shadow-md mt-1">
                {options.map((option) => (
                  <div
                    key={option}
                    className="px-2 py-1 text-gray-700 cursor-pointer hover:bg-gray-200"
                    onClick={() => {
                      setSelectedTripType(option);
                      setIsOpen(false);
                    }}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Search Bar */}
        <div className='w-full md:w-[40%] xl:w-[30%] border border-gray-300 flex items-center justify-center h-9'>
          <input
            type="text"
            placeholder="Search by car name"
            className="px-4 py-2 w-[90%] h-full focus:outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='bg-gray-200 h-full w-10 flex justify-center items-center'>
            <IoSearch className='text-xl' />
          </button>
        </div>
      </div>

      {/* Car List */}
      <div className="bg-white shadow-md rounded-lg p-4 w-full">
        <div className="grid grid-cols-6 font-semibold bg-gray-300/60 py-2 rounded-md mb-2 text-center gap-7">
          <div className='w-32'>Image Preview</div>
          <div className='w-32'>Car Details</div>
          <div className='w-32'>Trip Type</div>
          <div className='w-32'>Seaters</div>
          <div className='w-32'>Price/km</div>
          <div className='w-32'>Actions</div>
        </div>

        {filteredCars.length > 0 ? (

          filteredCars.map((car) => {
            // Find the first available rate per km for display
            let ratePerKm = "";
            for (const tripType in car.tripType) {
              if (car.tripType[tripType]?.ratePerKm) {
                ratePerKm = `₹${car.tripType[tripType].ratePerKm}`;
                break;
              }
            }

            return (
              <div key={car._id} className="grid grid-cols-6 items-center text-center border-b py-2 gap-7">
                <div className='w-32 flex justify-center'>
                  <img
                    src={car.images?.[0] || 'https://via.placeholder.com/150'}
                    alt={car.carName}
                    className="w-16 h-16 rounded-md object-cover"
                  />
                </div>
                <div className='w-32'>
                  <div className="font-semibold">{car.carName}</div>
                  <span className="text-xs px-2 rounded-full border border-gray-300">{car.carType || 'N/A'}</span>
                </div>
                <div className='w-32'>
                  {Object.entries(car.tripType)
                    .filter(([_, value]) => value && Object.values(value).some(v => v !== "" && v !== undefined))
                    .map(([key]) => (
                      <div key={key} className='capitalize'>
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                    ))}
                </div>
                <div className='w-32'>{car.seaters || 'N/A'}</div>
                <div className="font-semibold w-32">
                  {Object.entries(car.tripType)
                    .filter(([_, value]) => value && value.ratePerKm && value.ratePerKm !== "")
                    .map(([key, value]) => (
                      <div key={key}>
                        ₹{value.ratePerKm}/km
                      </div>
                    ))}
                </div>
                <div className="flex items-center justify-center gap-5 w-32">
                  <button
                    className="text-gray-400 hover:text-gray-700"
                    onClick={() => edit(car._id)}
                  >
                    <Edit className='w-5 h-5' />
                  </button>
                  <button
                    className="text-red-500 hover:text-red-700"
                    onClick={() => deleteCar(car._id)}
                  >
                    <Trash2 className='w-5 h-5' />
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-4 text-gray-500 font-semibold">
            No cars registered.
          </div>
        )}
      </div>
    </div>
  );
};

export default GetCars;