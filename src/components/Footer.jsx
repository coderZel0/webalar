import React from 'react'
import { logo,socials } from '../logo'

const Footer = () => {
  return (
    <div style={{borderRadius:"32px 32px 0px 0px"}} className='container flex flex-col items-center p-6 space-y-6 mx-auto bg-grayishBlue'>
        <div className='p-1 text-white flex flex-col justify-between items-center space-x-6 space-y-6 md:flex-row md:space-y-0'>
            <div style={{fontSize:"72px"}} className="text-bold p-2 w-full text-center text-white md:text-left md:p-6 md:w-1/2">Let's work together</div>
            <div className='flex flex-col space-y-1 md:w-1/2'>
                <p className='text-sm text-center p-6 md:text-left'>
                    Lorem Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque
                     eum assumenda consequun Laboriosam, itaque
                </p>
                <div className="px-6 font-medium text-lg flex justify-center md:justify-start">
                    <a className="p-2  px-10 text-background text-center rounded-full bg-cyan">Let's Talk</a>
                </div>
            </div>
            
        </div>

        <div className='flex flex-col-reverse p-6 justify-between items-center md:items-start  w-full space-x-6 space-y-6 md:space-y-4 md:flex-row'>
            <div className='footer_logos flex flex-col-reverse space-y-6'>
                {logo}
                <div className='flex py-2 space-x-3'>
                    {socials.instagram}
                    {socials.twitter}
                    {socials.facebook}
                </div>
            </div>

            <div className='flex justify-around w-full items-start space-x-6 p-4 md:w-2/3 '>
                <div className='flex flex-col space-y-6 text-white'>
                    <span className='text-lg text-bold font-medium'>Address</span>
                    <div className='flex flex-col text-sm'>
                        <span className='text-md'>0199 Taylor Park</span>
                        <span className='text-md'>North Dakota, USA</span>
                    </div>
                </div>

                <div className='flex flex-col space-y-6 text-white'>
                    <span className='text-lg text-bold font-medium'>Call us on</span>
                    <div className='flex flex-col text-sm'>
                        <span className='text-md'>+1 98723 42023</span>
                        <span className='text-md'>info@logoipsum.com</span>
                    </div>
                </div>

                <div className='flex flex-col space-y-6 text-white'>
                    <span className='text-lg text-bold font-medium'>Our Policies</span>
                    <div className='flex flex-col text-sm'>
                        <span className='text-md'>Privacy Policy</span>
                        <span className='text-md'>Terms of Use</span>
                        <span className='text-md'>Refund Policy</span>
                    </div>
                </div>
            </div>
        </div>

        <span className='w-full h-0.5 bg-grayishWhite mt-18'></span>
        <div className='flex justify-center items-center p-2'>
            <span className='text-white text-md'>Copyright &#9400; Webalar. All rights reserved</span>
        </div>
    </div>
  )
}

export default Footer