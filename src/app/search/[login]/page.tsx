"use client";

import { Checkbox } from "@radix-ui/react-checkbox";
import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Entry() {
  return (
    <div className="gap-[24px] flex flex-col justify-center items-start">
      <div>
        <Link href={"/"}>
          <div>
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
          </div>
        </Link>

        <div>
          <h1 className="text-[24px] font-semibold">Log in</h1>
          <p className="text-[#71717A] text-[16px]">
            Log in to enjoy your favorite dishes.
          </p>
        </div>
        <div className="w-[416px]">
          <Input type="email" placeholder="Enter your email address" />
          <Input type="password" placeholder="Password" />
        </div>
        <Link href={"/reset/respass"}>
          <div>
            <Button variant="link">Forgot password ?</Button>
          </div>
        </Link>

        <div>
          <Button className="w-[416px] bg-[#71717A]">Let's Go</Button>
        </div>
        <div className="flex gap-[12px]">
          <div className="text-[#71717A]">Already have an account?</div>
          <div className="text-[#2563EB]">Log in </div>
        </div>
      </div>
    </div>
  );
}
