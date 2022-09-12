import React from 'react';
import heroImage from '../assets/vr-headset-james-yarema.jpg';
import smallImage from '../assets/man-with-headset-minh-pham.jpg';
import FadeIn from './animations/FadeIn';

export default function About() {
 return (
  <>
   <header>
    <div
     className="relative overflow-hidden bg-no-repeat bg-cover"
     style={{
      backgroundPosition: '50%',
      backgroundImage: `url(${heroImage})`,
      // backgroundSize: 'fit',
      height: 750,
     }}
    >
     <div
      className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style={{ backgroundColor: 'rgba(0, 0, 0, 0.25)' }}
     >
      <FadeIn class={'flex justify-center items-center h-full'}>
       <div className="text-center text-white px-6 md:px-12">
        <h1 className="text-5xl font-bold mt-0 mb-6">
         Escape to the unimaginable
        </h1>
        <h3 className="text-3xsm font-bold mb-8">
         The OASIS is an adventure too big for the real world.
         <br /> Are you ready for the beta stage?
         <br />
         Whether a seasoned Gunter or a curious noob, you can navigate the
         Starmap in search of your favorite destination planets and make your
         mark.
         <br /> The scores you rack up on each game planet will be memorialized
         on the OASIS beta Global leaderboard.
        </h3>
        <button
         type="button"
         className="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
         data-mdb-ripple="true"
         data-mdb-ripple-color="light"
        >
         Get started
        </button>
       </div>
      </FadeIn>
     </div>
    </div>
   </header>
   <section className="text-gray-400 bg-gray-900 body-font">
    <div className="md:px-8 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
       Before they sold out
       <br className="hidden lg:inline-block" />
       readymade gluten
      </h1>
      <p className="mb-8 leading-relaxed">
       Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
       cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
       bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
       chambray.
      </p>
      <div className="flex justify-center">
       <button className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
        Button
       </button>
       <button className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
        Button
       </button>
      </div>
     </div>
     <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img
       src={smallImage}
       className="object-cover object-center rounded"
       alt="hero"
      />
     </div>
    </div>
   </section>
  </>
 );
}
