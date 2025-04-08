import React from 'react'
import { BsSearch } from 'react-icons/bs'
import Icons from './Icons'

const HeaderMain = () => {
    return (
        <div className='border-b border-gray-500 py-6'>
            <div className='container sm:flex gap-1 justify-between items-center'>
                <div className='font-bold text-4xl text-center pb-4 sm:pb-0 text-blackhish'>
                    Logo
                </div>
                <div className='w-full sm:w-[300px] md:[70%] relative'>
                    <input
                        type="text"
                        placeholder='Enter any product name...'
                        className='w-full p-2 px-4 border-gray-200 border rounded-lg'
                    />
                    <BsSearch className='absolute right-0 top-0 mr-3 mt-3 text-gray-400' size={20} />
                </div>
                <div className='hidden lg:flex gap-4 text-gray-500 text-[30px]'>
                    <Icons />
                </div>
            </div>
        </div>
    )
}

export default HeaderMain