import { PaperPlaneIcon } from "@radix-ui/react-icons";
import { Button } from "./ui/button";
import Image from "next/image";

export default function TeamCard({ id, name, role, image, joined }) {
  return (
    <div className="px-3 lg:max-w-[450px] py-4 rounded-md border-opacity-10 shadow-md dark:shadow-gray-50/5 border border-white bg-gradient-to-tr from-[#8880ff28] to-[#9189fc17] backdrop-blur-lg">
      <div className="flex flex-col gap-1">
        <Image
          src={image}
          width={50}
          height={50}
          className="rounded-full object-cover object-center w-15 h-12"
        />

        <div className="">
          <h3 className=" font-semibold">{name}</h3>
          <span>@{name}</span>
        </div>
      </div>
      <Button className="dark:bg-background/50 dark:text-foreground absolute top-4 right-3 flex gap-2 items-center justify-center">
        Message <PaperPlaneIcon className="" />
      </Button>
      <p className="mt-5 opacity-75">{role} </p>
      <p className="mt-0 opacity-75">{joined}</p>
    </div>
  );
}
