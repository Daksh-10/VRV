import React from 'react'
import { useNavigate } from 'react-router-dom'

function Reload() {
  const navigate = useNavigate();
  return (<>
    <div><p className="mb-3 text-[#746b54]  tracking-widest font-serif text-center text-base">If succesfully Signed Up, go back to the login page to login :)</p> 
    <button className="bg-blue-300 hover:bg-blue-400 text-white font-bold px-4 mx-2 my-2 rounded" onClick={()=>navigate('../')} >Login Page</button>
    </div>
    
    </>
  )
}

export default Reload