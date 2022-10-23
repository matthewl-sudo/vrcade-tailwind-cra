import React from 'react';
import image from '../assets/3d-effect-steve-johnson.jpg';
import SlideIn from './animations/SlideIn';
// import image from '../assets/3d-lights-maximalfocus.jpg';
// import image from '../assets/cyber-landscape-salvatore-andrea-santacroce.jpg';

export default function Pricing() {
 return (
  <div
   id="pricing"
   className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
   style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    alignItems: 'center',
   }}
  >
   <div className="sm:max-w-lg sm:mx-auto bg-opacity-60 backdrop-filter backdrop-blur">
    <SlideIn
     class={
      'bg-white shadow-lg rounded-lg sm:p-10 sm:pt-4 bg-clip-padding bg-opacity-60 border border-gray-200'
     }
    >
     <div className="max-w-md mx-auto divide-y divide-gray-200">
      <div className="space-y-4 text-gray-700 sm:text-lg sm:leading-7">
       <h3 className="underline text-4xl text-gray-800 font-medium pb-1 xs:pb-2">
        Pricing
       </h3>
       {/* break */}
       <div className=" block md:flex items-center">
        <div className="border sm:shadow-2xl w-full relative z-1  rounded shadow-lg overflow-hidden">
         <h4 className="text-lg font-medium text-black-500 uppercase p-8  text-center border-b border-gray-200 tracking-wide">
          no <br />
          membership
         </h4>
         <div className="block my-3 sm:flex md:block lg:flex items-center justify-center">
          <p className="text-center">10$ Admission fee</p>
         </div>
         <div className="flex justify-center ">
          <ul>
           <li className="flex items-center">
            <div className="bg-indigo-900 rounded-full p-2 fill-current"></div>
            <span className="text-gray-700 text-sm ml-3">
             No setup, pay as go
            </span>
           </li>
           <li className="flex items-center">
            <div className="bg-indigo-900 rounded-full p-2 fill-current"></div>
            <span className="text-gray-700 text-sm ml-3">
             Flat rate 5$ per game
            </span>
           </li>
           <li className="flex items-center">
            <br />
            <br />
           </li>
          </ul>
         </div>
         <a
          className="border flex items-center justify-center hover:bg-gray-300 h-24 text-md bg-gray-100 font-semibold text-gray-800 uppercase"
          href="#"
         >
          <span>Book a time slot</span>
         </a>
        </div>
        <div className="divide-y-4 z-4 sm:px-4 p-4 text-xl sm:hidden">or</div>

        <div className="border sm:shadow-2xl w-full relative z-1  rounded shadow-lg overflow-hidden">
         <h4 className="text-lg font-medium uppercase p-8 text-center border-b border-black-200 tracking-wide">
          Premium Membership
         </h4>
         <div className="block my-4 sm:flex md:block lg:flex items-center justify-center">
          <p className="text-center ">5$ Admission fee</p>
         </div>
         <div className="flex  justify-center">
          <ul>
           <li className="flex items-center ml-3">
            <div className="bg-indigo-900 rounded-full p-2 fill-current"></div>
            <span className="text-gray-700 text-sm ml-3">
             Save 25% for all games
            </span>
           </li>

           <li className="flex items-center ml-3">
            <div className="bg-indigo-900 rounded-full p-2 fill-current"></div>
            <span className="text-gray-700 text-sm ml-3">
             10 Free plays on Birthday
            </span>
           </li>
           <li className="flex items-center ml-3">
            <div className="bg-indigo-900 rounded-full p-2 fill-current"></div>
            <span className="text-gray-700 text-sm ml-3">
             15% off food and drinks
            </span>
           </li>
          </ul>
         </div>
         <br />
         <a
          className="border flex items-center justify-center  hover:bg-gray-300 h-24 text-md bg-gray-100 font-semibold text-gray-800 uppercase"
          href="#"
         >
          <span>Sign up and book now</span>
         </a>
        </div>
       </div>
       {/* end break */}
      </div>
     </div>
    </SlideIn>
   </div>
  </div>
 );
}
