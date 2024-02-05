export interface Extendable {
  // text: string,
  className?: string
}

export interface LabelProps extends Extendable {
  label: string
}

export interface InputProps extends LabelProps {
  id: string
}

export interface TextFieldProps extends InputProps {
  placeholder?: string
  required: boolean
  isSubmitted: boolean
}

export interface SelectOption {
  label: string,
  value: string
}

export interface SelectProps extends InputProps {
  options: Array<SelectOption>,
  value: SelectOption
  onChange: (value: SelectOption) => void
}
