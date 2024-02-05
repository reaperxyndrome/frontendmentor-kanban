/**
 * @jest-environment jsdom
 */

// import '@testing-library/jest-dom'
import {fireEvent, render, screen} from '@testing-library/react';
import { TextField } from '@/app/component/TextField';

describe("TextField", () => {
  it("should have label visible", () => {
    render(<TextField placeholder={'hey there'} required={false} isSubmitted={false} id={'hey'} label={'hello'} />)   
    const label = screen.getByTestId("label")
    expect(label).toBeVisible()
  })
  
  it("should have input and placeholder visible", () => {
    render(<TextField placeholder={'hey there'} required={false} isSubmitted={false} id={'hey'} label={'hello'} />)  
    const input = screen.getByTestId("input")
    const placeholder = screen.getByPlaceholderText("hey there")
    expect(input).toHaveAttribute("placeholder", "hey there")
    expect(placeholder).toBeVisible()
  })

  it("should be able to receive keyboard input", () => {
    render(<TextField required={true} isSubmitted={true} id={'hey'} label={'hello'} />)  
    const inputElement = screen.getByPlaceholderText("Add task") as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "input changed"}})
    expect(inputElement.value).toBe("input changed")
  })
  it("should have warning message when input is empty and isSubmitted and required", () => {
    render(<TextField required={true} isSubmitted={true} id={'hey'} label={'hello'} />)  
    const warningMessage = screen.getByText("Can't be empty")
    expect(warningMessage).toBeVisible()
  })
  it("should not have warning message when input is not empty and isSubmitted and required", () => {
    render(<TextField required={true} isSubmitted={true} id={'hey'} label={'hello'} />)  
    const inputElement = screen.getByPlaceholderText("Add task") as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "input changed"}})
    const warningMessage = screen.queryByText("Can't be empty")
    expect(warningMessage).toBeNull()
  })
  it("should not have warning message when input is empty and isSubmitted and not required", () => {
    render(<TextField required={false} isSubmitted={true} id={''} label={''}></TextField>)
    const warningMessage = screen.queryByText("Can't be empty")
    expect(warningMessage).toBeNull() 
  })
  it("should not have warning message when input is not empty and isSubmitted and not required", () => {
    render(<TextField required={false} isSubmitted={true} id={''} label={''}></TextField>)
    const inputElement = screen.getByPlaceholderText("Add task") as HTMLInputElement
    fireEvent.change(inputElement, {target: {value: "input changed"}})
    const warningMessage = screen.queryByText("Can't be empty")
    expect(warningMessage).toBeNull()
  })
  it("should be able to be focused", () => {
    render(<TextField required={false} isSubmitted={false} id={''} label={''}></TextField>)
    const inputElement = screen.getByPlaceholderText("Add task") as HTMLInputElement
    inputElement.focus()
    expect(inputElement).toHaveFocus()
  })
})