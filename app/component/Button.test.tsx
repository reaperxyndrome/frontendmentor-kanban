import { render, screen } from "@testing-library/react"
import { Button, ButtonDestructive, ButtonPrimaryLarge, ButtonPrimarySmall, ButtonSecondary } from "./Button"

describe("Button", ()=>{
  it("should render a button", () => {
    render(<Button label={"hello there"}/>)
    const button = screen.getByRole("button")
    expect(button).toBeVisible()
  })

  it("should have label visible", ()=>{
    render(<Button label={"hello there"}/>)
    const label = screen.getByText("hello there")
    expect(label).toBeVisible()
  })
})

describe("Button Primary Large", () => {
  it("should render a button", () => {
    render(<ButtonPrimaryLarge label={""}></ButtonPrimaryLarge>)
    const button = screen.getByRole("button")
    expect(button).toBeVisible()
  })
  it("should have label visible", ()=>{
    render(<ButtonPrimaryLarge label={"hello there"}/>)
    const label = screen.getByText("hello there")
    expect(label).toBeVisible()
  })
})

describe("Button Primary Small", () => {
  it("should render a button", () => {
    render(<ButtonPrimarySmall label={""}></ButtonPrimarySmall>)
    const button = screen.getByRole("button")
    expect(button).toBeVisible()
  })
  it("should have label visible", ()=>{
    render(<ButtonPrimarySmall label={"hello there"}/>)
    const label = screen.getByText("hello there")
    expect(label).toBeVisible()
  })
})

describe("Button Secondary", () => {
  it("should render a button", () => {
    render(<ButtonSecondary label={""}></ButtonSecondary>)
    const button = screen.getByRole("button")
    expect(button).toBeVisible()
  })
  it("should have label visible", ()=>{
    render(<ButtonSecondary label={"hello there"}/>)
    const label = screen.getByText("hello there")
    expect(label).toBeVisible()
  })
})

describe("Button Destructive", () => {
  it("should render a button", () => {
    render(<ButtonDestructive label={""}></ButtonDestructive>)
    const button = screen.getByRole("button")
    expect(button).toBeVisible()
  })
  it("should have label visible", ()=>{
    render(<ButtonDestructive label={"hello there"}/>)
    const label = screen.getByText("hello there")
    expect(label).toBeVisible()
  })
})