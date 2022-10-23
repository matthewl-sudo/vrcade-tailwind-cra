import React from 'react';

export default function Contact() {
 console.log(navigator.platform);
 function mapsSelector() {
  if (
   /* if we're on iOS, open in Apple Maps */
   navigator.platform.indexOf('iPhone') != -1 ||
   navigator.platform.indexOf('iPad') != -1 ||
   navigator.platform.indexOf('iPod') != -1
  )
   window.open(
    'maps://maps.google.com/maps?daddr=53.55513737297724,-113.61658409202616&amp;ll='
   );
  /* else use Google */ else
   window.open(
    'https://maps.google.com/maps?daddr=53.55513737297724,-113.61658409202616&amp;ll='
   );
 }

 return (
  <section
   id="contact"
   className="text-gray-400 bg-gray-900 body-font relative"
  >
   <div className="container py-18 mx-auto block sm:flex xs:flex">
    <div className="xs:w-100 lg:w-1/2 md:w-1/2 bg-gray-900 rounded-lg overflow-hidden xs:p-10 p-4 flex sm:flex-col  items-end justify-start relative">
     <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d75844.83375465381!2d-113.74872922897339!3d53.55507090826835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a02123cf672b53%3A0x8904f6c91307008f!2sCtrl%20V!5e0!3m2!1sen!2sca!4v1661533151598!5m2!1sen!2sca"
      className="inset-0 rounded-md"
      title="map"
      width="100%"
      height="100%"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
     ></iframe>
    </div>
    <div className="lg:w-1/4 md:w-1/2 bg-gray-900 relative flex-wrap xs:py-16 rounded justify-items-center shadow-md sm:flex-col">
     <div className="px-6 pt-4 sm:pt-24">
      <h2 className="title-font font-semibold text-white tracking-widest text-xs">
       ADDRESS
      </h2>
      <p
       onClick={mapsSelector}
       className="mt-1 cursor-pointer"
      >
       10852 170 St NW, Edmonton, AB T5S 2H7
      </p>
     </div>
     <div className=" px-6 mt-4 xs:mt-0">
      <h2 className="title-font font-semibold text-white tracking-widest text-xs">
       EMAIL
      </h2>
      <a
       href="mailto:example@email.com"
       className="text-indigo-400 leading-relaxed cursor-pointer"
      >
       example@email.com
      </a>
      <h2 className="title-font font-semibold text-white tracking-widest text-xs mt-4">
       PHONE
      </h2>
      <p className="leading-relaxed">123-456-7890</p>
     </div>
    </div>
    <div className="lg:w-1/4 md:w-1/2  flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
     <h2 className="text-white text-lg mb-1 font-medium title-font">
      Feedback/Questions?
     </h2>
     <p className="leading-relaxed mb-5">
      Leave us a message and will get back to you asap
     </p>
     <div className="relative mb-4">
      <label
       htmlFor="name"
       className="leading-7 text-sm text-gray-400"
      >
       Name
      </label>
      <input
       type="text"
       id="name"
       name="name"
       className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
     </div>
     <div className="relative mb-4">
      <label
       htmlFor="email"
       className="leading-7 text-sm text-gray-400"
      >
       Email
      </label>
      <input
       type="email"
       id="email"
       name="email"
       className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
      />
     </div>
     <div className="relative mb-4">
      <label
       htmlFor="message"
       className="leading-7 text-sm text-gray-400"
      >
       Message
      </label>
      <textarea
       id="message"
       name="message"
       className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
      ></textarea>
     </div>
     <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
      Button
     </button>
     <p className="text-xs text-gray-400 text-opacity-90 mt-3">
      Chicharrones blog helvetica normcore iceland tousled brook viral artisan.
     </p>
    </div>
   </div>
  </section>
 );
}
