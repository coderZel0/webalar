import React from 'react';


const Hero = ()=>{
    return (
    <div className="herosection container flex flex-col-reverse p-6 mt-18 mx-auto space-x-6 space-y-6 md:space-y-0 md:flex-row ">
        <div className="flex flex-col justify-center space-y-6 md:w-1/2 ">
            <div className="text-6xl text-center p-4 text-grayishBlue md:text-left">Let's create something great together</div>
            <p className="text-md text-center md:text-left p-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque.</p>
            <div className="p-4 font-medium text-lg flex justify-center md:justify-start">
                <a className="p-2  px-6 text-background text-center rounded-full bg-cyan">Let's Talk</a>
            </div>
            
        </div>
        <div className="md:w-1/2">
            <img src="./assets/heroimg.png" alt="" />
        </div>
    </div>
    )
}


export default Hero;