import React from 'react'

const cards = [
    {
        title: "Be a volunteer",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief it is not simply.",
        bgColor: "bg-green-500",
        icon: "👥",
    },
    {
        title: "Donate now",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief it is not simply.",
        bgColor: "bg-orange-500",
        icon: "🤲",
    },
    {
        title: "Show your love",
        text: "Contrary to popular belief, Lorem Ipsum is not simply random text. Contrary to popular belief it is not simply.",
        bgColor: "bg-indigo-900",
        icon: "❤️",
    },
]

function AboutCard() {
    return (
        <section className='relative w-full bg-cover bg-center py-16 px-6 lg:px-20' 
        style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/feature-bg.jpg')" }}>
            <div 
            className='grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-10'>
                {cards.map((card, index) => (
                    <div 
                    key={index} className={`${card.bgColor} text-white p-6 rounded-2xl shadow-lg`}>
                        {/* Icons */}
                        <div className='text-4xl'>{card.icon}</div>
                        <h3 className='text-2xl font-semibold mt-3'>{card.title}</h3>
                        <p className='text-white/90 mt-2'>{card.text}</p>
                        <button className='mt-4 px-6 py-2 border border-white rounded-[30px] text-white hover:bg-white hover:text-gray-900 transition'>
                            Join Us
                        </button>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AboutCard