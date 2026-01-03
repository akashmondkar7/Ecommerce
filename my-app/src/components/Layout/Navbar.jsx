import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="white  shadow-md shadow-gray-300 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-14">
          
          {/* Logo */}
          <Link to="/" className="text-orange-500 font-bold text-xl">
            ShopKart
          </Link>

          {/* Menu */}
          <div className="flex space-x-6">
            <Link to="/" className="text-zinc-400  hover:text-orange-400">
              Home
            </Link>
            <Link to="/shop" className="text-zinc-400 hover:text-orange-400">
              Shop
            </Link>
            <Link to="/cart" className="text-zinc-400 hover:text-orange-400">
              Cart
            </Link>
            <Link to="/login" className="text-zinc-400 hover:text-orange-400">
              Login
            </Link>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
