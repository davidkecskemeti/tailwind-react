import SideBarIcon from "./SideBarIcon";
import { FaFire, FaPoo } from "react-icons/fa";
import { BsPlus, BsFillLightningFill } from "react-icons/bs";
import ThemeIcon from "./ThemeIcon";
interface SideBarProps {}

const SideBar: React.FC<SideBarProps> = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 m-0 
    flex flex-col 
    bg-primary text-secondary shadow-lg
    dark:bg-white dark:text-black"
    >
      <SideBarIcon icon={<ThemeIcon />} />
      <SideBarIcon icon={<FaFire size={"28"} />} />
      <SideBarIcon icon={<BsPlus size={"28"} />} />
      <SideBarIcon icon={<BsFillLightningFill size={"28"} />} />
      <SideBarIcon icon={<FaPoo size={"28"} />} />
    </div>
  );
};

export default SideBar;
