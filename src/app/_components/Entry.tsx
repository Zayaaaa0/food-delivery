import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Photo from "./CloudinaryUploud";
import UploadImage from "./CloudinaryUploud";

export default function Entry() {
  return (
    <div className="flex gap-[40px] justify-center">
      <div className="gap-[24px] flex flex-col justify-center items-start">
        <div>
          <div>
            <Button variant="outline" size="icon">
              <ChevronLeft />
            </Button>
          </div>
          <div>
            <h1 className="text-[24px] font-semibold">Create your account</h1>
            <p className="text-[#71717A] text-[16px]">
              Sign up to explore your favorite dishes.
            </p>
          </div>
          <div className="w-[416px]">
            <Input type="email" placeholder="Enter your email address" />
          </div>
          <div>
            <Link href={"/home/password"}>
              <Button className="w-[416px] bg-[#71717A]">Let's Go</Button>
            </Link>
          </div>
          <Link href={"/search/login"} className="flex gap-[12px]">
            <div className="text-[#71717A]">Already have an account?</div>
            <div className="text-[#2563EB]">Log in </div>
          </Link>
        </div>
      </div>
      <div>
        <UploadImage />
      </div>
    </div>
  );
}
