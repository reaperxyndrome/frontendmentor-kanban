import { Checkbox } from './Checkbox'
import { TextField } from './TextField'
import {
  ButtonDestructive,
  ButtonPrimaryLarge,
  ButtonPrimarySmall,
  ButtonSecondary,
} from './Button'
import Dropdown from './Dropdown'

export default function ComponentPage() {
  return (
    <main className="flex flex-col gap-y-8 dark:bg-dark_grey p-8">
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
        <h2 className="mb-4 dark:text-[white]">Dropdown</h2>
        <Dropdown options={["hello", "there"]} id={''} label={''}></Dropdown>
      </section>
    </main>
  )
}
