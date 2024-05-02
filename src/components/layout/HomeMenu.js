import React from 'react'
import Image from 'next/image'
import MenuItem from '../menu/menu-item'
import SectionHeader from './section-header'

const HomeMenu = () => {
  return (
    <section className=''>
      <div className='absolute left-0 right-0 w-full justify-start'>
        <div className='absolute -left-0 text-left -top-[70px] -z-10'>
          <Image src={'/sallad1.png'} width={109} height={189}  alt={'sallad'} />
        </div>
        <div className='absolute -top-[100px] right-0 -z-10'>
          <Image src={'/sallad2.png'} width={107} height={195} alt={'sallad'} />
        </div>
      </div>
      <div className='text-center mb-4'>
        <SectionHeader subHeader={'check out'} mainHeader={'Menu'}/>
      </div>
      <div className='grid grid-cols-3 gap-4'>
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
        <MenuItem />
      </div>
    </section>
  )
}

export default HomeMenu