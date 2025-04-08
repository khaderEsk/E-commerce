
import React from 'react'
import Links from './Links'

const Navbar = () => {
    return (
        <div className='hidden lg:block'>
            <div className='container'>
                <div className="flex w-fit gap-10 mx-auto font-medium py-4 text-blackhish">
                    <Links />
                </div>
            </div>
        </div>
    )
}

export default Navbar