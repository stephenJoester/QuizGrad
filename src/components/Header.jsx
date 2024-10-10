import React from 'react'

const Header = () => {
  return (
    <header className="bg-white text-black p-4 flex border-b border-gray-200 mx-6 py-0 h-16">
      <div className='w-2/5 flex justify-center items-center text-center'>
        <h1 className="text-3xl font-medium">
          Quiz
          <span className='text-yellow-400'>Grad</span>
        </h1>
      </div>
      <div className='w-3/5 flex gap-4 justify-center items-center font-normal'>
        <div className='h-4/5 flex items-center hover:border-b hover:border-blue-500'>
          <a className='text-gray-400 cursor-pointer hover:text-blue-500 hover:font-semibold'>Top</a> 
        </div>
        <div className='h-4/5 flex items-center hover:border-b hover:border-blue-500'>
          <a className='text-gray-400 cursor-pointer hover:text-blue-500 hover:font-semibold'>How it works?</a> 
        </div>
        <div className='h-4/5 flex items-center hover:border-b hover:border-blue-500'>
          <a className='text-gray-400 cursor-pointer hover:text-blue-500 hover:font-semibold'>Features</a> 
        </div>
        <div className='h-4/5 flex items-center hover:border-b hover:border-blue-500'>
          <a className='text-gray-400 cursor-pointer hover:text-blue-500 hover:font-semibold'>About us</a> 
        </div>
        <div className='h-4/5 flex items-center hover:border-b hover:border-blue-500'>
          <a className='text-gray-400 cursor-pointer hover:text-blue-500 hover:font-semibold'>Login</a> 
        </div>
      </div>
    </header>
  )
}

export default Header