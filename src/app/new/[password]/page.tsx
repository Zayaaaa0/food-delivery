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
        <div>
          <h1 className="text-[24px] font-semibold">Create new password</h1>
          <p className="text-[#71717A] text-[16px]">
            Set a new password with a combination of letters and numbers for
            better security.
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
          <Button className="w-[416px] bg-[#71717A]">Create password</Button>
        </div>
      </div>
    </div>
  );
}
