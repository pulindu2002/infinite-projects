import { LightningBoltIcon, MixIcon, RocketIcon } from "@radix-ui/react-icons";
import Image from "next/image";

export default function AboutUs() {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2   gap-5 sm:gap-16 sm:grid-cols-1 py-10 sm:py-20">
      <div className=" order-2 sm:order-1 flex flex-col gap-2 justify-center">
        <h2 className="text-2xl mb-5 md:mb-0 sm:text-3xl md:text-4xl font-semibold">
          What is special about Infinite Zero
        </h2>
        <h3 className="text-xl  lable sm:mt-5 flex items-center gap-3">
          {" "}
          <span>
            {" "}
            <MixIcon className="h-5 w-5" />{" "}
          </span>{" "}
          Flexible and customizable
        </h3>
        <p className=" opacity-80">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
          perferendis esse m maxime. Nulla corporis accusamus, vitae recusandae
          itaque fugit nemo.
        </p>
        <h3 className="text-xl  lable sm:mt-5 flex items-center gap-3">
          {" "}
          <span>
            {" "}
            <LightningBoltIcon className="h-5 w-5" />{" "}
          </span>{" "}
          Easy to use
        </h3>
        <p className=" opacity-80">
          Lorem, ipsum dolor siamet libt amet consectetur adipisicing magnam, in
          molestiae tempora accusamus officia maxime. Nulla corporis accusamus,
          vitae recusandae itaque fugit nemo.
        </p>
      </div>
      <div className="order-0 sm:order-2 relative h-full w-full rounded-lg">
        <div className=" relative rounded-lg h-full overflow-hidden">
          <div className=" w-full h-full px-5 sm:px-0 absolute bg-black/40 z-[3] "></div>
          {/* //? ---------- overlay start  ---------------*/}
          <div className="absolute flex-col text-xs sm:text-base sm:flex-row lg:-translate-y-0 w-[95%] sm:w-3/4 bottom-2 left-1/2 -translate-x-1/2  bg-black/40 z-[4] backdrop-blur-md  rounded-lg px-3 sm:px-5 py-2 sm:py-3 flex sm:justify-between sm:items-center sm:gap-5">
            <div className="w-[10%]">
              <RocketIcon className="sm:w-10 w-5-8 h-8 sm:h-10 text-pink-500/60 " />
            </div>
            <div className="sm:w-[90%] w-full">
              <h3 className="font-bold text-gray-100 dark:text-foreground">
                Infinite Zero
              </h3>
              <p className=" opacity-80 sm:text-sm text-gray-100 dark:text-foreground">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consequatur, quidem.
              </p>
            </div>
          </div>
          {/* //? ---------- overlay Ende  ---------------*/}
          <Image
            src={"/about-us.jpg"}
            className=" min-h-[500px] object-cover z-[2] w-full h-full rounded-lg"
            width={500}
            height={500}
          />
        </div>
      </div>
    </div>
  );
}
