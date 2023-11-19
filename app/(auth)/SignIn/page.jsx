import { ArrowLeftIcon, CheckIcon } from "@radix-ui/react-icons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";

export default function Auth() {
  return (
    <div className="container pt-5">
      <Button variant="secondary" asChild>
        <Link href="/">
          {" "}
          <span>
            <ArrowLeftIcon className="mr-3" />{" "}
          </span>{" "}
          Back to home
        </Link>
      </Button>

      <div className="w-full flex justify-center items-center py-2">
        <Card className={cn("w-[380px]")}>
          <CardHeader className="flex justify-center flex-col items-center text-center">
            <Image
              className="mb-3"
              src={"/logo-x.svg"}
              width={50}
              height={50}
            />
            <CardTitle>🔥 Infinite Projects</CardTitle>
            <CardDescription>Sign In </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 ">
            <form className="grid gap-4  ">
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>
              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Password</Label>
                <Input type="password" id="email" placeholder="Password" />
              </div>
              <Button className="w-full">
                <CheckIcon className="mr-2 h-4 w-4" /> Login
              </Button>
            </form>
            <div className=" flex w-full items-center justify-center gap-5 overflow-hidden">
              <Separator className="w-full " /> or <Separator />
            </div>
            <Button className="w-full flex gap-3 items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="25"
                height="25"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#fbc02d"
                  d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12	s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20	s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
                <path
                  fill="#e53935"
                  d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039	l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                ></path>
                <path
                  fill="#4caf50"
                  d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36	c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                ></path>
                <path
                  fill="#1565c0"
                  d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571	c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                ></path>
              </svg>{" "}
              Login with Google
            </Button>
            
          </CardContent>
          <CardFooter><h2>Don't have a accout? <span className="ml-3 hover:text-zinc-600"><Link href={"/SignUp"}>Sign Up</Link></span></h2></CardFooter>
        </Card>
      </div>
      
    </div>
  );
}
