import React from 'react'


const langs = [
    {
        name: "English",
        value: "En"
    },
    {
        name: "France",
        value: "Fr"
    },
    {
        name: "Arabic",
        value: "Ar"
    },
]

const Lang = () => {
    return (
        <select
            className="text-gray-500 text-[12px] w-[80px]"
            name='languages'
            id='languages'
        >
            {langs.map((item, index) => {
                return <option value={item.value} key={index}>
                    {item.name}
                </option>
            })}
        </select>
    )
}

export default Lang