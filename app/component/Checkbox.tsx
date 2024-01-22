import { twMerge } from "tailwind-merge"
import { typography } from "../typography"
import IconCheck from "@/public/icon-check.svg"
import Image from "next/image"
import {InputProps, TextFieldProps } from "../interface"

export const Checkbox:React.FC<InputProps> = ({label, className="", id}) => {
    return(
        <div className={twMerge("p-3 bg-very_dark_grey rounded-md hover:bg-main_purple cursor-pointer", className)}>
            <div className="flex items-center relative p-0">
                <input type="checkbox" className="peer h-[1rem] w-[1rem] bg-dark_grey appearance-none peer-checked:bg-main_purple cursor-pointer rounded-sm" id={id}/>
                <Image src={IconCheck} alt="check" className="absolute top-1 left-[3px] w-[10px] h-[10px] hidden peer-checked:block pointer-events-none"></Image>
                <label htmlFor={id} className={`${typography.heading_S} mt-[2px] ml-4 peer-checked:line-through peer-checked:opacity-50`}>{label}</label>
            </div>
        </div>
    )
}

// TODO: add error message when required field is empty and submitted
// TODO: fix "use client"

