import React, { useState } from 'react'
import UserAuth from './UserAuth';
import StaffAuth from './StaffAuth';

function Authorize() {
    const [toggle, setToggle] = useState(true);
  return (<>
    <div className='pt-5 w-screen h-screen ' style={{backgroundImage:'url(./food.png)'}}>
        <div className='flex justify-center'>
            <button className='py-2.5 px-10  text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-400 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-400 text-bold rounded-l-full ' onClick={() => setToggle(true)}>User</button>
            <button className='shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:z-10 focus:ring-4 focus:ring-purple-500 dark:focus:ring-purple-600 text-white font-bold py-4 px-10 border-solid border-2 border-purple-500 text-lg rounded-r-full ' onClick={() => setToggle(false)}>Staff</button>
        </div>
        <div className='flex justify-center'>
            {toggle ? <UserAuth /> : <StaffAuth />}
        </div>
        
    </div>
    </>
  )
}

export default Authorize