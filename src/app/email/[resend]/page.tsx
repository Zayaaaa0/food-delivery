import { Input } from "@/components/ui/input";
import { ChevronLeft } from "lucide-react";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Entry() {
  return (
    <div className="gap-[24px] flex flex-col justify-center items-start w-[416px]">
      <div>
        <div>
          <Link href={"/reset/respass"}>
            <div>
              <Button variant="outline" size="icon">
                <ChevronLeft />
              </Button>
            </div>
          </Link>
        </div>

        <div>
          <h1 className="text-[24px] font-semibold">
            Please verify Your Email
          </h1>
          <p className="text-[#71717A] text-[16px]">
            We just sent an email to Test@gmail.com. Click the link in the email
            to verify your account.
          </p>
        </div>

        <div>
          <Link href={"/new/password"}>
            <Button className="w-[416px] bg-[#71717A]">Resend email</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
