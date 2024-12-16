import { useSelector } from "react-redux"
import { mockData } from "../../assets/Category"

import { setProducts } from "../redux/ProductSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import ProductCard from "../ProductCard"


export default function Shop() {
    const dispatch = useDispatch();
    const products = useSelector((state) => state.product)
    useEffect(() => {
        dispatch(setProducts(mockData))
    }, [dispatch])
    return (
        <>
            <div className="">
                <div className=" bg-white container mx-auto py-2">
                    <h2 className="flex items-center justify-center p-4 text-2xl font-bold">ALL Product</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                        {products.products.map((product, index) => (
                            <div key={index} >
                                <ProductCard product={product} />

                            </div>
                        ))}


                    </div>
                </div>
            </div>
        </>
    )
}