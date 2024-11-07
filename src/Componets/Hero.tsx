import React, { useState } from 'react'
import { Lists } from '../Constants/Type'

function Hero() {
    const [list, setList] = useState<Lists> (
        [
            {
                Title:"Courses",
                Items:[
                    {
                        Name:"BCS 210",
                        Likes:4,
                        Comments:[
                            "superb"
                        
                            
                        ]
                    }
                ]
            }
        ]
    )
    
    
    console.log(list)
  return (
    <div className="px-4 md:px-12 lg:px-20 flex flex-col md:flex-row">

        <div className="flex-1 bg-white text-gray-800 flex-col"> hello</div>
        <div className="bg-blue-400"> 
            <p><span>+</span>Add another List</p>
        </div>
    
    </div>
  )
}

export default Hero
