import React from 'react';
import image from '../assets/3d-effect-steve-johnson.jpg';
// import image from '../assets/3d-lights-maximalfocus.jpg';
// import image from '../assets/cyber-landscape-salvatore-andrea-santacroce.jpg';

export default function Pricing() {
 return (
  <div
   className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12"
   style={{
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
   }}
  >
   <div className="relative py-3 sm:max-w-xl sm:mx-auto bg-opacity-60 backdrop-filter backdrop-blur-lg">
    <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20 bg-clip-padding bg-opacity-60 border border-gray-200">
     <div className="max-w-md mx-auto">
      <div className="divide-y divide-gray-200">
       <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
        <p>
         An advanced online playground for Tailwind CSS, including support for
         things like:
        </p>
        <ul className="list-disc space-y-2">
         <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
           <svg
            className="flex-shrink-0 h-5 w-5 text-cyan-500"
            viewBox="0 0 20 20"
            fill="currentColor"
           >
            <path
             fillRule="evenodd"
             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
             clipRule="evenodd"
            />
           </svg>
          </span>
          <p className="ml-2">
           Customizing your
           <code className="text-sm font-bold text-gray-900">
            tailwind.config.js
           </code>{' '}
           file
          </p>
         </li>
         <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
           <svg
            className="flex-shrink-0 h-5 w-5 text-cyan-500"
            viewBox="0 0 20 20"
            fill="currentColor"
           >
            <path
             fillRule="evenodd"
             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
             clipRule="evenodd"
            />
           </svg>
          </span>
          <p className="ml-2">
           Extracting classes with
           <code className="text-sm font-bold text-gray-900">@apply</code>
          </p>
         </li>
         <li className="flex items-start">
          <span className="h-6 flex items-center sm:h-7">
           <svg
            className="flex-shrink-0 h-5 w-5 text-cyan-500"
            viewBox="0 0 20 20"
            fill="currentColor"
           >
            <path
             fillRule="evenodd"
             d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
             clipRule="evenodd"
            />
           </svg>
          </span>
          <p className="ml-2">Code completion with instant preview</p>
         </li>
        </ul>
        <p>
         Perfect for learning how the framework works, prototyping a new idea,
         or creating a demo to share online.
        </p>
       </div>
       <div className="pt-6 text-base leading-6 font-bold sm:text-lg sm:leading-7">
        <p>Want to dig deeper into Tailwind?</p>
        <p>
         <a
          href="https://tailwindcss.com/docs"
          className="text-cyan-600 hover:text-cyan-700"
         >
          {' '}
          Read the docs &rarr;{' '}
         </a>
        </p>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}