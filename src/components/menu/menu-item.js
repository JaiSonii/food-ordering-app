import React from 'react'

const MenuItem = () => {
  return (
    <div className='bg-gray-200 p-4 rounded-lg text-center hover:bg-white transition-all hover:shadow-md hover:shadow-black/25'>
        <div className='text-center'>
        <img src='/pizza.png'alt='pizza' className='max-h-auto max-h-24 block mx-auto'/>
        </div>
          
          <h4 className='font-semibold my-2 text-xl'>
            Pepperoni Pizza
          </h4>
          <p className='text-gray-500 text-sm'>
            Pepper pizza spicy with great taste and lots of option including extra cheese and fiiling loaded with lots of pizza sauce.
          </p>
          <button className='bg-primary text-white rounded-full mt-4 px-8 py-2'>
            Add to Cart $12
          </button>
        </div>
  )
}

export default MenuItem