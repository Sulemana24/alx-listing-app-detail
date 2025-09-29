import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

export default function PropertyDetail({ property }: { property: any }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Left Section - Property Info */}
      <div className="md:col-span-2 space-y-6">
        {/* Image */}
        <div className="w-full h-72 md:h-96 bg-gray-200 rounded-2xl overflow-hidden">
          <img
            src={property.image}
            alt={property.name}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Name + Location */}
        <div>
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <p className="text-gray-600">{property.location}</p>
        </div>

        {/* Description */}
        <div>
          <h2 className="text-xl font-semibold">About this property</h2>
          <p className="text-gray-700 mt-2">{property.description}</p>
        </div>

        {/* Amenities */}
        <div>
          <h2 className="text-xl font-semibold">Amenities</h2>
          <ul className="grid grid-cols-2 gap-2 mt-2">
            {property.amenities.map((amenity: string, i: number) => (
              <li key={i} className="flex items-center space-x-2">
                <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                <span>{amenity}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Reviews Section */}
        <ReviewSection reviews={property.reviews} />
      </div>

      {/* Right Section - Booking */}
      <div>
        <BookingSection price={property.price} />
      </div>
    </div>
  );
}
