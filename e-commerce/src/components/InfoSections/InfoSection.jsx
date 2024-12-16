import { FaHeadset, FaShippingFast, FaTag } from "react-icons/fa";
import { FaLock, FaMoneyBillWave } from "react-icons/fa";

 const InfoSection=()=>{
    const items =[
        {
            icon:<FaShippingFast/>,
            title:'Free Shipping',
            description:'Get your order with no cost'
        }, {
            icon:<FaHeadset/>,
            title:'Services 24/7',
            description:'We are assit you any time'
        }, {
            icon:<FaMoneyBillWave/>,
            title:'Money Back',
            description:'Refund service available'
        }, {
            icon:<FaLock/>,
            title:'Secure Payment',
            description:'Online Payment Transition'
        }, {
            icon:<FaTag/>,
            title:'Discount',
            description:'Enjoy product with max dicount'
        }
    ]
    return(
        <>
        <div className="bg-white pb-8 pt-12">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            {items.map((item,index)=>(
                <div key={index} className="flex flex-col items-center text-center p-4 border rounded-lg shadow-md transfrom transition-transfrom duration-300 hover:scale-105">
                    {item.icon}
                    <h3 className="mt-3 text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-gray-500">{item.description}</p>
                </div>
            ))}
        </div>
        </div>
        </>
    )
 }
 export default InfoSection;  