import { ReactNode } from "react";
type Props = {
  children: ReactNode;
};
import SideBar from "./_components/SideBar";
const Layout = (props: Props) => {
  return (
    <div className="flex ">
      <SideBar />
      {props.children}
    </div>
  );
};
export default Layout;
