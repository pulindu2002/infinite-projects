'use client'

import {
  ArchiveIcon,
  CalendarIcon,
  ClockIcon,
  DashboardIcon,
  EnvelopeClosedIcon,
  ExitIcon,
  GearIcon,
  LightningBoltIcon,
  Pencil2Icon,
  PersonIcon,
} from "@radix-ui/react-icons";
// import { ModeToggle } from "./ThemeChanger";
import Link from "next/link";

import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { UseAuth } from "@/context/AuthContext";

import { deleteCookie } from "cookies-next";

export default function Sidebar() {

  const router = useRouter();
  const path = usePathname(); 
   const [ isNav,setIsNav] = useState(false)
const [toggle,setToggle] = useState(path === '/Schedule' ? true: null);
  
  const {user , SignOut} = UseAuth();
  // console.log(user);

 

const isNavChange = ()=>{
  setIsNav(!isNav)
}

const ON = ()=>{
  setToggle(false)
  
}
const OFF = ()=>{
  // change this
  setToggle(isNav)
}


const pathName = usePathname();


const isActive = (path)=>{
  return(
  pathName.startsWith(path) ? "bg-zinc-500" : "" )
}

isActive("Dashboard")


// const isActive = (path)=>{
//   return(
//   path === pathName ? console.log("yes"):console.log("no"))
// }

// isActive("Dashboard")



const OnSignOut = async ()=>{
   try {
     await SignOut();
     console.log('signed out successfully')
     deleteCookie('auth')
     router.refresh();

     

   } catch (error) {
    console.log(error)
   }
   

}

  return (
    <header  className={`pr-3 mr-8   h-full top-0 bottom-0 relative duration-1000 transition-all max-lg:hidden`}>
    
        <div onMouseOver={ON} onMouseLeave={OFF} className={`${toggle ? "absolute left-[-280px] duration-1000 transition-all":""} w-[300px] h-full px-5 py-4 overflow-scroll scrollbar-track-gray-950/0 scrollbar-thin scrollbar-thumb-blue-950/0 overflow-x-hidden bg-[#020827]`}>
      {/* //? ------ sidebar header -------*/}
      <div className="flex items-center justify-between">
        <h1>
          {" "}
          <span className={`text-xl font-semibold`}>🔥 Zero</span>{" "}
          <span className="text-lg">Infinite</span>
          
        </h1>
        <span onClick={isNavChange} className=""><Image src={isNav ? "/unlock.svg":"/lock.svg"} height={20} width={20}/></span>
        <div className="">{/* <ModeToggle /> */}</div>
      </div>
      <Separator className="my-4" />
      {/* sidebar main options */}
      <div className="flex flex-col gap-2">
       <Link href={"/Dashboard"}>
        <div className={`${isActive("/Dashboard")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          <DashboardIcon className="w-5 h-5" />
          <h4 >Dashboard</h4>
        </div></Link>
        {/* -------- */}

        <Link href={"/MyTasks"}>
        <div className={`${isActive("/MyTasks")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          <Pencil2Icon className="h-5 w-5" />
          <h4>My tasks</h4>
        </div></Link>

        {/* -------- */}
        <Link href={"/Activities"}>
        <div className={`${isActive("/Activities")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          <LightningBoltIcon className="h-5 w-5" />
          <h4>Activities</h4>
        </div></Link>
      </div>
      <Separator className="my-4" />
      {/* sidebar body */}
      <div className="flex flex-col gap-2">
        {/* -------- */}
        <Link href={"/Projects"}>
        <div className={`${isActive("/Projects")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          {/* <Pencil2Icon className="h-5 w-5" /> */}
          <ArchiveIcon className="h-5 w-5" />
          <h4>Projects</h4>
        </div></Link>
        {/* -------- */}
        <Link href={"/Messages"}>
        <div className={`${isActive("/Messages")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          <EnvelopeClosedIcon className="h-5 w-5" />
          <h4>Messages</h4>
        </div></Link>
        {/* -------- */}
        <Link href={"/TeamMembers"}><div className={`${isActive("/TeamMembers")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          <PersonIcon className="h-5 w-5" />
          <h4>Team Members</h4>
        </div></Link>
        {/* -------- */}
        <Link href={"/Calender"}>
        <div className={`${isActive("/Celender")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          {/* <ClockIcon className="h-5 w-5" /> */}
          <CalendarIcon />
          <h4>Celender</h4>
        </div></Link>
        {/* -------- */}
        <Link href={"/Schedule"}>
        <div className={`${isActive("/Schedule")} flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2`}>
          <ClockIcon className="h-5 w-5" />
          <h4>Schedule</h4>
        </div></Link>
      </div>
      <Separator className="my-4" />
      {/*//? ------------ sidebar footer ------------- */}
      <div className="flex flex-col gap-3">
        <div className="flex cursor-pointer transition-all justify-center items-center gap-3 bg-blue-700 font-semibold px-2 rounded-sm py-2">
          {/* <ClockIcon className="h-5 w-5" /> */}
          <Image src={"/diamond_2.png"} width={20} height={20} />
          <h4>Go Premium</h4>
        </div>
        <div className="flex gap-3 items-center justify-between">
          <div className="flex gap-3 items-center">
            <Avatar>
              <AvatarImage src={user? user.photoURL : "https://github.com/shadcn.png"} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <h4 className="text-sm font-semibold">{user ? user.displayName : "user"}</h4>
              <p className="text-xs text-gray-400">Free Account</p>
            </div>
          </div>
          <div className="hover: hover:bg-blue-900 p-3">
            <Link href={"/Settings"}><GearIcon className="h-5 w-5" /></Link>
          </div>
        </div>
        <div onClick={OnSignOut} className="flex cursor-pointer transition-all items-center gap-3 hover:bg-red-900 px-2 rounded-sm py-2">
          {/* <ClockIcon className="h-5 w-5" /> */}
          <ExitIcon className="h-5 w-5" />
          <h4>Sign out</h4>
        </div>
      </div>
    </div>


     
    </header>
  );
}
