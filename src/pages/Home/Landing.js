import React from 'react';
import BucketGirl from '../../assets/images/bucketgirl.png';

const Landing = () => {
    return (
        <>
        <div>
            <div className="hero h-screen lg:h-[60vh] mt-16 bg-[#FFEDD5]">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <h1 data-aos="fade-right" data-aos-delay="100" data-aos-duration="1000" className="text-5xl font-bold">Box Office News!</h1>
                        <p data-aos="fade-right" data-aos-delay="300" data-aos-duration="1000" className="py-6 max-w-xl">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button data-aos="zoom-in" data-aos-delay="1000" data-aos-duration="1000" className="btn btn-primary">Get Started</button>
                    </div>
                    <div className='h-full'>
                        <img data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000"  src={BucketGirl} alt="BucketGirl"/>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-[#F2F2F2] px-10 py-5 shadow-lg mx-auto w-5/6 relative z-100 rounded-lg mt-[-50px]'>
            <div className='mb-4'>
                <h1 className='text-2xl font-semibold text-primary capitalize'>Get Free Estimate</h1>
            </div>
            <div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4'>
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered w-full" />
                </div>
                <div className='uppercase'>
                    <button className="btn btn-primary">Request A Quote</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default Landing;