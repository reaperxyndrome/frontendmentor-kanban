import { Checkbox } from './Checkbox'
import { TextField } from './TextField'
import {
  ButtonDestructive,
  ButtonPrimaryLarge,
  ButtonPrimarySmall,
  ButtonSecondary,
} from './Button'
import Dropdown from './Dropdown'
import Dropdowns from './Dropdowns'

// TODO: refactor Dropdown to Dropdowns and mark it as client component
// TODO: fix type error in Dropdown
export default function ComponentPage() {
  return (
    <main className="flex flex-col gap-y-8 p-8">
      <h1 className='dark:text-[white] text-3xl self-center'>Components</h1>
      <section className="flex flex-col">
        <h2 className='dark:text-[white]'>Buttons</h2>
        <section className="flex flex-wrap gap-3 pt-3">
          <div>
            <ButtonPrimaryLarge
              label={'Button Primary Large'}
            ></ButtonPrimaryLarge>
          </div>
          <div>
            <ButtonPrimarySmall
              label={'Button Primary Small'}
            ></ButtonPrimarySmall>
          </div>
          <ButtonSecondary label={'Button Secondary'}></ButtonSecondary>
          <ButtonDestructive label={'Button Destructive'}></ButtonDestructive>
        </section>
      </section>
      <section className="flex flex-col">
        <h2 className="mb-4 dark:text-[white]">Subtask Checkbox</h2>
        <Checkbox label="Checkbox" id="check"></Checkbox>
      </section>
      <section className="flex flex-col">
        <h2 className="mb-4 dark:text-[white]">Text Field</h2>
        <TextField
          label="Text Field"
          id="check"
          placeholder="Enter task name"
          required
          isSubmitted
        ></TextField>
      </section>
      <section className="flex flex-col">
        <h2 className="mb-4 dark:text-[white]">Dropdowns</h2>
        {/* <Dropdown options={options} id={''} label={'Dropdown (Active)'} value={options[0]}></Dropdown> */}
        <Dropdowns></Dropdowns>
      </section>
    </main>
  )
}
