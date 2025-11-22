import React from 'react'
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Link from 'next/link';

const page = () => {
  return (
<>
 <ToastContainer theme="dark" />
      <div className="hidden md:block" >
        <nav className='bg-purple-700 rounded-2xl mycontainer max-h-80 bg-cover'>
          <div className='insidenav ' >
            <Link className=' ' href="/">
            

            <div className='logo shadow-md shadow-text-amber-50'>Password Manager <div className='text-sm text-green-200'> Save your password</div></div>

            </Link>
            <ul className="hidden md:block">
              <li className='insidelist'>
                <span className='flex'>

                  <input type="text" className='bg-white rounded-full  focus:outline-none focus:ring-0 focus:border-none w-64 pl-2 ml-0.5 mr-0.5 py-0.5 border-whiter-none text-black ' placeholder='Search' />

                </span>




                <Link className='  hover:bg-amber-50 hover:text-black rounded-full px-2 mt-0.5' href="/">Home</Link>
                <Link className='  hover:bg-amber-50 hover:text-black rounded-full px-2 mt-0.5' href="/about">About</Link>
                <Link className='  hover:bg-amber-50 hover:text-black rounded-full px-2 mt-0.5' href="/contacts">Contacts us</Link>



              </li>
            </ul>
          </div>

        </nav>
      </div>
      </>
  )
}

export default page
