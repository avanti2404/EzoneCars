import { useState } from "react";
import OneWaySearch from "./OneWaySearch";
import RoundTripSearch from "./RoundTripSearch";
import LocalSearch from "./LocalSearch";
import AirportSearch from "./AirportSearch";

const CarRentalSearch = () => {
  const categories = [
    { name: "One Way" },
    { name: "Round Trip" },
    { name: "Local" },
    { name: "Airport" },
  ];
  const [selectedCategory, setSelectedCategory] = useState("One Way");

  // Render the component based on the selected category
  const renderSearchComponent = () => {
    switch (selectedCategory) {
      case "One Way":
        return <OneWaySearch />;
      case "Round Trip":
        return <RoundTripSearch />;
      case "Local":
        return <LocalSearch />;
      case "Airport":
        return <AirportSearch />;
      default:
        return null;
    }
  };

  return (
    <div>
      {/* Category Tabs */}
      <div className="w-full flex justify-center">
        <div className="flex flex-wrap justify-center gap-3 p-1 md:border md:border-primary-blue">
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setSelectedCategory(category.name)}
              className={`px-4 py-2 text-sm font-medium transition-all ${
                selectedCategory === category.name ? "bg-primary-blue text-white" : "text-gray-700"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Render the corresponding search form */}
      {renderSearchComponent()}
    </div>
  );
};

export default CarRentalSearch;
