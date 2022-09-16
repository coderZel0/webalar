import React from 'react';
import {socials} from '../logo';


const Contact = () => {
  return (
    <div className="container p-2 my-16 space-y-6 mt-32 mx-auto">
        <div className='p-3'>
            <span className='text-grayishBlue text-center text-7xl md:text-left'>Connect with us</span>
        </div>
        <div className='flex flex-col p-3 space-x-6 space-y-6 md:flex-row'>
            <div style={{borderRadius:"24px"}} className='formContainer p-8 bg-grayishBlue '>
                <div className='space-y-4 text-white'>
                    <span className='text-2xl'>Tell us about yourself</span>
                    <p className='text-sm pr-6'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, dicta distinctio consectetur provident accusantium delectus commodi placeat unde id voluptas.</p>
                </div>

                <div className='mt-8'>
                    <form className='text-white space-y-4'>
                        <div className='space-y-2 md:space-y-3'>
                            <label className='text-lg font-medium' htmlFor='name'>Your Name</label>
                            <input className='p-2 bg-background rounded-lg w-full focus:outline-none' id='name' type='text' name='name' />
                        </div>

                        <div className='flex justify-between space-x-6'>
                            <div className='space-y-2 md:space-y-3 w-1/2'>
                                <label className='text-lg font-medium' htmlFor='email'>Your Email</label>
                                <input className='p-2 bg-background rounded-lg w-full focus:outline-none' id='email' type='email' name='email' />
                            </div>
                            <div className='space-y-2 md:space-y-3 w-1/2'>
                                <label className='text-lg font-medium' htmlFor='phone'>Your Phone Number</label>
                                <input className='p-2 bg-background rounded-lg w-full focus:outline-none' id='phone' type='text' name='phone' />
                            </div>
                        </div>

                        <div className='space-y-2 md:space-y-3'>
                            <label className='text-lg font-medium' htmlFor='message'>Your Message</label>
                            <textarea id='message' className='p-7 w-full rounded-lg bg-background focus:outline-none' name='message'></textarea>
                        </div>

                        <button type='submit' className='px-12 rounded-full text-black font-medium py-2 bg-cyan'>Submit</button>
                    </form>
                </div>
            </div>
            
            <div className='p-6 space-y-6 text-background'>
                <div style={{borderBottom:"2px solid rgba(51, 51, 51, 0.5)"}} className='space-y-4 pr-14 py-6'>
                    <span className='text-xl font-medium'>Address</span>
                    <p className='text-md text-background'>0199 Taylor Park North Dakota, USA</p>
                </div>

                <div style={{borderBottom:"2px solid rgba(51, 51, 51, 0.5)"}} className='space-y-4 pr-14 py-6'>
                    <span className='text-xl font-medium'>Call us on</span>
                    <p className='text-md text-background'>+1 98723 42023 info@logoipsum.com</p>
                </div>
                
                <div className='space-y-4 pr-14 py-6'>
                    <span className='text-xl font-medium'>Social Media</span>
                    <div className='contactSocials flex space-x-6'>
                        <div style={{width:"30px",height:"30px"}}>
                            {socials.instagram}
                        </div>
                        <div style={{width:"30px",height:"30px"}}>
                            {socials.twitter}
                        </div>
                        <div style={{width:"30px",height:"30px"}}>
                            {socials.facebook}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Contact