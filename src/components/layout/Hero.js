import React from 'react'
import Image from 'next/image'
import Right from '../icons/Right'

const Hero = () => {
  return (
    <section className='hero mt-4'>
        <div className='py-12'>
        <h1 className='text-4xl font-semibold'>Everything <br />
         is better <br />
          with a&nbsp; 
          <span className='text-primary'>Pizza</span></h1>
        <p className='my-6 text-gray-500 text-sm'>
        Browse through our wide selection of handcrafted pizzas made with the freshest ingredients and finest toppings. Whether you're craving classic favorites like Margherita or Pepperoni, or adventurous specialties like BBQ Chicken or Veggie Supreme, we've got something to satisfy every pizza lover's cravings.
        </p>
        <div className='flex gap-4 text-sm'>
            <button className='flex justify-center bg-primary uppercase items-center gap-2 text-white px-4 py-2 rounded-full'>Order Now <Right /></button>
            <button className='flex gap-2 py-2 text-gray-600 font-semibold border-0 items-center hover:bg-gray-200 rounded-full'>Learn More</button>
        </div>
        </div>
        <div className='relative'>
        <Image src={'/pizza.png'} layout={'fill'} objectFit={'contain'} alt={'pizza'} />
        </div>
    </section>
  )
}

export default Hero