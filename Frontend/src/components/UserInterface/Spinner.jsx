import React from 'react'

export default function Spinner() {
  return (
    <div className='flex justify-center items-center py-16'>
        <div className='w-10 h-10 border-4 border-gray-200 border-t-black rounded-full animate-spin'></div>
    </div>
  )
}
