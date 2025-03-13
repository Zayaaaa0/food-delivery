import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Entry() {
  return (
    <div className="gap-[24px] flex flex-col justify-center items-start">
      <div>
        <div>
          <Link href={"/search/login"}>
            <div>
              <Button variant="outline" size="icon">
                <ChevronLeft />
              </Button>
            </div>
          </Link>
        </div>

        <div>
          <h1 className="text-[24px] font-semibold">Reset your password </h1>
          <p className="text-[#71717A] text-[16px]">
            Enter your email to receive a password reset link.
          </p>
        </div>
        <div className="w-[416px]">
          <Input type="email" placeholder="example@gmail.com" />
        </div>
        <div>
          <Link href={"/email/resend"}>
            <Button className="w-[416px] bg-[#71717A]">Send link</Button>
          </Link>
        </div>
        <div className="flex gap-[12px]">
          <div>
            <Link href={"/search/login"} className="text-[#71717A]">
              Already have an account?
            </Link>
          </div>
          <div>
            <Link href={"/"}>
              <div className="text-[#2563EB]">Sign up </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
