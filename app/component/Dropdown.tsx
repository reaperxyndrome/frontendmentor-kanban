"use client"
import { twMerge } from "tailwind-merge";
import { typography } from "../typography";
import { SelectProps, SelectOption } from "../interface";
import IconChevronDown from "@/public/icon-chevron-down.svg";
import Image from "next/image";
import { MouseEventHandler, useState } from "react";

const Dropdown:React.FC<SelectProps> = ({label, value, className, id, options, onChange}) => {
  // const [value, setValue] = useState(options[0].value)
  const [isOpen, setIsOpen] = useState(false)

  function handleOpen(){
    setIsOpen(isOpen => !isOpen)
    console.log(isOpen)
  }

  function SelectOption(option: SelectOption){
    setIsOpen(false)
    if (option != value) onChange(option)
  }

  return (
    <div className="dark:text-[white]">
      <p className={`${typography.body_M} mb-2`}>{label}</p>
      <div tabIndex={0} className="flex items-center px-4 relative border border-medium_grey border-opacity-25 focus:border-main_purple h-10 rounded-md cursor-pointer" onClick={handleOpen}>
        <span className={`${typography.body_L}`}>Value</span>
        <Image src={IconChevronDown} alt="Dropdown Icon" width={12} height={12} className="absolute right-4">
        </Image>
        {
          isOpen &&
          <ul className="flex flex-col p-4 gap-y-2 absolute bg-very_dark_grey top-12 left-0 w-full rounded-lg">
          {options.map((option, index) => (
            <li key={option.value + index} className={`${typography.body_L} text-medium_grey`} onClick={e => SelectOption(option)}>
              {option.label}
            </li>
          ))}
          </ul>
        }        
        
      </div>
    </div>
  )
}

export default Dropdown;