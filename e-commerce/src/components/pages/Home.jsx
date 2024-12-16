import { useSelector } from "react-redux"
import { Category, mockData } from "../../assets/Category"
import image from "../../assets/images/image1.jpg"
import CatSection from "../InfoSections/CatSection"
import InfoSection from "../InfoSections/InfoSection"
import { setProducts } from "../redux/ProductSlice"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import ProductCard from "../ProductCard"
import Shop from "./Shop"

export default function Home() {
    const dispatch = useDispatch();
    const products = useSelector((state)=>state.product)
useEffect(()=>{
    dispatch(setProducts(mockData))
},[dispatch])
    return (
        <>
            <div className="bg-white mt-2 px-4 md:px-16 lg:px-24">
                <div className="container mx-auto py-4 flex flex-col md:flex-row space-x-2">
                    <div className="w-full md:w-3/12 ">
                            <div className="bg-red-600 text-white text-xs font-blod px-2 py-2.5">All Product List</div>
                            <ul className="space-y-4 bg-gray-100 p-3 border">
                            {Category.map((catogroy, index) =>
                                <li key={index} className="flex items-center text-sm font-medium">
                                    <div className="w-2 h-2 border border-red-700 bg-black mr-2"></div>
                                    {catogroy}

                                </li>
                            )}
                        </ul>
                        </div>
                        <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
                            <img src={image} alt="" className="w-full h-full" />
                            <div className="absolute top-16 left-8">
                                <p className="text-4xl font-bold">Welcome to our site</p>
                                <h2 className="text-xl  mt-2.5 font-bold">Products</h2>
                                
                                <button className="bg-white p-2 rounded text-xl font-bold">Shop Now</button>
                            </div>
                        </div>
                       
                   
                </div>
                <InfoSection/>
                <CatSection/>
                <div className="container mx-auto py-2">
                    <h2 className="flex items-center justify-center p-4 text-2xl font-bold">ALL Top Product</h2>
                    <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                        {products.products.slice(0,5).map((product,index)=>(
                            <div key={index} >
                                <ProductCard product={product}/>
                               
                            </div>
                        ))}
                            
                       
                    </div>
                </div>
                <Shop/>
            </div>
        </>
    )
}