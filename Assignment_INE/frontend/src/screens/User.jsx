import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';


const User = () => {
    const [message, setMessage] = useState('');
    const [foodList, addFoodItems] = useState({Noodles:0, MNC:0, Burger:0, Juice:0});
    const location = useLocation();
    useEffect(() => {
        const fetchMessage = async () => {
            try {
                const token = localStorage.getItem('token');
                const response = await axios.get('http://localhost:3000/dashboard', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                setMessage(response.data.message);
            } catch (error) {
                setMessage('Authorization failed');
            }
        };

        fetchMessage();
    }, []);

    function handleAdd(item) {
        addFoodItems({...foodList, [item]: foodList[item]+1});
    }
    function handleSub(item) {
        if(foodList[item]>0){
        addFoodItems({...foodList, [item]: foodList[item]-1});}
    }

   function placeOrder() {
    const username = location.state || {};
    console.log(foodList);
    console.log(username);
      try {
        axios.post('http://localhost:3000/handleOrder', { username, foodList });
        alert('Order placed');
    }catch (error) {
      alert('Order failed');
  }
    }

    return (<>
        <div>
            <div className='flex justify-center'>
             <p className="mb-3 text-[#746b54] uppercase tracking-widest text-7xl font-bold  first-letter:float-start">
            Menu
          </p>
            </div>
            <div className='flex justify-center mb-3 text-[#746b54] tracking-widest font-serif text-center text-base'>{message}</div>

            <div className="pl-6 grid grid-cols-4">

            <div className="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Noodles
                  </div>
                  <img src={"./noodles.jpg"}></img>
                  <button
                    onClick={() => handleAdd("Noodles")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => handleSub("Noodles")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Remove Item
                  </button>
                </div>
              </div>

            <div className="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Mac N Cheese
                  </div>
                  <img src={"./MNC.jpg"}></img>
                  <button
                    onClick={() => handleAdd("MNC")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => handleSub("MNC")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Remove Item
                  </button>
                </div>
              </div>

              <div className="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Burger
                  </div>
                  <img src={"./burger.webp"}></img>
                  <button
                    onClick={() => handleAdd("Burger")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => handleSub("Burger")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Remove Item
                  </button>
                </div>
              </div>

            <div className="max-w-sm rounded overflow-hidden ml-4 mt-4 shadow-lg">
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Cranberry Juice
                  </div>
                  <img src={"./juice.jpg"}></img>
                  <button
                    onClick={() => handleAdd("Juice")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Add Item
                  </button>
                  <button
                    onClick={() => handleSub("Juice")}
                    className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded"
                  >
                    Remove Item
                  </button>
                </div>
              </div>
              </div>

              <div className='pl-10 pt-5 '>
                <div>
                    <h2 className='mb-3 text-xl text-[#746b54] tracking-widest font-serif text-base'>CART</h2>
              <ul className="max-w-md w-1/3 divide-y divide-gray-200 dark:divide-gray-700">
   <li className="pb-3 sm:pb-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-black font-bold">
               Noodles
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-black">
            x {foodList["Noodles"]}
         </div>
      </div>
   </li>
   
   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-black ">
               Mac N Cheese
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-black">
            x {foodList["MNC"]}
         </div>
      </div>
   </li>

   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-black ">
               Burger
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-black">
            x {foodList["Burger"]}
         </div>
      </div>
   </li>

   <li className="py-3 sm:py-4">
      <div className="flex items-center space-x-4 rtl:space-x-reverse">
         <div className="flex-1 min-w-0">
            <p className="text-lg font-medium text-black ">
               Juice
            </p>
         </div>
         <div className="inline-flex items-center text-base font-semibold text-black">
            x {foodList["Juice"]}
         </div>
      </div>
   </li>
   </ul>

   <button className='bg-blue-300 hover:bg-blue-400 text-white font-bold px-10 py-5 mx-2 my-2 rounded' onClick={placeOrder}>Place Order</button>
   </div>
              </div>
              </div>
              </>
    );
};

export default User