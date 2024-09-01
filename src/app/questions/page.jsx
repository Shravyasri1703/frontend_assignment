import React from 'react'
import Image from "next/image";
import logo from '../images/Logo.png'
import { IoMdHome } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
const page = () => {
  return (
    <>
     <nav className={`w-screen h-14 flex justify-between items-center fixed bg-black`}>
      <Image src={logo} alt="logo" className="w-[250px] lg:w-[350px]"/>
      <div className="mx-10 flex flex-row mr-5 gap-5">
        <a href='/'><IoMdHome size={25} color='white'/></a>
        <CgProfile size={25} color='white'/>
      </div>
    </nav>
    <div className='bg-black h-screen w-screen'>

    </div>
    </>
  )
}

export default page