import { BsPlus, BsFillLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire } from "react-icons/fa";
import React, { useState } from "react";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const SidebarIcon = ({ icon, text = "tooltip",onClicked }: any) => (
    <div className="sidebar-icon group">
      {icon}
      <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
  );

  return (
    <div
      className=" fixed py-6 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary
    shadow-lg "
    >
      <SidebarIcon icon={<FaFire size={36} />} text={"Fire"}  />
      <SidebarIcon icon={<BsPlus size={36} />} text={"Add"} />
      <SidebarIcon icon={<BsFillLightningFill size={36} />} text={"Thunder"} />
    </div>
  );
};

export default Sidebar;
