import { FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addtoCart } from "./redux/CratSlice";


const ProductCard = (product) => {
    const dispatch = useDispatch()
    const handleaddtocart = (e, product) => {
        e.stopPropagation()
        e.preventDefault()
        console.log("Product being added to cart:", product);
        dispatch(addtoCart(product.product))

        alert("Add Product Suceessfull !");
    }
    return (
        <div className="bg-white p-4 shadow rounded relative border transform transition-transform duration-300 hover:scale-105 w-60">
            <img
                src={product.product.Image}
                alt={product.product.name}
                className="w-full h-48 object-contain mb-4"
            />
            <p className="text-lg font-semibold">{product.product.name}</p>
            <p className="text-gray-500">${product.product.price}</p>
            <div className="flex items-center mt-2">
                {Array(5)
                    .fill()
                    .map((_, i) => (
                        <FaStar key={i} className="text-yellow-500" />
                    ))}
            </div>
            <button onClick={(e) => handleaddtocart(e, product)} className="absolute bottom-4 right-4 bg-red-500 w-8 h-8  group px-2 py-1 rounded hover:w-32 rounded-full hover:bg-red-700 text-white text-sm tarnsition-all">
                <span className="group-hover:hidden">+</span>
                <span className="hidden group-hover:block">Add item</span>
            </button>
        </div>
    );
};

export default ProductCard;
