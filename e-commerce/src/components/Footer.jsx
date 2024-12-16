import { FaFacebook, FaLinkedin, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

function Footer(){
    
    return(
       <footer className="bg-gray-800 text-white py-8 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <h4 className="text-xl font-semi-bold">E-commerce</h4>
                <p className="mt-4">your one step fot all your need. Shop with use and experience then best online shopping experience</p>
            </div>
            <div className="flex flex-col md:items-center">
                <h4 className="text-lg font-semi-bold">Quick Links</h4>
                <ul className="mt-4 space-y-2">
                    <li className="hover:underline"><Link to="/">Home</Link></li>
                    <li className="hover:underline"><Link to="/shop">Shop</Link></li>
                    <li className="hover:underline"><Link>Abouts</Link></li>
                    <li className="hover:underline"><Link>Contact</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="text-lg font-semi-bold">Follows U</h4>
                <div className="flex space-x-4 mt-4">
                    <Link><FaFacebook></FaFacebook></Link>
                    <Link><FaTwitter></FaTwitter></Link>
                    <Link><FaWhatsapp></FaWhatsapp></Link>
                    <Link><FaLinkedin></FaLinkedin></Link>
                </div>
                <form className="flex items-center justify-center mt-8">
                    <input type="email" placeholder="enter a email" className="w-full p-2 rounded-l-lg bg-gray-800 border border-gray-600"></input>
                    <button className="bg-red-600 rounded-r-lg px-6 py-2 text-white border border-gray-600">Sumit</button>
                </form>
            </div>
        </div>
       </footer>
    )
}
export default Footer;