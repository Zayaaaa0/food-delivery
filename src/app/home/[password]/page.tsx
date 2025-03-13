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
          <h1 className="text-[24px] font-semibold">
            Create a strong password
          </h1>
          <p className="text-[#71717A] text-[16px]">
            Create a strong password with letters, numbers.
          </p>
        </div>
        <div className="w-[416px]">
          <Input type="password" placeholder="Password" />
          <Input type="password" placeholder="Confirm" />
        </div>
        <div className="flex items-center space-x-2">
          <Checkbox id="password" />
          <label
            htmlFor="password"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            show password
          </label>
        </div>

        <div>
          <Button className="w-[416px] bg-[#71717A]">Let's Go</Button>
        </div>
        <Link href={"/search/login"} className="flex gap-[12px]">
          <div className="text-[#71717A]">Already have an account?</div>
          <div className="text-[#2563EB]">Log in </div>
        </Link>
      </div>
    </div>
  );
}
