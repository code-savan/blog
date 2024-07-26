import Header from '@/components/shared/Header'
import React from 'react'

const page = () => {
  return (
    <section className='w-full'>
      <Header />
      <div className="w-full pt-6 px-8 flex items-center justify-center">
        <p className='font-semibold text-[70px]'>Welcome to Where-Ever</p>
      </div>
    </section>
  )
}

export default page