import { LabelProps } from '../interface'
import { twMerge } from 'tailwind-merge'
import { typography } from '../typography'

export const Button: React.FC<LabelProps> = ({ label, className = '' }) => {
  return (
    <button
      className={twMerge(
        'text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover',
        className
      )}
    >
      {label}
    </button>
  )
}

export const ButtonPrimaryLarge: React.FC<LabelProps> = ({
  label,
  className = '',
}) => {
  return (
    // <button className={`${typography.heading_M_button_L} text-[white] py-3 px-[2rem] rounded-full bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
    <Button
      label={label}
      className={twMerge(
        `${typography.heading_M_button_L} text-[white] bg-main_purple hover:bg-main_purple_hover`,
        className
      )}
    ></Button>
  )
}

export const ButtonPrimarySmall: React.FC<LabelProps> = ({
  label,
  className = '',
}) => {
  return (
    // <button className={`${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover`}>{text}</button>
    <Button
      label={label}
      className={twMerge(
        `${typography.button_S} text-[white] bg-main_purple hover:bg-main_purple_hover py-2`,
        className
      )}
    ></Button>
  )
}

export const ButtonSecondary: React.FC<LabelProps> = ({
  label,
  className = '',
}) => {
  return (
    <Button
      label={label}
      className={twMerge(
        `${typography.button_S} text-main_purple bg-main_purple dark:bg-[white] dark:hover:bg-[white] bg-opacity-10 hover:bg-opacity-60 py-2`,
        className
      )}
    ></Button>
  )
}

export const ButtonDestructive: React.FC<LabelProps> = ({
  label,
  className = '',
}) => {
  return (
    // <button className={`${typography.button_S} text-[white] bg-red hover:bg-red_hover`}>{text}</button>
    <Button
      label={label}
      className={twMerge(
        `${typography.button_S} text-[white] bg-red hover:bg-red_hover py-2`,
        className
      )}
    ></Button>
  )
}
