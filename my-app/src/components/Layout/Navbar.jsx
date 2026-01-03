import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-indigo-600 text-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <Link to="/" className="font-bold text-xl">
            ShopKart
          </Link>

          {/* Menu */}
          <div className="flex space-x-6">
            <Link to="/" className="hover:text-gray-200">
              Home
            </Link>
            <Link to="/shop" className="hover:text-gray-200">
              Shop
            </Link>
            <Link to="/cart" className="hover:text-gray-200">
              Cart
            </Link>
            <Link to="/login" className="hover:text-gray-200">
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
