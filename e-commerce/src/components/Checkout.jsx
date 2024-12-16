import { useState } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Checkout = ({setOrder}) => {
    const cart = useSelector(state => state.cart)
    // Toggle states for each section
    const [billingToggle, setBillingToggle] = useState(true);
    const [shippingToggle, setShippingToggle] = useState(true);
    const [paymentToggle, setPaymentToggle] = useState(true);

    // State for Billing, Shipping, and Payment Information
    const [billingInfo, setBillingInfo] = useState({
        name: "",
        email: "",
        phone: "",
    });

    const [shippingInfo, setShippingInfo] = useState({
        address: "",
        city: "",
        zipcode: "",
    });

    const [paymentInfo, setPaymentInfo] = useState({
        method: ""
    });

    // Handle input change for billing, shipping, and payment
    const handleInputChange = (e, type) => {
        const { name, value } = e.target;
        if (type === "billing") {
            setBillingInfo({
                ...billingInfo,
                [name]: value,
            });
        } else if (type === "shipping") {
            setShippingInfo({
                ...shippingInfo,
                [name]: value,
            });
        } else if (type === "payment") {
            setPaymentInfo({
                ...paymentInfo,
                [name]: value,
            });
        }
    };

    // Handle payment method selection
    const handlePaymentMethodChange = (e) => {
        const { value } = e.target;
        setPaymentInfo({
            ...paymentInfo,
            method: value,
        });
    };
    const navigate = useNavigate();
    const handlePlaceOrder =()=>{
        const neworder = {
            products:cart.products,
            orderNumber : "12346",
            ShippingInfo :shippingInfo,
            totalPrice :cart.totalPrice
        }
        setOrder(neworder)
        navigate('/order-conformation')
    }

    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            <div>
                <h4 className="text-2xl font-semibold mb-4">Order Summary</h4>

                {/* Billing Information Section */}
                <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="border p-2 mb-6">
                            <div className="flex items-center justify-between" onClick={() => setBillingToggle(!billingToggle)}>
                                <h3 className="text-lg font-semibold mb-2">Billing Information</h3>
                                {billingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${billingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label htmlFor="name" className="block text-gray-700">Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={billingInfo.name}
                                        onChange={(e) => handleInputChange(e, "billing")}
                                        placeholder="Enter name"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="email" className="block text-gray-700">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={billingInfo.email}
                                        onChange={(e) => handleInputChange(e, "billing")}
                                        placeholder="Enter email"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="phone" className="block text-gray-700">Phone</label>
                                    <input
                                        type="text"
                                        name="phone"
                                        value={billingInfo.phone}
                                        onChange={(e) => handleInputChange(e, "billing")}
                                        placeholder="Enter phone"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                        <h3 className="text-lg font-semibold mb-4">Order Summery</h3>
                        <div className="space-y-4">
                            {cart.products.map((product) => (
                                <div key={product.id} className="flex justify-between">
                                    <div className="flex">
                                        <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded" />
                                        <div className="ml-4">
                                            <h4 className="text-md font-semibold">{product.name}</h4>
                                            <p className="text-gray-600">${product.price*product.qunatity}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="mt-4 border pt-4">
                            <div className="flex justify-between">
                                <span>Total Price:</span>
                                <span className="font-semibold">{(cart.totalPrice).toFixed(2)}</span>
                            </div>
                        </div>
                        <button className="w-full bg-red-600 text-white py-2 mt-6 hover:bg-red-800" onClick={handlePlaceOrder}>Place Order</button>
                    </div>
                </div>

                {/* Shipping Information Section */}
                <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="border p-2 mb-6">
                            <div className="flex items-center justify-between" onClick={() => setShippingToggle(!shippingToggle)}>
                                <h3 className="text-lg font-semibold mb-2">Shipping Information</h3>
                                {shippingToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${shippingToggle ? "" : "hidden"}`}>
                                <div>
                                    <label htmlFor="address" className="block text-gray-700">Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={shippingInfo.name}
                                        onChange={(e) => handleInputChange(e, "shipping")}
                                        placeholder="Enter address"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="city" className="block text-gray-700">City</label>
                                    <input
                                        type="city"
                                        name="city"
                                        value={shippingInfo.email}
                                        onChange={(e) => handleInputChange(e, "shipping")}
                                        placeholder="Enter city"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                                <div>
                                    <label htmlFor="zipcode" className="block text-gray-700">Zip code</label>
                                    <input
                                        type="text"
                                        name="zipcode"
                                        value={shippingInfo.phone}
                                        onChange={(e) => handleInputChange(e, "shipping")}
                                        placeholder="Enter zipcode"
                                        className="w-full px-3 py-2 border"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
                </div>

                {/* Payment Information Section */}
                <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                    <div className="md:w-2/3">
                        <div className="border p-2 mb-6">
                            <div className="flex items-center justify-between" onClick={() => setPaymentToggle(!paymentToggle)}>
                                <h3 className="text-lg font-semibold mb-2">Payment Information</h3>
                                {paymentToggle ? <FaAngleDown /> : <FaAngleUp />}
                            </div>
                            <div className={`space-y-4 ${paymentToggle ? "" : "hidden"}`}>
                                {/* Payment Method Radio Buttons */}
                                <div>
                                    <label className="block text-gray-700">Payment Method</label>
                                    <div className="space-x-4">
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="cash"
                                                checked={paymentInfo.method === "cash"}
                                                onChange={handlePaymentMethodChange}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Cash on Delivery</span>
                                        </label>
                                    </div>
                                    <div>
                                        <label className="inline-flex items-center">
                                            <input
                                                type="radio"
                                                name="paymentMethod"
                                                value="online"
                                                checked={paymentInfo.method === "online"}
                                                onChange={handlePaymentMethodChange}
                                                className="form-radio"
                                            />
                                            <span className="ml-2">Online Payment</span>
                                        </label>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border"></div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
