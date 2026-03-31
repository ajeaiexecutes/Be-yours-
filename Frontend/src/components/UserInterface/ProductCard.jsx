import React from "react";

const ProductCard = ({ item, onClick, API_URL }) => {
  return (
    <div
      onClick={onClick}
      className="w-full font-sans cursor-pointer"
    >
      {/* Image Section */}
      <div className="relative bg-gray-100 rounded-lg overflow-hidden group">
        
        {/* Badge */}
        {/* {item.isNew && (
          <span className="absolute top-2 left-2 bg-red-900 text-white text-xs px-2 py-1 rounded">
            NEW LAUNCH
          </span>
        )} */}

        {/* Image */}
        <img
          src={`${API_URL}${item.image}`}
          alt={item.name}
          className="w-full h-[280px] object-cover group-hover:scale-105 transition duration-500"
        />
      </div>

      {/* Rating */}
      <div className="text-sm mt-2 text-gray-700 flex items-center">
        <span className="text-yellow-500">★</span>
        <span className="ml-1">{item.rating || 4.5}</span>
        <span className="ml-1 text-gray-500 text-xs">
          ({item.reviews || 0})
        </span>
      </div>

      {/* Title */}
      <h3 className="text-md font-medium mt-1">
        {item.name}
      </h3>

      {/* Subtitle / Color */}
      <p className="text-gray-500 text-sm">
        {item.title}
      </p>

      {/* Price */}
      <div className="mt-1 flex items-center gap-2">
        <span className="font-semibold text-lg">
          ₹{item.price}
        </span>

        {item.oldPrice && (
          <span className="text-gray-400 line-through text-sm">
            ₹{item.oldPrice}
          </span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;