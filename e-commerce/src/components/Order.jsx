import { useNavigate } from "react-router-dom";

const Order = ({order}) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="container mx-auto py-8 px-4 md:px-16 lg:px-24">
                <h3 className="text-2xl font-semibold mb-4"> Thankyou for your Order!</h3>
                <p>Your Order has been Successfully.You will recieve an email confirmation shortly </p>
                <div className="mt-6 p-4 border rounded-lg  bg-gray-100">
                    <h3 className="text-lg font-semibold mb-2"> Order Summery</h3>
                    <p> Order Number:{order.orderNumber}</p>
                    <div className="mt-4">
                        <h4 className="text-md font-semibold mb-2">Shipping Information</h4>

                        <p>{order.ShippingInfo.address}</p>
                        <p>{order.ShippingInfo.city}</p>
                        <p>{order.ShippingInfo.zipcode}</p>
                    </div>
                    <div className="mt-4">
                        <h4 className="text-md font-semibold mb-2">Items Orderd</h4>
                        {order.products.map((product) => (
                            <div key={product.id} className="flex justify-between mt-2">
                                <p>{product.name}(x{product.qunatity})</p>
                                <p>{product.qunatity * product.price}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-4">
                        <span>Total Price:</span>
                        <span className="font-semibold">${order.totalPrice.toFixed(2)}</span>
                    </div>
                </div>
                <div className="mt-6">
                    <button className="bg-green-500 text-white py-2 px-4 hover:bg-green-500">Track Order</button>
                    <button className=" ml-4 bg-red-500 text-white py-2 px-4 hover:bg-red-500" onClick={()=>navigate('/')}>Continue Shopping</button>
                </div>

            </div>
        </>
    )
}
export default Order;