import ProductCard from "../components/product/ProductCard";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 1999,
    description: "High quality wireless sound",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 2999,
    description: "Track your fitness easily",
    image: "https://via.placeholder.com/300",
  },
  {
    id: 3,
    name: "Bluetooth Speaker",
    price: 1499,
    description: "Loud and clear sound",
    image: "https://via.placeholder.com/300",
  },
];

const Shop = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Shop Products</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
