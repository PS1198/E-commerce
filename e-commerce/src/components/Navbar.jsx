import { FaSearch, FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const products = useSelector(state => state.cart.products)
  console.log(products.length,"hello")
  return (
    <>
      <nav className="bg-black text-white px-8 md:px-16 lg:px-20">
        <div className="container py-2 flex justify-center md:justify-between items-center">
          <div className="text-2xl font-bold hidden md:inline">E-commerce</div>
          <div className="space-x-6 px-4">
            <Link to="/" className="hover:underline hover:text-orange-500">
              Home
            </Link>
            <Link to="#home" className="hover:underline hover:text-orange-500">
              About Us
            </Link>
            <Link to="/shop" className="hover:underline hover:text-orange-500">
              Shop
            </Link>
            <Link to="#home" className="hover:underline hover:text-orange-500">
              Contact
            </Link>
          </div>
          <div className="flex items-center justify-center space-x-4">
            <Link to="/cart" className="relative">
            <FaShoppingCart className="text-lg"/>
            {
              products.length > 0 &&(
              <span className="absolute top-0 text-xs w-4 left-3 bg-red-600 rounded-full">
                {products.length}
              </span>
           ) }
            </Link>

          </div>
          <div className="relative flex-1 mx-4">
            <form>
            <input type="text" placeholder="search Product" className="w-full rounded py-2 px-8"></input>
            <FaSearch className="absolute top-3 right-3 text-red-500"></FaSearch>
            </form>
          </div>
          <div className="bg-gradient-to-r from-green-400 to-blue-500 text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            <Link to="/login">Login</Link>/  <Link to="/register">Register</Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
