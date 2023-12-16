import React from 'react'

const Footer = () => {
  return (
   <>


<footer className="bg-blue-300 rounded-lg dark:bg-gray-800">
  <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
    <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 . All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">About</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Products</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Location</a>
      </li>
      <li>
        <a href="#" className="hover:underline me-4 md:me-6">Team Members</a>
      </li>
      <li>
        <a href="#" className="hover:underline">Contact</a>
      </li>
    </ul>
    <ul>
    <li>
        <a href="#" className="hover:underline">Services</a>
      </li>
    </ul>
  </div>
</footer>

   </>
  )
}

export default Footer