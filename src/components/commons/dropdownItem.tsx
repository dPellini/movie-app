import { getRoundedBorder } from "@/lib/utils";
import { JSX } from "react";
import { IconType } from "react-icons";

interface DropdownItemProps {
  name: string;
  index: number;
  list: any;
  img?: string;
  icon?: JSX.Element;
  onClick?: () => void;
}

const DropdownItem = ({
  name,
  index,
  list,
  img,
  icon,
  onClick,
}: DropdownItemProps) => {
  return (
    <li
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 hover:bg-red-700 hover:text-white cursor-pointer ${getRoundedBorder(
        index,
        list
      )}`}
    >
      {img && (
        <img
          src={img}
          alt={name}
          className="w-5 h-5 rounded-lg shadow-sm shadow-slate-200"
        />
      )}
      {icon && icon}
      <span>{name}</span>
    </li>
  );
};

export default DropdownItem;
