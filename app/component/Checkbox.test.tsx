import { render, screen } from "@testing-library/react"
import { Checkbox } from "./Checkbox"

describe("Checkbox", () => {
  it("should have label visible", () => {
    render(<Checkbox label={"hello there"} id={""} />)
    const label = screen.getByText("hello there")
    expect(label).toBeInTheDocument()
    expect(label).not.toHaveClass("hidden")
    // expect(label).toHaveStyle("display: none")
  })
  it("should have checkbox visible", () => {
    render(<Checkbox label={""} id={"check"} />)
    const checkbox = screen.getByRole("checkbox")
    expect(checkbox).toBeInTheDocument()
    expect(checkbox).not.toHaveClass("hidden")
  })
  it("should have check icon invisible", () => {
    render(<Checkbox label={""} id={"check"}/>)
    const checkIcon = screen.getByAltText('check')
    expect(checkIcon).toBeInTheDocument()
    expect(checkIcon).toHaveClass("hidden")
    expect(checkIcon).toHaveStyle("display: none")
  })
})