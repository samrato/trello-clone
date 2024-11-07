import React from 'react'
import { Lists } from '../Constants/Type'

function MyList(content:Lists) {
    const Fast =content[0];
  return (
    <div>
       <div className="flex-1  text-gray-800 flex-wrap justify-start"> 
        <div className="bg-white text-black">{Fast.Title}</div>
       </div>
    </div>
  )
}

export default MyList
