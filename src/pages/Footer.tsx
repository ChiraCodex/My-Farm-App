import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa6';
import footerImg from '../assets/images/aprojectof.png'


const Footer = () => {
  return (
    <><div className=" relative m-4 py-4 text-[#486232] ">
        
      <div className='flex justify-between items-center'>
        <div className=" grid grid-cols-1 md:grid-cols-2 justify-end px-4 ">
      <div className="leading-[1] ">
        <h1>General Enquiry</h1>
        <p><a href="#">+254 (0) 20 206 7872</a></p>
        <p><a className='underline-' href="#">+254 (0) 113 342 473</a></p>
        <br />
        <p><a href="#">+254 (0) 739 999 066 </a></p>
        <p><a href="#">info@makuyuridge.co.ke</a></p>
      </div>
      <div className=" leading-[1]">
        
        <h1>Sales Enquiry</h1>
        <p><a href="#">+254 (0) 726 771 623</a> </p>
        <p><a href="#">smutulu@makuyuridge.co.ke</a></p>        
      </div>
      </div>
      <div className='flex flex-col h-60 justify-between mr-10 text-2xl'>
        <FaFacebook/>
        <FaInstagram/>
        <FaTwitter/>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center  bottom-0'>
      <div className="flex justify-center bg-[black] text-center w-full py-2">
        <img className='w-80 shadow-xl'
        src={footerImg} alt="" />
      </div>
      <div className="text-xs  "><p>All Rights Reserved&copy;2025</p></div>
      </div>
    </div>
    </>
  );
};

export default Footer;
