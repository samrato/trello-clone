import React from 'react'
import { FaStarHalfStroke } from "react-icons/fa6";
import { MdLock } from "react-icons/md";
import { IoHomeSharp } from "react-icons/io5";

function NavBar() {
  return (
    <header className="shadow-md p-2 flex flex-row ">
     <div className="flex flex-row items-center justify-between w-1/2 ">
     <h2 className="text-xl">Welcome Board</h2>
    <div className="bg-blue-400 p-1 rounded-sm"> 
        <FaStarHalfStroke size={32}/>
        </div>

     <div className="bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:px-5 transition-all duration-200 ease-in-out hover:bg-pink-700 "> Personal</div>
     <div className="bg-blue-400 p-1 rounded-sm flex flex-row items-center gap-2"> <MdLock /><span/>Private</div>
     </div>
     <div className="flex flex-row items-center justify-end w-1/2 space-x-3"> 
     <div className="bg-blue-400 p-1 rounded-sm hover:cursor-pointer hover:pl-5 transition-all duration-200 ease-in-out hover:bg-pink-700 ">
     <IoHomeSharp />Home
         <span/></div>
     <div className="bg-blue-400 p-1 rounded-sm"> -Show Menu</div>
     </div>
    </header>
  );
}

export default NavBar
