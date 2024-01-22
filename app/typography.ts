import { Plus_Jakarta_Sans } from 'next/font/google'

export const font = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['500', '700'],
})

export const typography = {
  heading_XL: 'font-bold text-2xl leading-[1.875rem]',
  heading_L: 'font-bold text-lg leading-[1.438rem]',
  heading_M_button_L: 'font-bold text-[0.938rem] leading-[1.188rem]',
  heading_S: 'font-bold text-xs leading-[0.938rem] tracking-[0.15rem]',
  body_L: 'font-medium text-[0.813rem] leading-[1.438rem]',
  body_M: 'font-bold text-xs leading-[0.938rem]',
  button_S: 'font-bold text-[0.813rem] leading-[1.438rem]',
}
