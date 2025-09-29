import Link from "next/link";
import React, { useState } from "react";
import { PROPERTYLISTINGSAMPLE } from "@/constants";
import { PropertyProps } from "@/interfaces";
import ima from "../public/images/image 2.png";

const Pill: React.FC<{
  label: string;
  isActive: boolean;
  onClick: () => void;
}> = ({ label, isActive, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
        isActive
          ? "bg-[#FF4FA1] text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
    >
      {label}
    </button>
  );
};

const PropertyCard: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <Link href={`/property/${property.name}`} passHref>
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-48 object-cover"
          />
        </Link>
        {property.discount && (
          <div className="absolute top-3 right-3 bg-[#FF4FA1] text-white px-2 py-1 rounded text-sm font-medium">
            -{property.discount}%
          </div>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-900">
            {property.name}
          </h3>
          <div className="flex items-center">
            <span className="text-yellow-400">★</span>
            <span className="text-sm text-gray-600 ml-1">
              {property.rating}
            </span>
          </div>
        </div>
        <p className="text-gray-600 text-sm mb-2">
          {property.address.city}, {property.address.state},{" "}
          {property.address.country}
        </p>
        <div className="flex flex-wrap gap-1 mb-3">
          {property.category.slice(0, 2).map((cat, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
            >
              {cat}
            </span>
          ))}
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4 text-sm text-gray-600">
            <div className="flex items-center">
              <span>🛏️</span>
              <span className="ml-1">{property.offers.bed}</span>
            </div>
            <div className="flex items-center">
              <span>🚿</span>
              <span className="ml-1">{property.offers.shower}</span>
            </div>
            <div className="flex items-center">
              <span>👥</span>
              <span className="ml-1">{property.offers.occupants}</span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-lg font-bold text-gray-900">
              Ghc{property.price.toLocaleString()}
            </div>
            <div className="text-sm text-gray-500">per night</div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>("All");

  const filters = [
    "All",
    "Top Villa",
    "Self Checkin",
    "Free Parking",
    "Pet Friendly",
    "Pool",
    "Mountain View",
    "Beachfront",
  ];

  const filteredProperties =
    activeFilter === "All"
      ? PROPERTYLISTINGSAMPLE
      : PROPERTYLISTINGSAMPLE.filter((property) =>
          property.category.some((cat) =>
            cat
              .toLowerCase()
              .includes(
                activeFilter
                  .toLowerCase()
                  .replace("top ", "")
                  .replace("free ", "")
              )
          )
        );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center text-white"
        style={{
          backgroundImage: "url('/images/image 2.png')",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Find your favorite place here!
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8">
              The best prices for over 2 million properties worldwide.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors">
              Start Exploring
            </button>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="bg-white py-6 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <Pill
                key={filter}
                label={filter}
                isActive={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Property Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            {activeFilter === "All"
              ? "All Properties"
              : `${activeFilter} Properties`}
          </h2>
          <p className="text-gray-600">
            Showing {filteredProperties.length} of{" "}
            {PROPERTYLISTINGSAMPLE.length} properties
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProperties.map((property, index) => (
            <PropertyCard key={index} property={property} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
