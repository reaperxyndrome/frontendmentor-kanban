"use client"
import { useState } from "react"
import { SelectOption } from "../interface"
import Dropdown from "./Dropdown"

export default function Dropdowns(){
  const options1 = [
    {label: "Todo", value: "Todo"},
    {label: "Doing", value: "Doing"},
    {label: "Done", value: "Done"},
    {label: "Done", value: "Done"},
    {label: "Done", value: "Done"},
    
  ]
  const options2 = [
    {label: "a", value: "a"},
    {label: "b", value: "b"},
    {label: "c", value: "c"},
    {label: "d", value: "d"},
    {label: "e", value: "e"},
    
  ]
  const [value_dropdown_1, setValueDropdown1] = useState<SelectOption>(options1[0])
  const [value_dropdown_2, setValueDropdown2] = useState<SelectOption>(options2[0])
  return(
    <div className="flex flex-col gap-y-5">
      <Dropdown options={options1} value={value_dropdown_1} onChange={option => setValueDropdown1(option)} id={""} label={"Dropdown 1"}></Dropdown>
      <Dropdown options={options2} value={value_dropdown_2} onChange={option => setValueDropdown2(option)} id={""} label={"Dropdown 2"}></Dropdown>
    </div>
  )
}