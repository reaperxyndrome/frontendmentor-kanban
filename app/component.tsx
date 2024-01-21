import { twMerge } from "tailwind-merge"
import { typography } from "./typography"
import IconCheck from "@/public/icon-check.svg"
import Image from "next/image"

interface ButtonProps {
    text: string,
    className?: string
}



const Button:React.FC<ButtonProps> = ({text, className=""}) => {
    return(
        <button className={twMerge("text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover", className)}>{text}</button>
    )
}

export const ButtonPrimaryLarge:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        // <button className={`${typography.heading_M_button_L} text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
        <Button text={text} className={twMerge(`${typography.heading_M_button_L} text-[white] bg-main_purple hover:bg-main_purple_hover`, className)}></Button>
    )
}


export const ButtonPrimarySmall:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        // <button className={`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
        <Button text={text} className={twMerge(`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover py-2`, className)}></Button>     
    )
}

export const ButtonSecondaryLight:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        <Button text={text} className={twMerge(`${typography.button_S} text-main_purple bg-main_purple bg-opacity-20 hover:bg-opacity-60 py-2`, className)}></Button>  
    )
}

export const ButtonSecondaryDark:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        <Button text={text} className={twMerge(`${typography.button_S} text-main_purple bg-[white] hover:bg-[white] py-2`, className)}></Button>  
    )
}

export const ButtonDestructive:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        // <button className={`${typography.button_S} text-[white] bg-red hover:bg-red_hover`}>{text}</button>
        <Button text={text} className={twMerge(`${typography.button_S} text-[white] bg-red hover:bg-red_hover py-2`, className)}></Button>
    )
}

export const SubtaskCheckbox = () => {
    return(
        <div className="p-3 bg-very_dark_grey rounded-md hover:bg-main_purple">
            <div className="flex items-center relative p-0">
                <input type="checkbox" className="peer h-[1rem] w-[1rem] bg-dark_grey appearance-none checked:bg-main_purple cursor-pointer rounded-sm" id="check"/>
                <Image src={IconCheck} alt="check" className="absolute top-1 left-[3px] w-[10px] h-[10px] hidden peer-checked:block pointer-events-none"></Image>
                <label htmlFor="check" className={`${typography.heading_S} mt-[2px] ml-4 peer-checked:line-through peer-checked:opacity-50`}>Hello</label>
            </div>
        </div>
    )
}

