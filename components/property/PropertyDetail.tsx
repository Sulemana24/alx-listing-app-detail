import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }: { property: any }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Section - Property Info */}
        <div className="lg:col-span-2 space-y-8">
          {/* Image */}
          <div className="w-full h-72 md:h-[450px] rounded-2xl overflow-hidden shadow-md">
            <img
              src={property.image}
              alt={property.name}
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Name + Location + Rating */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#FF4FA1]">
                {property.name}
              </h1>
              <p className="text-gray-600 text-lg mt-1">{property.location}</p>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-yellow-400 text-xl">★</span>
              <span className="font-semibold">{property.rating}</span>
            </div>
          </div>

          {/* Description */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-50">
              About this property
            </h2>
            <p className="text-gray-50 mt-3 leading-relaxed">
              {property.description}
            </p>
          </div>

          {/* Amenities */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-50">Amenities</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {property.amenities?.map((amenity: string, i: number) => (
                <li
                  key={i}
                  className="flex items-center space-x-3 bg-gray-50 p-2 rounded-lg shadow-sm hover:bg-gray-100 transition"
                >
                  <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                  <span className="text-gray-700">{amenity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews Section */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Section - Booking */}
        <div className="lg:col-span-1">
          <div className="sticky top-20">
            <BookingSection price={property.price} />
          </div>
        </div>
      </div>
    </div>
  );
}
