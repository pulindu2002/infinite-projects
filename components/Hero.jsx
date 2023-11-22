import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function Hero() {
  return (
    <div className="relative container h-screen flex justify-center items-center overflow-hidden">
      {/* ------------------------------------------ */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      {/* --------------------------------------- */}
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-18rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#ff4694] to-[#776fff] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
      <div
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-18rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
        aria-hidden="true"
      >
        <div
          className="aspect-[1108/632] w-[69.25rem] flex-none bg-gradient-to-r from-cyan-500 to-blue-800 opacity-20"
          style={{
            clipPath:
              "polygon(77.5% 40.13%, 90% 10%, 100% 50%, 95% 80%, 92% 85%, 75% 65%, 61.26% 54.7%, 50% 54.7%, 47.24% 65.81%, 50% 85%, 26.16% 73.91%, 0.1% 100%, 1% 40.13%, 20% 48.75%, 60% 0.25%, 67.5% 32.63%)",
          }}
        />
      </div>

      {/* ------------------------------------------ */}
      <div className=" text-center gap-3 flex justify-center flex-col items-center z-20">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl">
          Infinite Project Manager
        </h1>
        <p className=" text-base sm:text-xl w-full sm:w-3/4">
          Break down your projects into manageable tasks. Prioritize, assign,
          and track progress effortlessly, making sure nothing falls through the
          cracks.
        </p>
        <div className="flex justify-center w-full gap-3 sm:gap-8">
          <Button><Link href={"/Dashboard"}>Get Started</Link></Button>
          <Button
            variant="outline"
            className="dark:bg-slate-800  border border-slate-900"
          >
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
}
