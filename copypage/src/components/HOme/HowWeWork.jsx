import React, { PureComponent } from 'react'

const steps = [
    {
        number: "01",
        title: "Raise money from different sources",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A pellentesque, parturient esse animi temporibus luctus.",
    },
    {
        number: "02",
        title: "Giving relief in rural areas all over the world",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A pellentesque, parturient esse animi temporibus luctus.",
    },
    {
        number: "03",
        title: "Gather all the money and giving relief in need",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A pellentesque, parturient esse animi temporibus luctus.",
    },
    {
        number: "04",
        title: "Go to the country that really needs help",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. A pellentesque, parturient esse animi temporibus luctus.",
    },
]

export class HowWeWork extends PureComponent {
    render() {
        return (
            <section className='py-16 px-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 bg-gray-900'>
                {/* left side - Content */}
                <div className='lg:w-1/2'>
                    <p className='text-orange-600 text-sm font-semibold'>How we work</p>
                    <h2 className='text-3xl font-bold text-white mt-2'>We exist for non-profits, social enterprises, community groups</h2>

                    <div className='mt-6 space-y-6'>
                        {steps.map((step, index) => (
                            <div key={index} className='flex items-start space-x-4'>
                                <span className='flex items-center justify-center w-6 h-6 rounded-full bg-indigo-100 text-black text-sm'>{step.number}</span>
                                <div>
                                    <h3 className='text-white font-semibold'>{step.title}</h3>
                                    <p className='text-white text-sm mt-1'>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* right side - Image */}
                <div className='lg:w-1/2 relative'>
                    <div className='relative'>
                        <img src="https://templates.hibootstrap.com/findo/default/assets/img/work/work1.jpg"
                            alt="Woman in office"
                            className='w-full md:w-80 h-auto rounded-lg shadow-lg'
                        />
                        <img src="https://templates.hibootstrap.com/findo/default/assets/img/work/work2.jpg"
                            alt="Child smiling"
                            className='w-full md:w-72 h-auto rounded-lg shadow-lg absolute -bottom-10 -right-10'
                        />
                    </div>
                </div>
            </section>
        )
    }
}

export default HowWeWork