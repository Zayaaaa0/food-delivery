import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
type Props = {
  children: ReactNode;
};
const Header = () => {
  return (
    <div className="bg-[#18181B] w-screen h-[68px] justify-between flex items-center p-[12px]">
      <div className="flex gap-[12px]">
        <div>
          <img src="./logo.png" alt="" />
        </div>
        <div>
          <div className="text-white flex">
            <p>Nom</p>
            <p className="text-[#EF4444]">Nom</p>
          </div>
          <div>
            <p className="text-white">Swift delivery</p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex gap-[13px] ">
          <Button className="rounded-full " variant="secondary">
            <img src="./shopping-cart.svg" alt="" />
          </Button>
          <Button className="bg-[#EF4444] rounded-full" variant="secondary">
            <img src="./user.svg" alt="" />
          </Button>
        </div>
      </div>
    </div>
  );
};
const Footer = () => {
  return (
    <div className="bg-[#18181B] text-[#FAFAFA]  gap-[220px] flex">
      <div>
        <img src="./logo.png" alt="" />
        <div>
          <div className="text-white flex">
            <p>Nom</p>
            <p className="text-[#EF4444]">Nom</p>
          </div>
        </div>
        <div>
          <p>Swift delivery</p>
        </div>
      </div>
      <div className="flex gap-[112px] ">
        <div className="gap-[16px] flex flex-col">
          <p className="text-[#71717A]">NOMNOM </p>

          <p>Home</p>
          <p>Contact us</p>
          <p>Delivery zone</p>
        </div>

        <div className="gap-[16px] flex flex-col">
          <p className="text-[#71717A]">MENU</p>

          <p>Appetizers</p>
          <p>Salads</p>
          <p>Pizzas</p>
          <p>Main dishes</p>
          <p>Desserts</p>
        </div>
        <div className="gap-[16px] flex flex-col">
          <p className="text-[#18181B]">""</p>

          <p>Side dish </p>
          <p>Brunch</p>
          <p>Desserts</p>
          <p>Beverages</p>
          <p>Fish & Sea foods</p>
        </div>
        <div className="gap-[16px] flex flex-col">
          <p className="text-[#71717A]">FOLLOW US</p>
          <div className="flex gap-[16px]">
            <img src="./facebook.png" alt="" />
            <img src="./instagram.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};
const Layout = (props: Props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  );
};
export default Layout;
