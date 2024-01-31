/**
 * @jest-environment jsdom
 */

// import '@testing-library/jest-dom'
import {render, screen} from '@testing-library/react';
import { TextField } from '@/app/component/TextField';

it("should have hello label", () => {
  render(<TextField placeholder={''} required={false} isSubmitted={false} id={''} label={'hello'} />)
  const element = screen.getByText("hello")
  expect(element).toBeInTheDocument()
})