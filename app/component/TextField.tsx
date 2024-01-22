'use client'
import { twMerge } from 'tailwind-merge'
import { TextFieldProps } from '../interface'
import { typography } from '../typography'
import { useState } from 'react'

// TODO: add error message when required field is empty and submitted
export const TextField: React.FC<TextFieldProps> = ({
  label,
  className = '',
  id,
  placeholder,
  required,
  isSubmitted,
}) => {
  const [isFilled, setIsFilled] = useState(false)
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFilled(e.target.value !== '')
  }

  return (
    <div className={twMerge('relative flex flex-col', className)}>
      <label
        htmlFor={id}
        className={`${typography.heading_S} text-[white] mb-2`}
      >
        {label}
      </label>
      <input
        type="text"
        onChange={handleInputChange}
        id={id}
        placeholder={placeholder}
        className={`${typography.body_L} border bg-opacity-0 bg-[white] border-medium_grey focus:outline-none rounded-md px-4 py-2 placeholder:text-[white]/25 ${required && isSubmitted && !isFilled ? 'border-red' : ''}`}
        required={required}
      ></input>
      {required && !isFilled && isSubmitted && (
        <span
          className={`${typography.body_L} absolute bottom-2 right-4 text-red`}
        >
          Can&apos;t be empty
        </span>
      )}
    </div>
  )
}
