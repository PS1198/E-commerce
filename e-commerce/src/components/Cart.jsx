import { useDispatch, useSelector } from "react-redux"
import EmptyIcon from "../assets/images/empty.png"
import { FaTrash } from "react-icons/fa"
import { useState } from "react"
import Modal from "./Modal"
import { decreaseQunatity, increaseQunatity, removeFromCart } from "./redux/CratSlice"
import { useNavigate } from "react-router-dom"



export default function Cart() {
    const navigate = useNavigate()
    const dispatch = useDispatch();
    const cart = useSelector(state => state.cart)
    console.log(cart.products,"hellocart")
    const [add, setAdd] = useState('main street 001 raipur UP')
    const [modalOpen, setModalOpen] = useState(false);
    return (
        <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
            {cart.products.length > 0 ?
                <div>
                    <h4 className="text-2xl font-semibold mb-4">SHOPPING CART</h4>
                    <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
                        <div className="md:w-2/3">
                            <div className="flex justify-between  border-b items-center mb-4 text-xs font-bold">
                                <p>PRODUCTS</p>
                                <div className="flex space-x-8">
                                    <p>Price</p>
                                    <p>Qunatity</p>
                                    <p>SubTotal</p>
                                    <p>Remove</p>
                                </div>
                            </div>
                            <div>
                                {cart.products.map((product) => (
                                    <div key={product.id} className="flex items-center justify-between p-3 border-b">
                                        <div className="md:flex  items-center space-x-4">
                                            <img src={product.image} alt={product.name} className="w-16 h-16 object-contain rounded" />
                                            <div className="flex-1 ml-4">
                                                <h3 className="text-lg font-semibold"> {product.name}</h3>
                                            </div>
                                        </div>
                                        <div className="flex space-x-12 items-center">
                                            <p>${product.price}</p>
                                            <div className="flex items-center justify-center  border">
                                                <button onClick={()=>dispatch(decreaseQunatity(product.id))} className="text-xl px-1 border-1">-</button>
                                                <p className="text-xl px-2">{product.qunatity}</p>
                                                <button className="text-xl px-1 border-1" onClick={()=>dispatch(increaseQunatity(product.id))}>+</button>
                                            </div>

                                            <p>${(product.qunatity * product.price).toFixed(2)}</p>
        
                                            
                                            <button className="text-red-500 hover:text-red-700" onClick={()=>dispatch(removeFromCart(product.id))}><FaTrash /></button>
                                        </div>
                                    </div>
                                ))}
                            </div>
                           
                        </div>
                        <div className="md:w-1/3 bg-white p-6 rounded-lg shadow-md border">
                                <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
                                <div className="flex justify-between mb-5 border-b mb-5 p-1">
                                    <span className="text-sm">Total Items:</span>
                                    <span>{cart.totalQunatity}</span>
                                </div>
                                <div className="mb-4 border-b pb-2">
                                    <p>Shipping:</p>
                                    <p className="ml-2">Shipping to:</p>
                                    <span className="text-sm font-bold">{add}</span>
                                    <button className="text-blue-500 hover:underline mt-1 ml-2" onClick={() => setModalOpen(true)}> Change Address</button>
                                </div>
                                <div className="flex justify-betwwen mb-4">
                                    <span>Total Price:</span>
                                    <span>{(cart.totalPrice).toFixed(2)}</span>
                                </div>
                                <button className="w-full bg-red-500  text-white  py-2 hover:bg-red-800" onClick={()=> navigate('/checkout')}> Proceed to checkout</button>
                            </div>
                    </div>
                    <Modal modalOpen={modalOpen} setModalOpen={setModalOpen} setAdd={setAdd} />
                </div>
                 :
                <div className="flex justify-center">
                    <img src={EmptyIcon} alt="" className="h-96" />

                </div>
            } 
        </div>
    )
}