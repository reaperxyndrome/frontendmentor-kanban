import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import { Checkbox } from './Checkbox'
 
test('Page', () => {
  render(<Checkbox id={''} label={''}/>)
  expect(screen.getByRole('heading', { level: 1, name: 'Home' })).toBeDefined()
})