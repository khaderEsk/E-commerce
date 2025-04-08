import React from 'react'

import { FiHeart } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { BiUser } from 'react-icons/bi'
const icons = [
    { icon: <BiUser /> },
    { icon: <FiHeart /> },
    { icon: <HiOutlineShoppingBag /> },
]

const Icons = () => {
    return (
        <>
            {icons.map((item, index) => {
                return <div key={index} className="relative hover:cursor-pointer">
                    {item.icon}
                    <div className='bg-red-600 rounded-full absolute top-0 right-0 w-[18px] text-[12px] text-white grid place-items-center translate-x-1 -translate-y-1'>
                        0
                    </div>
                </div>
            })}
        </>
    )
}

export default Icons