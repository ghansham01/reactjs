import React, { PureComponent } from 'react'

export class About extends PureComponent {
    render() {
        return (
            <>
                <section className='flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-8 lg:gap-16 px-6 lg:px-20 py-16 bg-gray-900'>
                    <div className='relative w-full lg:w-1/2 justify-center'>
                        <img
                            src="https://templates.hibootstrap.com/findo/default/assets/img/about/about-main1.jpg"
                            alt="Happy Kids"
                            className='w-[450px] h-[350px] object-cover rounded-tl-[200px] rounded-tr-[200px] rounded-bl-[200px] rounded-br-none'
                        />
                    </div>

                    <div className=' w-full lg:w-1/2'>
                        <p className='text-orange-600 font-semibold mt-3'>About us</p>
                        <h2 className='text-4xl font-bold text-gray-100'>We're for social causes</h2>
                        <p className="text-white font-semibold mt-3">
                            We exist for non-profits, social enterprises, community groups, activists, and individuals making a difference.
                        </p>
                        <p className="text-gray-100 mt-3">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore minima atque obcaecati deleniti tempora, cumque molestiae consectetur provident.
                        </p>
                        <p className="text-gray-100 mt-2">
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                        </p>
                        {/* buttons */}
                        <div className='mt-8 flex gap-4'>
                            <button className='bg-gray-100 text-gray-900 px-6 py-3 rounded-full text-lg font-semibold'>Get start a Fundraising</button>
                            <button className='bg-orange-600 text-white px-6 py-3 rounded-full font-semibold'>Read more</button>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}

export default About