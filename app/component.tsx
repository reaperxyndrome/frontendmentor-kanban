import { twMerge } from "tailwind-merge"
import { typography } from "./typography"

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
        <Button text={text} className={twMerge(`${typography.button_S} text-main_purple bg-[white] py-2`, className)}></Button>  
    )
}

export const ButtonDestructive:React.FC<ButtonProps> = ({text, className=""}) => {
    return (
        // <button className={`${typography.button_S} text-[white] bg-red hover:bg-red_hover`}>{text}</button>
        <Button text={text} className={twMerge(`${typography.button_S} text-[white] bg-red hover:bg-red_hover py-2`, className)}></Button>
    )
}

