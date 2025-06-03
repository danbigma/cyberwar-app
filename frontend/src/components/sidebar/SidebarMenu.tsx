// src/components/SidebarMenu.tsx
import React from "react";
import SidebarMenuItem from "./SidebarMenuItem";
import { menuItems } from "./menuItems";

interface SidebarMenuProps {
  onClose?: () => void; // Пропс для функции закрытия меню
}

const SidebarMenu: React.FC<SidebarMenuProps> = ({ onClose }) => {
  return (
    <ul className="mb-10 ml-4">
      {menuItems.map((item, index) => (
        <SidebarMenuItem
          key={index}
          href={item.href}
          text={item.text}
          Icon={item.Icon}
          onClose={onClose} // Передаем функцию закрытия меню
        />
      ))}
    </ul>
  );
};

export default SidebarMenu;