import { ReactNode } from "react";

interface SideBarIconProps {
  icon: ReactNode;
  text?: string;
}

const SideBarIcon: React.FC<SideBarIconProps> = ({
  icon,
  text = "tooltip",
}) => {
  return (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );
};

export default SideBarIcon;
