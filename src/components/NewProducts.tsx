import React from 'react'
import ProductCard from './ProductCard'


const products = [
    {
        img: "/Products/pro1.jpg",
        title: "product1",
        desc: "product1 product1",
        rating: 3,
        price: "50.00"
    },
    {
        img: "/Products/pro2.jpg",
        title: "product2",
        desc: "product2 product2",
        rating: 5,
        price: "32.20"
    },
    {
        img: "/Products/pro4.jpg",
        title: "product4",
        desc: "product4 product4",
        rating: 4,
        price: "32.10"
    },
    {
        img: "/Products/pro5.jpg",
        title: "product5",
        desc: "product5 product5",
        rating: 3,
        price: "20.12"
    },
    {
        img: "/Products/pro6.jpg",
        title: "product6",
        desc: "product6 product6",
        rating: 2,
        price: "53.12"
    },
    {
        img: "/Products/pro10.jpg",
        title: "product10",
        desc: "product10 product10",
        rating: 5,
        price: "40.22"
    },
]

const NewProducts = () => {
    return (
        <div className=''>
            <div className='container pt-16'>
                <h2 className='font-medium text-2xl bp-4 '>New Products</h2>
                <div className='grid grid-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10'>
                    {products.map((item, index) => (
                        <ProductCard
                            key={index}
                            img={item.img}
                            title={item.title}
                            desc={item.desc}
                            rating={item.rating}
                            price={item.price}

                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default NewProducts