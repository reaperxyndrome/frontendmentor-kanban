import Image from 'next/image'
import { ButtonDestructive, ButtonPrimaryLarge, ButtonPrimarySmall, ButtonSecondaryDark, ButtonSecondaryLight, SubtaskCheckbox, TextField } from './component'

export default function Home() {
  return (
    <main className="flex flex-col gap-y-8">
      <section className='flex flex-col'>
        <h1>Buttons</h1>
        <section className='flex flex-wrap gap-3 pt-3'>
          <div>
            <ButtonPrimaryLarge text={'Button Primary Large'} ></ButtonPrimaryLarge>
          </div>
          <div>
            <ButtonPrimarySmall text={'Button Primary Small'} ></ButtonPrimarySmall>
          </div>
          <div className='bg-[white] w-fit'>
            <ButtonSecondaryLight text={'Button Secondary Light'} ></ButtonSecondaryLight>
          </div>
          <div className='bg-[black]'>
            <ButtonSecondaryDark text={'Button Secondary Dark'} ></ButtonSecondaryDark>
          </div>
          <ButtonDestructive text={'Button Destructive'} ></ButtonDestructive>
        </section>
      </section>
      <section className='flex flex-col'>
        <h1 className='mb-4'>Subtask Checkbox</h1>
        <SubtaskCheckbox text='checkbox' id='check'></SubtaskCheckbox>
      </section>
      <section className='flex flex-col'>
        <h1 className='mb-4'>Text Field</h1>
        <TextField text='Text Field' id='check'></TextField>
      </section>
      {/* <ButtonPrimaryLarge text={'hello there'} ></ButtonPrimaryLarge> */}
      {/* <ButtonPrimaryLarge text={'hello there'} ></ButtonPrimaryLarge> */}
    </main>
  )
}
