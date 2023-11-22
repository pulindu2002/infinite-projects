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
            <CardDescription>Sign Up Using Email</CardDescription>
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


              <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email">Confirm Password</Label>
                <Input type="password" id="email" placeholder="Password" />
              </div>


              <Button className="w-full">
                <CheckIcon className="mr-2 h-4 w-4" /> Sign Up
              </Button>
            </form>
            <div className=" flex w-full items-center justify-center gap-5 overflow-hidden">
              <Separator className="w-full " /> or <Separator />
            </div>
           
          </CardContent>
          <CardFooter>Already Have an accout? <span className="ml-3 hover:text-zinc-600"><Link href={"SignIn"}>Sign In</Link></span></CardFooter>
        </Card>
      </div>
    </div>
  );
}
