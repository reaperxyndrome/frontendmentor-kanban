import { twMerge } from "tailwind-merge";
import { typography } from "../typography";
import { SelectProps } from "../interface";
import IconChevronDown from "@/public/icon-chevron-down.svg";
import Image from "next/image";

const Dropdown:React.FC<SelectProps> = ({label, className, id, options}) => {
  return (
    <div className={twMerge("flex flex-col ", className)}>
      <label
        htmlFor={id}
        className={`${typography.heading_S} text-medium_grey dark:text-[white] mb-2`}
      >
        {label}
      </label>
      <div className="relative h-10">
        <select className={`${typography.body_L} appearance-none px-4 w-full h-full rounded-md dark:bg-[black] dark:bg-opacity-0 dark:text-[white] border border-light_grey hover:border-main_purple`}>
          {options.map((option, index) => {
            return <option key={index} className={`${typography.body_L} dark:bg-opacity-0 dark:bg-[black] appearance-none`}>{option}</option>
          })}
        </select>
        <Image src={IconChevronDown} height={12} width={12} className="absolute top-1/2 -translate-y-1/2 right-4" alt=""></Image>
      </div>
      
    </div>
  )
}

export default Dropdown;