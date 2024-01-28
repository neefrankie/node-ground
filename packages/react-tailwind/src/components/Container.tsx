import React from 'react'

export function CenterContainer(
  props: {
    children: React.ReactNode
  }
) {
  return (
    <div className='container mx-auto'>
      <div className='flex flex-row justify-center'>
        <div className='basis-full md:basis-8/12 lg:basis-6/12 xl:basis-4/12 bg-orange-500'>
          {props.children}
        </div>
      </div>
    </div>
  )
}
