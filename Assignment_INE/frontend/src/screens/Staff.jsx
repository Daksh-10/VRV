import React, { useState } from 'react'
import axios from 'axios'

let response = [];

function Staff() {
  const [data, setData] = useState([]);

  async function getOrder() {
    try {
      response = await axios.post('http://localhost:3000/getOrder').then(res => res.data.userOrder);
      setData(response);
      console.log(response);
  }catch (error) {
    alert('Order failed');
  }
  }

  function handleDel(name) {
    setData(data.filter((value) => {
      return value.username.username !== name;
    }))
  }
  return (<>
  <div className='pt-3 flex justify-center mb-3 text-[#746b54] text-xl tracking-widest font-serif text-center text-base'>Welcome to Staff Dashboard</div>
  <div className='flex justify-center'>
    <button className="bg-gray-700 hover:bg-gray-800 text-white font-bold px-10 py-6 mx-2 my-2 rounded" onClick={getOrder}>Get Orders</button>
    </div>
      <ul className='grid grid-cols-3'>
    {data.map(value => {return(<>
    <li key={value.id} className='pl-9'>
      <div className='pt-2 mb-3 text-[#746b54] text-xl tracking-widest font-serif text-base'>Order By: {value.username.username}</div>
<div className="relative overflow-x-auto">
    <table className="w-1/3 text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Noodles
                </th>
                <th scope="col" className=" text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Mac N Cheese
                </th>
                <th scope="col" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Burger
                </th>
                <th scope="col" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Juice
                </th>
                <th scope="col" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td scope="row" className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.foodList.Noodles}
                </td>
                <td className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.foodList.MNC}
                </td>
                <td className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.foodList.Burger}
                </td>
                <td className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {value.foodList.Juice}
                </td>
                <td className="text-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                <button onClick={()=>handleDel(value.username.username)}>Done</button>
                </td>
            </tr>
        </tbody>
    </table>
</div>
</li>
      
      </>
    )
    })}
    </ul>
    </>
  )
}

export default Staff