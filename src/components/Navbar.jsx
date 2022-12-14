import React from 'react';
export default function Navbar() {
 return (
  <header className="text-gray-400 bg-gray-900 body-font">
   <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <a
     href="/"
     className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
    >
     <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
      viewBox="0 0 24 24"
     >
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
     </svg>
     <span className="ml-3 text-xl">VRcade</span>
    </a>
    <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
     <a
      href="#about"
      className="mr-5 hover:text-white"
     >
      About
     </a>
     <a
      href="#pricing"
      className="mr-5 hover:text-white"
     >
      Pricing
     </a>
     <a
      href="#contact"
      className="mr-5 hover:text-white"
     >
      Contact
     </a>
     <a
      href="/"
      className="mr-5 hover:text-white"
     >
      Reserve a TimeSlot
     </a>
    </nav>
    {/* <button class="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0">Button
                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-4 h-4 ml-1" viewBox="0 0 24 24">
                <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
            </button> */}
   </div>
  </header>
 );
}
