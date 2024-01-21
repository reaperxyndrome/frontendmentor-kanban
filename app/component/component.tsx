import { twMerge } from "tailwind-merge"
import { typography } from "../typography"
import IconCheck from "@/public/icon-check.svg"
import Image from "next/image"
import { useState } from "react"
// import { Input } from "postcss"
import { Extendable, LabelProps, InputProps, TextFieldProps } from "../interface"

export const SubtaskCheckbox:React.FC<InputProps> = ({label, className="", id}) => {
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
// TODO: add state to check if field is filled
// TODO: fix "use client"
// TODO: refactor components into a separate folder
export const TextField:React.FC<TextFieldProps> = ({label, className="", id, placeholder, required, isSubmitted}) => {
    // const [isFilled, setIsFilled] = useState(false)

    return(
        <div className={twMerge("relative flex flex-col", className)}>
            <label htmlFor={id} className={`${typography.heading_S} text-medium_grey mb-2`}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} className={`${typography.body_L} border bg-opacity-0 bg-[white] border-medium_grey focus:outline-none rounded-md px-4 py-2 placeholder:text-[white]/25 ${(required && isSubmitted) ? "border-red": ''}`} required={required}></input>
            <span className={`${typography.body_L} absolute bottom-2 right-4 text-red`}>Can&apos;t be empty</span>
        </div>
    )

}

