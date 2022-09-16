import React from 'react';
import Carousal from './Carousal';
import ServiceContainer from './ServiceContainer';
import {slides,services} from '../logo';

const Services = ()=>{


    return (
        <section style={{borderRadius:"32px"}}  className="services container mt-16 flex flex-col  bg-grayishBlue mx-auto p-6 my-6 py-12 space-y-6">
            <div className='flex space-x-6 justify-center items-center'>
                <span className='w-1/6 h-1 bg-grayishWhite'></span>
                <h3 className='text-grayishWhite font-bold text-2xl font-medium'>Trusted Companies</h3>
                <span className='w-1/6 h-1 bg-grayishWhite'></span>
            </div>
            <Carousal/>
            <span className='w-full h-0.5 bg-grayishWhite'></span>
            <div className="p-6 space-y-6 my-4">
                <div className='p-1 text-white flex flex-col justify-between items-center space-x-12 space-y-6 md:flex-row md:space-y-0'>
                    <div style={{fontSize:"72px"}} className="text-bold p-2 w-full text-center text-white md:text-left md:p-1 md:w-1/2"> Our services that we provide</div>
                    <p className='text-sm text-left p-2 md:ml-4 md:w-1/2'>
                        Lorem Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque
                        Lorem Lorem Lorem Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque
                        ing elit. Aliquam modi, eum assumenda consequun Laboriosam, itaque
                    </p>
                </div>
                <div className='flex flex-col items-center  space-y-6 p-2  md:space-x-6 md:flex-row md:space-y-0'>
                    <ServiceContainer logo={services[0].logo} title={"Design"} />
                    <span  className='gradialWall hidden w-full md:block'></span>

                    <ServiceContainer logo={services[1].logo} title={"Development"} />
                    <span  className='gradialWall w-full hidden md:block'></span>

                    <ServiceContainer logo={services[2].logo} title={"Marketing"} />

                </div>
            </div>
        </section>
    )
}

export default Services;