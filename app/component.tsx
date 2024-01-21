import { twMerge } from "tailwind-merge"
import { typography } from "./typography"
import IconCheck from "@/public/icon-check.svg"
import Image from "next/image"
// import { Input } from "postcss"

interface Extendable {
    // text: string,
    className?: string
}

interface LabelProps extends Extendable{
    label: string
}

interface InputProps extends LabelProps {
    id: string
}

interface TextFieldProps extends InputProps {
    placeholder: string,
    required: boolean
}




const Button:React.FC<LabelProps> = ({label, className=""}) => {
    return(
        <button className={twMerge("text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover", className)}>{label}</button>
    )
}

export const ButtonPrimaryLarge:React.FC<LabelProps> = ({label, className=""}) => {
    return (
        // <button className={`${typography.heading_M_button_L} text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
        <Button label={label} className={twMerge(`${typography.heading_M_button_L} text-[white] bg-main_purple hover:bg-main_purple_hover`, className)}></Button>
    )
}


export const ButtonPrimarySmall:React.FC<LabelProps> = ({label, className=""}) => {
    return (
        // <button className={`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
        <Button label={label} className={twMerge(`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover py-2`, className)}></Button>     
    )
}

export const ButtonSecondaryLight:React.FC<LabelProps> = ({label, className=""}) => {
    return (
        <Button label={label} className={twMerge(`${typography.button_S} text-main_purple bg-main_purple bg-opacity-20 hover:bg-opacity-60 py-2`, className)}></Button>  
    )
}

export const ButtonSecondaryDark:React.FC<LabelProps> = ({label, className=""}) => {
    return (
        <Button label={label} className={twMerge(`${typography.button_S} text-main_purple bg-[white] hover:bg-[white] py-2`, className)}></Button>  
    )
}

export const ButtonDestructive:React.FC<LabelProps> = ({label, className=""}) => {
    return (
        // <button className={`${typography.button_S} text-[white] bg-red hover:bg-red_hover`}>{text}</button>
        <Button label={label} className={twMerge(`${typography.button_S} text-[white] bg-red hover:bg-red_hover py-2`, className)}></Button>
    )
}

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

export const TextField:React.FC<TextFieldProps> = ({label, className="", id, placeholder, required}) => {
    return(
        <div className={twMerge("flex flex-col", className)}>
            <label htmlFor={id} className={`${typography.heading_S} text-medium_grey mb-2`}>{label}</label>
            <input type="text" id={id} placeholder={placeholder} className={`${typography.body_L} border bg-opacity-0 bg-[white] border-medium_grey border-op focus:outline-none rounded-md px-4 py-2 placeholder:text-[white]/25`} required={required}></input>
        </div>
    )

}

