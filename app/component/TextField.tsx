'use client'
import { twMerge } from 'tailwind-merge'
import { TextFieldProps } from '../interface'
import { typography } from '../typography'
import { useState } from 'react'

export const TextField: React.FC<TextFieldProps> = ({
  label = "task",
  className = '',
  id,
  placeholder = "Add task",
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
        data-testid="label"
        htmlFor={id}
        className={`${typography.heading_S} text-medium_grey dark:text-[white] mb-2`}
      >
        {label}
      </label>
      <input
        data-testid="input"
        type="text"
        onChange={handleInputChange}
        id={id}
        placeholder={placeholder}
        className={`${typography.body_L} border bg-opacity-0 bg-[white] border-medium_grey focus:outline-none rounded-md px-4 py-2 placeholder:text-[black]/25 dark:placeholder:text-[white]/25 dark:text-[white] ${required && isSubmitted && !isFilled ? 'border-red' : ''}`}
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
