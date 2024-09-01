'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import logo from '../images/Logo.png'
import Image from "next/image";
import { IoMdStopwatch } from "react-icons/io";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa";
import { FaCheck, FaSpinner } from "react-icons/fa6";
import Confetti from "react-confetti";
import RocketDark from '../images/Rocket_Dark.png'
import RocketLight from '../images/Rocket_Light.png'
import { FaCheckCircle } from "react-icons/fa";
import Blobs_1 from '../images/BackgTransparent.png'
import Blobs_2 from '../images/Blobs_2.png'

export default function Home() {
  const [darkMode, setdarkMode] = useState(false)
  const [time, setTime] = useState(5)
  const [showTimer, setShowTimer] = useState(false)
  const [showPopup, setShowPopup] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false)
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isNotified, setIsNotified] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter()
  const handleDark = ()=>{
    setdarkMode(prev => !prev)
  }

  const handleShowTimer = () => {
    setTime(5)
    setShowTimer(prev => !prev)
    setShowPopup(false)
  }

  useEffect(() => {
    let timer
    if ( showTimer && time > 0){
    timer = setTimeout(()=> setTime(prev => prev - 1), 1000)
    } else if (time === 0){
      setShowPopup(true)
      setShowConfetti(true)
      setShowTimer(false)

      setTimeout(() =>{
       
        router.push('/questions')
      },3000)
    }
    return ()=> clearTimeout(timer)
  },[time, showTimer])

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    setIsNotified(false); 
    if (validateEmail(value)) {
      setIsValidEmail(true);
      setError("");
    } else {
      setIsValidEmail(false);
      setError(value ? "Invalid email" : ""); 
    }
  }

  const handleNotifyClick = () => {
    if (!isValidEmail) return;

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsNotified(true);
      setError(""); 
    }, 2000);
  };

  return (
    <>
    {/*navbar */}
     <nav className={`w-screen h-14 flex justify-between items-center fixed ${darkMode ? 'bg-transparent' : 'md:bg-transparent bg-[#330F29]'} z-20`}>
      <Image src={logo} alt="logo" className="w-[250px] lg:w-[350px]"/>
      <div className="mx-10 flex flex-row mr-5 gap-5">
        {darkMode ? <FaMoon onClick={handleDark} size={25} color='black' /> : <FiSun onClick={handleDark} size={25} color='white' />  }
        <IoMdStopwatch size={25} color={darkMode ? "black" : "white"} onClick={handleShowTimer} className="cursor-pointer" />
      </div>
    </nav>
    {/* main content */}
    <div className={`h-screen w-screen flex flex-col  items-center justify-center ${darkMode ? 'bg-white' : 'bg-black'} overflow-hidden relative z-10`} >
        <div
          className="absolute inset-0 bg-no-repeat bg-cover z-0 md:block hidden"
          style={{
            backgroundImage: `url(${Blobs_1.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        <div
          className="absolute inset-0 bg-no-repeat bg-cover z-0 md:hidden"
          style={{
            backgroundImage: `url(${Blobs_2.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div> 
    {/*<div className="absolute top-[-300px] left-[-200px] h-[900px] w-[900px] rounded-full bg-[#380D2C] blur-xl opacity-90 "
     style={{ background: "radial-gradient(circle, rgba(56, 13, 44, 0.7) 0%, rgba(56, 13, 44, 0.8) 10%, transparent 100%)",
      boxShadow: "0 0 90px rgba(56, 13, 44, 0.9)"}}
       ></div>
    <div className="absolute bottom-[-300px] right-[-200px] h-[900px] w-[900px] rounded-full bg-[#2B174D] blur-xl opacity-90"
      style={{ background: "radial-gradient(circle, rgba(43, 23, 77, 0.7) 0%, rgba(43, 23, 77, 0.8) 10%, transparent 100%)",
        boxShadow: "0 0 90px rgba(43, 23, 77, 0.9)"}}
    ></div> */}
     {!showPopup && (<div className="flex h-screen md:h-[75%] w-screen lg:w-[60%] flex-col items-center justify-center overflow-hidden mt-10 z-20">
       <div className={`md:w-full w-[80%] h-[25%] ${darkMode ? 'text-black': 'text-white'} flex flex-col items-center justify-center md:mt-0 mt-16`}>
        <div className="mb-4 mt-6 md:mt-0 flex flex-row lg:gap-4 gap-2 items-center justify-center">
          <div className="order-last lg:order-first">
          {darkMode ?  <Image src={RocketLight} alt="rocket" className="h-[45px] w-[45px] animate-rocketMove" /> : <Image src={RocketDark} alt="rocket" className="h-[45px] w-[45px] animate-rocketMove" />   }
          </div>
         <h1 className="text-3xl lg:text-4xl font-bold text-center">Launching New Module Soon !</h1>
        </div>
        <p className="font-extralight text-center">Exciting Things are in the works! We're currently <span className="font-bold">Crafting a new Feature</span> for you</p>
        <p className="font-extralight text-center">Keep an eye out for updates-We're working to make it availible soon !</p>
       </div>
       <div className={`w-full ${showTimer ? 'h-[65%]' : 'h-[30%]'} flex flex-col items-center md:mt-0 mt-20`}>
        <div className="flex flex-row gap-3  items-center mt-8">
         <h1 className={`font-semibold ${darkMode ? 'text-black': 'text-white'} lg:text-3xl sm:text-3xl  text-center`}>GET READY FOR THE REVEAL !</h1>

        </div>
         {showTimer && (<div className={`h-44 w-96 border-2 border-slate-200 flex flex-row items-center justify-evenly mt-8 rounded-xl ${darkMode ? 'bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5]' :'bg-gradient-to-r from-[#380D2C] via-[#4D173E] to-[#2B174D]'}`}>
           <div className="flex flex-col items-center justify-center">
            <h1 className={`text-7xl ${darkMode ? 'text-black': 'text-white'} font-bold`}>{minutes.toString().padStart(2, '0')}</h1>
            <h6 className={`${darkMode ? 'text-black': 'text-white'} font-semibold mt-2`}>Minutes</h6>
           </div>
           <div className={`text-7xl ${darkMode ? 'text-black': 'text-white'} font-bold mb-8`}>
            <h1>:</h1>
           </div>
           <div className="flex flex-col items-center justify-center">
            <h1 className={`text-7xl ${darkMode ? 'text-black': 'text-white'} font-bold`}>{seconds.toString().padStart(2, '0')}</h1>
            <h6 className={`${darkMode ? 'text-black': 'text-white'} font-semibold mt-2`}>Seconds</h6>
           </div>
        </div>)}
        <div className="mt-10 md:w-full w-[80%]">
          <p className={`${darkMode ? 'text-black': 'text-white'} font-extralight text-center`}>Be the First To Know ! Share Your Email and We'll notify You when it's live</p>
        </div>
       </div>
       <div className={`w-[80%] md:w-full h-[10%] flex lg:flex-row flex-col items-center justify-center gap-4  ${showTimer ? '0' : 'mb-24'}`}>
        <input 
         type="text"
         name='email'
         placeholder="Please enter your email id"
         value={email}
         onChange={handleEmailChange}
         className={`font-extralight h-14 lg:h-10 w-[80%]  lg:w-[70%] border-2 ${darkMode ? 'border-black text-black' : 'border-slate-200 text-white'}  bg-transparent p-2 rounded-md `} 
        />
        
        <button className={`h-14 lg:h-10 ${isNotified ? 'lg:w-10 w-[80%]' : 'lg:w-28 w-[80%]'} 
      
            ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}
            ${!isValidEmail || isLoading || isNotified ? 'cursor-not-allowed text-gray-500' : ''}
             ${isNotified ? (darkMode ? 'text-black' : 'text-white') : ''}
           rounded-lg flex items-center justify-center`}
          
          
          onClick={handleNotifyClick} disabled={!isValidEmail || isLoading || isNotified} >
          {
            isLoading ? (<span className="animate-spin"><FaSpinner size={25} className={`${darkMode ? 'text-white' : 'text-black'}`} /></span>) :  isNotified ? (
              <FaCheck  className={`h-6 w-6  ${darkMode ? 'text-white' : 'text-black'}`} />
            ) : (
              "Notify Me"
            )
          }
        </button>
       </div>
       {error && (
          <div className="text-red-500 mt-2">{error}</div>
        )}
     </div> )}
   </div> 
   {showConfetti && <div className="fixed inset-0 z-30 pointer-events-none">
    <Confetti width={window.innerWidth} height={window.innerHeight} gravity={0.2}/>
    </div>}
   {showPopup && (
        <div className="fixed inset-0 flex items-center justify-center bg-opacity-0 z-50 w-screen h-screen">
          <div className={`${darkMode ? 'bg-gradient-to-r from-[#E5B8D9] to-[#C9B8E5]' : 'bg-gradient-to-r from-[#380D2C] via-[#4D173E] to-[#2B174D]'} p-10 rounded-lg shadow-lg lg:w-[40%] w-[90%] flex flex-col items-center`} >
            <h2 className={`text-[52px] font-bold mb-4 ${darkMode ? 'text-black': 'text-white'} text-center`}>We are Live Now!</h2>
            <div className="flex flex-col w-[90%] items-center">
            <p className={`text-center  ${darkMode ? 'text-black': 'text-white'} font-light text-xl mb-8`}>Our new feature is now <span className="font-semibold">Live and ready</span> for you to exlore. Go Ahead and give it a try.</p>
            <button onClick={() => router.push('/questions')} className="bg-white text-black text-xl px-4 py-2 rounded-lg mt-10 w-44 font-semibold">
              Get Started
            </button>
            </div>
          </div>
        </div>
      )}
   </>
  );
}
