import React from 'react'
import { Lists } from '../Constants/Type'
import { AiFillLike } from "react-icons/ai"; 
import { FaComments } from "react-icons/fa";   

function MyList(content:Lists) {
    const Fast =content[0];
  return (
    
       <div className="flex-1  text-gray-800 flex-wrap justify-start"> 
        <div className="bg-white text-black flex-1 max-w-[300px] px-2">
            <div className="flex flex-row justify-between items-center text-center font-semibold p-2 ">
                <p className="underline text-lg tracking-wide  uppercase"> {Fast.Title}</p>
                <div className="text-gray-500 font-bold tracking-wide text-xl bg-slate-200 pb-3 px-3 rounded-md"> ...</div>
            </div>
            <div className="gap-2 bg-blue-300 rounded-lg p-3">
                <p>{Fast.Items[0].Name}</p>
                <div className="flex flex-row justify-start items-center gap-3">
                <AiFillLike />
                <FaComments />
                </div>
            </div>
        </div>

       </div>

  )
}

export default MyList
