import React from 'react'


const currencies = [
    {
        name: "USD $",
        value: "USD"
    },
    {
        name: "EUR C",
        value: "EUR"
    },
    {
        name: "INR",
        value: "INR"
    },
]


const Currency = () => {
    return (
        <select
            className="text-gray-500 text-[12px] w-[70px]"
            name='currency'
            id='currency'
        >
            {currencies.map((item, index) => {
                return <option value={item.value} key={index}>
                    {item.name}
                </option>
            })}
        </select>
    )
}

export default Currency