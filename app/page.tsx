import Image from 'next/image'
import { ButtonDestructive, ButtonPrimaryLarge, ButtonPrimarySmall, ButtonSecondaryDark, ButtonSecondaryLight } from './component'

export default function Home() {
  return (
    <main className="flex ">
      <div>
        <ButtonPrimaryLarge text={'hello there'} ></ButtonPrimaryLarge>
      </div>
      <div>
        <ButtonPrimarySmall text={'hello there'} ></ButtonPrimarySmall>
      </div>
      <div className='bg-[white] w-fit'>
        <ButtonSecondaryLight text={'hello there'} ></ButtonSecondaryLight>
      </div>
      <div className='bg-[black]'>
        <ButtonSecondaryDark text={'hello there'} ></ButtonSecondaryDark>
      </div>
      <ButtonDestructive text={'hello there'} ></ButtonDestructive>
      {/* <ButtonPrimaryLarge text={'hello there'} ></ButtonPrimaryLarge> */}
      {/* <ButtonPrimaryLarge text={'hello there'} ></ButtonPrimaryLarge> */}
    </main>
  )
}
