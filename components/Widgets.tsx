import React from 'react'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import {TwitterTimelineEmbed} from 'react-twitter-embed'
function Widgets() {
  return (
    <div className='mt-2 px-2 col-span-2 hidden lg:inline'>
        <div className='flex items-center space-x-2 bg-gray-100 p-3
        rounded-full mt-2'>
            <MagnifyingGlassIcon className='h-5 w-5 text-gray-400'/>
            <input 
                type="text" 
                placeholder="Search Twitter" 
                className='flex-1 outline-none bg-transparent'
                />
        </div>

        <TwitterTimelineEmbed
            sourceType="profile"
            screenName="abhishek16321"
            options={{height: 1000}}
        />
    </div>
  )
}

export default Widgets
