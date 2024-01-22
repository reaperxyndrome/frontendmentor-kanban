import { twMerge } from "tailwind-merge";
import { typography } from "../typography";
import { SelectProps } from "../interface";
import IconChevronDown from "@/public/icon-chevron-down.svg";
import Image from "next/image";

const Dropdown:React.FC<SelectProps> = ({label, className, id, options}) => {
  return (
    <div className="dark:text-[white]">
      <p>{label}</p>
      <div tabIndex={0} className="flex items-center px-4 relative border border-medium_grey focus:border-main_purple h-10 rounded-md cursor-pointer">
        <span>Value</span>
        <ul className="flex flex-col p-4 gap-y-2 absolute bg-very_dark_grey top-12 left-0 w-full rounded-lg">
          <li className="text-medium_grey">hello there</li>
          <li>hey there</li>
        </ul>
      </div>
    </div>
  )
}

export default Dropdown;