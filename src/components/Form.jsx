import React, { useEffect, useState } from 'react'


const Form = () => {
  const [showPassword, setShowPassword] = useState(false) 
  const [arr, setArr] = useState([1, 2, 3, 6, 9, 11])
  const [num, setNum] = useState(6)
  const [idx, setIndex] = useState(0)

  useEffect(() => {
    const printBinarySearch = () => {
      console.log(`Arr:[${arr.toString()}]`)
      console.log("Num:",num)
      console.log(`Binary search of num in arr:`, binarySearch(arr,num)) 
    }
    printBinarySearch() 

    function cycle(...values) {
      let index = 0;  // Chỉ mục để theo dõi giá trị hiện tại
    
      return function() {
        const value = values[index]; // Lấy giá trị hiện tại dựa trên chỉ mục
        index = (index + 1) % values.length; // Cập nhật chỉ mục, xoay vòng lại từ đầu nếu đạt đến cuối
        return value;
      };
    }
    
    // Ví dụ sử dụng:
    const onOffFn = cycle('on', 'off');
    console.log(onOffFn()); // "on"
    console.log(onOffFn()); // "off"
    console.log(onOffFn()); // "on"
    console.log(onOffFn()); // "off"
    console.log(onOffFn()); // "on"

    
  }, [num])

  const togglePassword = () => {
    setShowPassword(!showPassword) 
  }

  const binarySearch = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
      const mid = Math.floor((left + right) / 2);

      if (arr[mid] === num) {
        return mid;
      } else if (arr[mid] < num) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }

    return -1;
  }

  // const cycle = (...props) => {
  //   const swap = () => {
  //     const result = props[idx] 
      
  //     if (idx === props.length-1) {
  //       setIndex(0)
  //     } else {
  //       setIndex(idx+1)
  //     }
  //     return result
  //   } 
  //   return swap()
  // }

  // const testBai3 = () => {
  //   const onOffFn = cycle('on', 'off')
  //   console.log(onOffFn)
  // }

 

  return (
    <div className='flex flex-col items-end justify-end'>
      <div className='flex justify-start flex-col items-start grow w-full max-w-md mr-10'>
        {/* email */}
        <label>
          <span className='text-red-600'>*</span> Email
        </label>
        <input className='border border-gray-300 rounded-lg w-full my-2 p-2 focus:border focus:border-gray-500 focus:outline-none mb-6' type='text'/>
        {/* password */}
        
        <label>
          <span className='text-red-600'>*</span> Password
        </label>
        <div className='relative w-full mb-6'>
          <input
            className='border border-gray-300 rounded-lg w-full my-2 p-2 pr-10 focus:border focus:border-gray-500 focus:outline-none'
            type={showPassword ? 'text' : 'password'} // Dùng state để thay đổi type
          />
          <div
            className='absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer'
            onClick={togglePassword} // Toggle khi click vào icon
          >
            {showPassword ? (
              // Icon "con mắt bị đánh dấu chéo"
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.875 18.825A10.05 10.05 0 0112 19c-4.477 0-8.268-2.943-9.542-7a10.05 10.05 0 014.413-5.316M9.88 9.88a3 3 0 104.24 4.24"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 01-3 3m0 0a3 3 0 01-3-3m3 3a3 3 0 010-6m9.042 3c-.365-1.225-.96-2.344-1.758-3.285M3 3l18 18"
                />
              </svg>
            ) : (
              // Icon "con mắt"
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-600"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7S3.732 16.057 2.458 12z"
                />
              </svg>
            )}
          </div>
        </div>

        <div className='flex justify-between items-center'>
          <input type='checkbox' className='mr-3 custom-checkbox'></input>
          <p>
            Remember me 
          </p>
          <p className='text-yellow-400 mx-5 font-medium cursor-pointer'> 
            Forgot Password?
          </p>
        </div>

        <button className='w-full bg-yellow-400 text-left p-2 my-6 rounded-sm text-white pl-3' >
          Login
        </button>

        <p className='text-yellow-400 font-medium ml-4 cursor-pointer'>
          Register now
        </p>

      </div>
    </div>
  )
}

export default Form