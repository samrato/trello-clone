import React from 'react'
import { Lists } from '../Constants/Type'

function MyList(content:Lists) {
    const Fast =content[0];
  return (
    
       <div className="flex-1  text-gray-800 flex-wrap justify-start"> 
        <div className="bg-white text-black flex-1 max-w-[300px]">
            <div className="flex flex-row justify-between">
                <p> {Fast.Title}</p>
                <div> </div>
            </div>
        </div>

       </div>

  )
}

export default MyList
