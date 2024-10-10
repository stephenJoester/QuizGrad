import React from 'react'
import Form from './Form'

const MainLayout = () => {
  return (
    <div className='flex mt-4'>
        <div className='flex-1'>
            <div className='flex justify-center items-center'>
                <img src='logo.png' className='h-20'/>
            </div>
            <div className='flex justify-end'>
                <div className='items-center mr-36'>
                    <h2>Welcome back!</h2>
                    <h2>Please login/Sign up to your account.</h2>
                </div>
            </div>
            <Form/>
        </div>
        <div className='flex-1'>
            <img src='banner_login.png' className='h-80 ml-10'/>
        </div>
    </div>
  )
}

export default MainLayout