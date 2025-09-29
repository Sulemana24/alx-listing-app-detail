export default function ReviewSection({ reviews }: { reviews: any[] }) {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      <div className="space-y-4">
        {reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet</p>
        ) : (
          reviews.map((review, idx) => (
            <div key={idx} className="border-b pb-2">
              <p className="font-semibold">{review.user}</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-yellow-500">⭐ {review.rating}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
