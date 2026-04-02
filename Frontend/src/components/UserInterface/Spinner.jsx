import React from 'react'

export default function Spinner() {
  return (
    <div className='max-w-screen h-screen flex justify-center items-center py-16'>
        <div className='w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
            <h2 className="text-xl font-semibold text-gray-800">Please Wait...</h2>


    </div>
  )
}
