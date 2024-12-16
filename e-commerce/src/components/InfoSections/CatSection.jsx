import MenImage from "../../assets/images/man.jpg";
import WomenImage from "../../assets/images/Women.jpg";
import KidImage from "../../assets/images/kid.jpg";
const CatSection = () =>{
    const Categrory = [
        {
            title:"Men",
            ImageUrl:MenImage ,
        },
        {
            title:"Women",
            ImageUrl:WomenImage,
        },
        {
            title:"Kid",
            ImageUrl:KidImage,
        },
    ]
    return(
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 cursor-pointer">
        
        {Categrory.map((item,index)=>(
            <div key={index} className="relative h-64">
                <img
                        src={item.ImageUrl} 
                        alt=""
                        className="w-full h-full object-cover rounded-lg shadow-md" />
                <div className="absolute top-20 left-12">
              <p className="text-2xl font-bold"> {item.title}</p> 
              <p className="text-red-700 font-bold"> View All</p>
                </div>
            </div>
        ))}
        </div>
    )
}
export default CatSection;