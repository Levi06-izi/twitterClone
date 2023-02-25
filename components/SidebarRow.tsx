import React, { SVGProps } from 'react'

interface Props {
    //icon here is component, empty function placeholder
    Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element,
    title: string
}

function SidebarRow({Icon, title}: Props) {
  return (
    <div className='flex items-center max-w-fit space-x-2 px-4 py-3
     rounded-full transition-all duration-200 hover:bg-gray-100'>
      <Icon className='h-6 w-6'/>
      <p className='group-hover:text-twitter hidden md:inline-flex
      text-base font-light lg:text-xl'>{title}</p>
    </div>
  )
}

export default SidebarRow
