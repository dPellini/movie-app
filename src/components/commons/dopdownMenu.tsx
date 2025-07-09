import { ReactNode } from "react";

interface DropdownMenuProps {
  children: ReactNode;
  isRight?: boolean;
}

const DropdownMenu = ({ children, isRight = false }: DropdownMenuProps) => {
  const fromRight = isRight ? "right-1" : "";

  return (
    <div
      className={`absolute mt-2 w-40 rounded-md shadow-lg bg-slate-200 ring-1 ring-red-800 ring-opacity-5 z-10 ${fromRight}`}
    >
      <ul>{children}</ul>
    </div>
  );
};

export default DropdownMenu;
