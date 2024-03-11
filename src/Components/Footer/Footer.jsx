import React from 'react';
import Banner from '../../assets/Footer/footer.jpeg';
import Flogo from '../../assets/logo.png';
import { FaInstagram, FaFacebook, FaLinkedinIn, FaLocationArrow, FaMobileAlt } from 'react-icons/fa';

const BannerIMG = {
  backgroundImage: `url(${Banner})`,
  backgroundPosition: 'bottom',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  height: '100%',
  width: '100%',
  
};

const FooterLinks = [
  {
    title: 'Home',
    link: '#',
  },
  {
    title: 'About',
    link: '#about',
  },
  {
    title: 'Contact',
    link: '#contact',
  },
  {
    title: 'Blog',
    link: '#blog',
  },
];

function Footer() {
  return (
    <div className='text-white mb-20' style={BannerIMG}>
      <div className='container'>
        <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5 '>
          {/* company details */}
          <div className='py-8 px-4'>
            <div className='flex items-center gap-3 mb-3'>
              <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify'>Shopsy</h1>
              <img src={Flogo} alt="" className='max-w-[50px]' />
            </div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium cum quae architecto.</p>
          </div>
          {/* footer links */}
          <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
            <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Important links</h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className='py-8 px-4'>
                <h1 className='sm:text-xl text-xl font-bold sm:text-left text-justify mb-3'>Links</h1>
                <ul className='flex flex-col gap-3'>
                  {FooterLinks.map((link) => (
                    <li className='cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200' key={link.title}>
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Social Links */}
            <div>
              <div className='flex gap-3 mt-6'>
                <a href="#">
                  <FaInstagram className='text-3xl' />
                </a>
                <a href="#">
                  <FaFacebook className='text-3xl' />
                </a>
                <a href="#">
                  <FaLinkedinIn className='text-3xl' />
                </a>
                <div className='mt-6'>
                  <div className='flex items-center gap-3 my-5'>
                    <FaLocationArrow />
                    <p>Dhule,Maharashtra</p>
                  </div>
                  <div className='flex items-center gap-3 mt-3'>
                    <FaMobileAlt />
                    <p>+91 9834124682</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
