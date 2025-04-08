"use client"
import React from 'react'
import Slider from 'react-slick'
import Slide from './Slide';
const Hero = () => {
    const setting = {
        dots: true,
        infinity: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        pauseOnHover: true,
    };
    const slideData = [
        {
            id: 0,
            img: "/download(3).png",
            title: "Trending",
            mainTitle: "WOMAN FASHION",
            price: "$20"
        },
        {
            id: 1,
            img: "/download(1).jpg",
            title: "Trending1",
            mainTitle: "MAN FASHION",
            price: "$50"
        },
        {
            id: 2,
            img: "/download(2).jpg",
            title: "Trending2",
            mainTitle: "BOY FASHION",
            price: "$10"
        },
    ]
    return (
        <div >
            <div className='container pt-6 lg:pt-0'>
                <Slider {...setting}>
                    {slideData.map((item) => (
                        <Slide
                            key={item.id}
                            img={item.img}
                            title={item.title}
                            mainTitle={item.mainTitle}
                            price={item.price}
                        />
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Hero