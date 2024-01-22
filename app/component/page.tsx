import { Checkbox } from './Checkbox'
import { TextField } from './TextField'
import {
  ButtonDestructive,
  ButtonPrimaryLarge,
  ButtonPrimarySmall,
  ButtonSecondary,
} from './Button'

export default function ComponentPage() {
  return (
    <main className="flex flex-col gap-y-8">
      <section className="flex flex-col">
        <h1>Buttons</h1>
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
        <h1 className="mb-4">Subtask Checkbox</h1>
        <Checkbox label="checkbox" id="check"></Checkbox>
      </section>
      <section className="flex flex-col">
        <h1 className="mb-4">Text Field</h1>
        <TextField
          label="Text Field"
          id="check"
          placeholder="Enter task name"
          required
          isSubmitted
        ></TextField>
      </section>
    </main>
  )
}
