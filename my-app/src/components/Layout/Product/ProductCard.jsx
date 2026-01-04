const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg shadow hover:shadow-lg transition p-4">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-40 object-cover rounded"
      />

      <h3 className="mt-3 font-semibold text-lg">{product.name}</h3>

      <p className="text-gray-600 text-sm mt-1">
        {product.description}
      </p>

      <div className="flex justify-between items-center mt-3">
        <span className="font-bold text-indigo-600">
          ₹{product.price}
        </span>

        <button className="bg-indigo-600 text-white px-3 py-1 rounded hover:bg-indigo-700">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
