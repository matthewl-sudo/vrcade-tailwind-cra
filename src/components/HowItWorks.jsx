import React, { useState } from 'react';
import heroImage from '../assets/vr-headset-james-yarema.jpg';
import smallImage from '../assets/circut_board.jpg';
import FadeIn from './animations/FadeIn';

export default function About() {
 const gradient =
  'linear-gradient(65deg, rgba(190,75,0,1) 0%, rgba(0,25,85,1) 40%, rgba(18,0,20,0.95) 75%)';
 const [isHover, setIsHover] = useState(false);
 const translateValues = [0, 25, 50, 75];
 return (
  <>
   <header id="about">
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
         Github action workflow test
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
   <section
    style={{
     background: gradient,
    }}
    className="text-gray-400 bg-gray-900 body-font"
   >
    <div className="md:px-8 container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
     <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
       How do we make it so realistic?
       <br className="hidden lg:inline-block" />
       With our proprietary hardware of course
      </h1>
      <p className="mb-8 leading-relaxed">
       Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant
       cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote
       bag selvage hot chicken authentic tumeric truffaut hexagon try-hard
       chambray.
      </p>
     </div>
     <div
      className="lg:max-w-lg lg:w-full md:w-1/3 w-2/3 mb-11"
      style={{
       transform: isHover
        ? `rotate(-40deg) skew(30deg) `
        : `rotate(10deg) skew(-10deg) opacity(0.1)`,
       transition: '0.9s',
       position: 'relative',
       display: 'flex',
      }}
     >
      <span className="title-font sm:text-3xl text-2xl font-medium text-white z-20">
       Bleeding edge technology
      </span>
      {translateValues.map((value, key) => {
       console.log(value, key);
       return (
        <img
         className="object-cover object-center shadow-2xl rounded z-10"
         key={key}
         src={smallImage}
         style={{
          width: isHover ? '65%' : '60%',
          position: 'absolute',
          transform: isHover
           ? `translate(${value}px,-${value}px)`
           : `translate(0px,0px)`,
          transition: '0.75s',
          opacity: 0.2 * (key + 1) + 0.2,
         }}
         alt="hero"
         onMouseEnter={() => setIsHover(true)}
         onMouseLeave={() => setIsHover(false)}
        />
       );
      })}
     </div>
    </div>
   </section>
  </>
 );
}
