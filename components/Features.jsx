import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Image from "next/image";

export default function Features() {
  return (
    <div className="container mx-auto py-14">
      <h1 className="text-3xl sm:text-4xl mb-12 text-center font-semibold tracking-tight">
        Want a little help choosing the right Project?
      </h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-[1fr_.78fr] lg:grid-cols-[1fr_.6fr] gap-10">
        <div className=" relative min-h-[500px] sm:min-h-[620px] rounded-lg">
          {/* //?---------------- Overlays goes here -------------------- */}
          <div className=" w-full h-full  absolute bg-black/40 transition-all z-[3] "></div>
          <div className=" bg-black/10 rounded-xl top-10 z-[5] left-5 py-2 absolute sm:px-5 px-1 backdrop-blur-lg flex gap-3 ">
            <div className=" rounded-full">
              <Image
                src={"/67.jpg"}
                className=" object-cover rounded-full"
                height={50}
                width={50}
              />
            </div>
            <div className="">
              <span className=" opacity-90 font-semibold">Venuja</span>
              <p>Bitch Please fix the code Line: 69 ?</p>
            </div>
            <span className=" text-xs absolute right-2 top-3 ">10.33</span>
          </div>
          {/* ------------ */}
          <div className=" bg-black/10 rounded-xl bottom-10 z-[5] right-5 py-2 absolute sm:px-5 px-1 backdrop-blur-lg flex gap-3 ">
            <div className=" rounded-full">
              <Image
                src={"/40.jpg"}
                className=" object-cover rounded-full"
                height={50}
                width={50}
              />
            </div>
            <div className="">
              <span className=" opacity-90 font-semibold">Hirusha</span>
              <p>update: I'm working on it</p>
            </div>
            <span className=" text-xs absolute right-2 top-3 ">10.45</span>
          </div>
          <Image
            src={"/features.jpg"}
            width={700}
            height={700}
            className=" rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="py-10 min-h-[500px]">
          <h2 className="text-2xl md:mb-0 sm:text-3xl md:text-3xl font-semibold">
            Discover the{" "}
            <span className=" inline-block px-3 text-secondary dark:text-foreground bg-blue-600 hover:rotate-3 transition-all">
              undiscovered
            </span>{" "}
            projects with us
          </h2>
          <Accordion type="single" collapsible className="w-full mt-8">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-lg">
                Is it accessible?
              </AccordionTrigger>
              <AccordionContent className={"lg:text-base"}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Facilis reprehenderit nam, voluptate ipsam eligendi error!
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger className="text-lg">
                Is it styled?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quos rerum sint dolorem ipsa numquam, aperiam voluptatibus
                laudantium, veniam libero voluptatem dolores! components&apos;
                aesthetic.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger className="text-lg hover:underline-offset-0">
                Is it animated?
              </AccordionTrigger>
              <AccordionContent>
                Yes. It's animated by default, but you can disable it if you
                prefer.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger className="text-lg">
                Can i cancel the subscription
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
                quos rerum sint dolorem ipsa numquam, aperiam voluptatibus
                laudantium, veniam libero voluptatem dolores! components&apos;
                aesthetic.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
}
