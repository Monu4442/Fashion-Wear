import React from 'react';
import { FaStar } from 'react-icons/fa';
import Img1 from '../../assets/products/women2.jpeg';
import Img2 from '../../assets/products/women3.jpeg';
import Img3 from '../../assets/products/women4.jpeg';
import Img4 from '../../assets/products/shopping.png';
import Img5 from '../../assets/products/women1.png';





const ProductData = [
    {
        id:1,
        img:Img1,
        title:"Women Ethins",
        rating:"4.9",
        color:"White",
        aosDeay:"0",
    },
    {
        id:2,
        img:Img5,
        title:"Women Ethins",
        rating:"5.0",
        color:"Red",
        aosDeay:"200",
    },

    {
        id:3,
        img:Img3,
        title:"Women Ethins",
        rating:"5.0",
        color:"Black",
        aosDeay:"400",
    },

    {
        id:4,
        img:Img4,
        title:"Women Ethins",
        rating:"4.7",
        color:"Green",
        aosDeay:"600",
    },

    {
        id:5,
        img:Img2,
        title:"Women Ethins",
        rating:"4.0",
        color:"Yellow",
        aosDeay:"800",
    },


]

function Products() {
    return (
        <div className='mt-14 mb-12'>
            <div className='container'>
                {/* Header Section  */}
                <div className='text-center mb-10 max-w-[600px] mx-auto '>
                    <p data-aos="fade-up" className='text-sm text-primary '>Top Selling Products for you</p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold'>Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-400'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate consequatur dolores dicta natus nobis impedit atque maxime dolor.</p>
                </div>
                {/* body section  */}
                <div >
                    <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-item-center gap-5'>
                        {/* Card Section */}
                        {ProductData.map((data) => (
                            <div 
                            data-aos="fade-up"
                            data-aos-delay={data.aosDeay}
                            key={data.id} className='space-y-3'>
                                <img src={data.img} alt="" className='h-[220px] w-[150px] object-cover rounded-md' />
                                <div>
                                    <h3 className='font-semibold'>{data.title}</h3>
                                    <p className='text-sm text-gray-600'>{data.color}</p>
                                    <div className='flex item-center gap-1'>
                                        <FaStar className="text-yellow-400" />
                                        <span>{data.rating}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                   
                </div>
                    {/* button */}
                    <div
                     className='flex justify-center text-center'>
                        <button className='text-center mt-10 cursor-pointer bg-primary py-1 px-5 rounded-md'>View all Products</button>
                    </div>

            </div>
            
        </div>
    );
}

export default Products;