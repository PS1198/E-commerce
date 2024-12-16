import { useState } from "react";




const Modal = ({modalOpen,setModalOpen,setAdd}) =>{
    const [newadd,setNewAdd] = useState("");
    const onClose = () =>{
        setAdd(newadd)
        setModalOpen(false)
    }
    if(!modalOpen) return null;
    return(
        <>
        <div className=" fixed flex items-center justify-center inset-0 bg-black bg-opacity-50">
            <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md">
                <button className="absolute top-4 right-4text-gray-300 text-3xl" onClick={()=>setModalOpen(false)}></button>
                <div>
                <input type="text" placeholder="Enter  new address" className="border p-2  mb-4 w-full" onChange={(e)=>setNewAdd(e.target.value)}></input>
                <div className="flex justify-end">
                    <button className="bg-gray-500 text-white py-2 px-4 rounded mr-2" onClick={()=>setModalOpen(false)}>
                        Cancel
                    </button>
                    <button className="bg-blue-500 text-white py-2 px-4 rounded mr-2" onClick={onClose} >
                        Save Address
                    </button>
                </div>
            </div>
            </div>
        </div>
        </>
    )
}
export default Modal;