import { twMerge } from 'tailwind-merge'
import { typography } from '../typography'
import IconCheck from '@/public/icon-check.svg'
import Image from 'next/image'
import { InputProps, TextFieldProps } from '../interface'

export const Checkbox: React.FC<InputProps> = ({
  label,
  className = '',
  id,
}) => {
  return (
    <div
      className={twMerge(
        'p-3 dark:bg-very_dark_grey bg-light_grey rounded-md dark:text-[white] hover:bg-main_purple hover:bg-opacity-25 cursor-pointer',
        className
      )}
    >
      <div className="flex items-center relative p-0">
        <input
          type="checkbox"
          className="peer h-[1rem] w-[1rem] dark:bg-dark_grey bg-[white] border border-medium_grey border-opacity-25 appearance-none checked:bg-main_purple cursor-pointer rounded-sm"
          id={id}
        />
        <Image
          src={IconCheck}
          alt="check"
          className="absolute top-1 left-[3px] w-[10px] h-[10px] hidden peer-checked:block pointer-events-none"
        ></Image>
        <label
          htmlFor={id}
          className={`${typography.heading_S} mt-[2px] ml-4 peer-checked:line-through peer-checked:opacity-50`}
        >
          {label}
        </label>
      </div>
    </div>
  )
}
