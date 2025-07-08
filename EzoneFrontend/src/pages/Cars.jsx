import React, { useEffect, useState } from "react";
import CarCard from "../components/CarsPage/CarCard";
import BenefitsSection from "../components/CarsPage/BenefitsSection";
import { useLocation, useParams } from "react-router-dom";
import axios from "axios";
import { backendUrl } from "../App";

const Cars = () => {
  const location = useLocation();
  const { source } = useParams();
  const {packageType} = useParams()
  console.log(packageType);
  
  const [cars, setCars] = useState([]);
  const [TT, setTripType] = useState("local");

  let dist = location.state.distance
  let dura = location.state.duration
  console.log(location.state.dist);
  console.log(dura);
  
  useEffect(() => {
    console.log(location.state.distance);
    console.log(location.state.duration);
    
    let apiUrl = "";
    
    if (location.pathname.includes("/oneway/")) {
      apiUrl = `${backendUrl}/client/oneway/${source}`;
      setTripType("oneway");
      console.log(source);
      
    } else if (location.pathname.includes("/roundtrip/")) {
      apiUrl = `${backendUrl}/client/roundtrip/${source}`;
      setTripType("roundTrip");
    } else {
      apiUrl = `${backendUrl}/client/local/${source}/${packageType}`;
      setTripType("local");
    }

    axios
      .get(apiUrl)
      .then((response) => {
        console.log(response.data);
        
        setCars(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching car data:", error);
      });

  }, [location.pathname, source]);

  return (
    <main className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Cars List */}
        <div className="lg:col-span-2 space-y-6">
          {cars.map((car) => (
            <CarCard key={car.id} car={{ ...car, TT, dist,dura }} />
          ))}
        </div>

        {/* Benefits Section */}
        <div className="lg:col-span-1">
          <BenefitsSection />
        </div>
      </div>
    </main>
  );
};

export default Cars;
