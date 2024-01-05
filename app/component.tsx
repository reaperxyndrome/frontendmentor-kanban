import { typography } from "./typography"

interface ButtonProps {
    text: string
}

export const ButtonPrimaryLarge:React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${typography.heading_M_button_L} text-[white] bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
    )
}


export const ButtonPrimarySmall:React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
    )
}

export const ButtonSecondaryLight:React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${typography.button_S} text-main_purple bg-main_purple bg-opacity-10 hover:bg-opacity-25`}>{text}</button>
    )
}

export const ButtonSecondaryDark:React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${typography.heading_M_button_L} text-main_purple bg-[white]`}>{text}</button>
    )
}

export const ButtonDestructive:React.FC<ButtonProps> = ({text}) => {
    return (
        <button className={`${typography.button_S} text-[white] bg-red hover:bg-red_hover`}>{text}</button>
    )
}

