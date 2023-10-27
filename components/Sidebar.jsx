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
import { Separator } from "./ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";

export default function Sidebar() {
  return (
    <div className="h-full px-5 py-4 overflow-scroll scrollbar-track-gray-950/0 scrollbar-thin scrollbar-thumb-blue-950/0 overflow-x-hidden">
      {/* //? ------ sidebar header -------*/}
      <div className="flex items-center justify-between">
        <h1>
          {" "}
          <span className="text-xl font-semibold">🔥 Zero</span>{" "}
          <span className="text-lg">Infinite</span>
        </h1>
        <div className="">{/* <ModeToggle /> */}</div>
      </div>
      <Separator className="my-4" />
      {/* sidebar main options */}
      <div className="flex flex-col gap-2">
        <div className="flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          <DashboardIcon className="w-5 h-5" />
          <h4>Dashboard</h4>
        </div>
        {/* -------- */}

        <div className="flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          <Pencil2Icon className="h-5 w-5" />
          <h4>My tasks</h4>
        </div>
        {/* -------- */}
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          <LightningBoltIcon className="h-5 w-5" />
          <h4>Activities</h4>
        </div>
      </div>
      <Separator className="my-4" />
      {/* sidebar body */}
      <div className="flex flex-col gap-2">
        {/* -------- */}
        <div className="flex cursor-pointer items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          {/* <Pencil2Icon className="h-5 w-5" /> */}
          <ArchiveIcon className="h-5 w-5" />
          <h4>Projects</h4>
        </div>
        {/* -------- */}
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          <EnvelopeClosedIcon className="h-5 w-5" />
          <h4>Messages</h4>
        </div>
        {/* -------- */}
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          <PersonIcon className="h-5 w-5" />
          <h4>Team Members</h4>
        </div>
        {/* -------- */}
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          {/* <LightningBoltIcon className="h-5 w-5" /> */}
          {/* <ClockIcon className="h-5 w-5" /> */}
          <CalendarIcon />
          <h4>Celender</h4>
        </div>
        {/* -------- */}
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-blue-900 px-2 rounded-sm py-2">
          <ClockIcon className="h-5 w-5" />
          <h4>Schedule</h4>
        </div>
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
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div className="">
              <h4 className="text-sm font-semibold">Pulindu</h4>
              <p className="text-xs text-gray-400">Free Account</p>
            </div>
          </div>
          <div className="">
            <GearIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="flex cursor-pointer transition-all items-center gap-3 hover:bg-red-900 px-2 rounded-sm py-2">
          {/* <ClockIcon className="h-5 w-5" /> */}
          <ExitIcon className="h-5 w-5" />
          <h4>Sign out</h4>
        </div>
      </div>
    </div>
  );
}
