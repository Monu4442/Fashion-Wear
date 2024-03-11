import React from 'react';
import Slider from 'react-slick';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import img1 from '../../assets/Hero/sale.png';
import img2 from '../../assets/Hero/shopping.png';
import img3 from '../../assets/Hero/women.png';



const ImageList = [
    {
        id: 1,
        img: img1,
        title: "70% off on all Product Sale",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque id non ab vitae sequi delectus atque maiores quo tempora accusantium",
    },
    {
        id: 2,
        img: img2,
        title: "Flat 30% off on all Men's Wear",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque id non ab vitae sequi delectus atque maiores quo tempora accusantium",
    },
    {
        id: 3,
        img: img3,
        title: "Upto 50% off on all Women's Wear",
        desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque id non ab vitae sequi delectus atque maiores quo tempora accusantium",
    },
];



function Hero() {

    const settings = {
        dots: false,
        infinite: true,
        arrows:false,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,        
        autoplaySpeed: 3000,
        cssEase:"ease-in-out",
        pauseOnHover:false,
        pauseOnFocus:true,
    };
    return (
<div className='relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200'>           
             {/* Background pattern */}
            <div className='h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>

            {/* Hero Section */}
            <div className='container pb-8 sm:pb-0'>
                <Slider {...settings}>
                    {ImageList.map((item) => (
                        <div key={item.id}>
                            <div className='grid grid-cols-1 sm:grid-cols-2'>
                                {/* Text content section */}
                                <div className='flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-1 sm:order-2 relative z-10'>
                                    <h1  data-aos="zoom-out" data-aos-duration="500" data-aos-once="true"
                                    className='text-5xl sm:text-6xl lg:text-7xl font-bold' 
                                    >{item.title}</h1>
                                    <p  data-aos="fade-up" data-aos-duration="500" data-aos-delay="300"
                                    className='text-sm'>{item.desc}</p>
                                    <div  data-aos="fade-up" data-aos-duration="500" data-aos-once="true">
                                        <button className='bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full'>Order Now</button>
                                    </div>
                                </div>

                                {/* Image section */}
                                <div 
                                    
                                className='order-1 sm:order-2'>
                                    <div  data-aos="zoom-in" data-aos-once="true"
                                     className='relative z-10'>
                                        <img src={item.img} alt={`Img ${item.id}`} className='w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-105 lg:scale-120 object-contain mx-auto ' />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default Hero;
