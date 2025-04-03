import React from 'react'
import { Link } from 'react-router-dom'

const campaigns = [
    {
        id: 1,
        category: "Medical",
        title: "Need help for treatment",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 5500,
        goal: 7000,
        donors: 60,
        progress: 85,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation1.jpg",
    },
    {
        id: 2,
        category: "Education",
        title: "Education for poor children",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 6500,
        goal: 8050,
        donors: 50,
        progress: 95,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation2.jpg",
    },
    {
        id: 3,
        category: "Family",
        title: "Financial help for poor",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 5540,
        goal: 6055,
        donors: 40,
        progress: 90,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation3.jpg",
    },
    {
        id: 4,
        category: "Funding",
        title: "Funding for family",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 5560,
        goal: 6855,
        donors: 30,
        progress: 80,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation4.jpg",
    },
    {
        id: 5,
        category: "Relief",
        title: "Relief for cyclone-affected",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 3500,
        goal: 3850,
        donors: 20,
        progress: 75,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation5.jpg",
    },
    {
        id: 6,
        category: "Drought",
        title: "Relief for drought-affected",
        description: "We exist for non-profits, social enterprises, activists.",
        raised: 2950,
        goal: 3840,
        donors: 10,
        progress: 70,
        image: "https://templates.hibootstrap.com/findo/default/assets/img/donation/donation6.jpg",
    },
]

function Donation() {
    return (
        <>
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Donations</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> Donations
                    </p>
                </div>
            </section>

            <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-900">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl font-bold text-center text-white mb-8">Our Donation Campaigns</h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {campaigns.map((campaign) => (
                            <div key={campaign.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden group transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 hover:bg-gray-750">
                                <Link to={`/donation/${campaign.id}`}>
                                    <div className="relative">
                                        <img src={campaign.image} alt={campaign.title} className="w-full h-56 object-cover" />
                                        <div className="absolute top-4 left-4">
                                            <span className="bg-orange-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                                {campaign.category}
                                            </span>
                                        </div>
                                    </div>

                                    <div className="p-6">
                                        <h3 className="text-xl font-bold text-white group-hover:text-orange-400 transition-colors">
                                            {campaign.title}
                                        </h3>

                                        <p className="text-gray-300 mt-3 line-clamp-2">
                                            {campaign.description}
                                        </p>

                                        {/* Progress Bar */}
                                        <div className="relative w-full bg-gray-700 h-3 rounded-full mt-6">
                                            <div
                                                className="absolute top-0 left-0 h-3 bg-orange-500 rounded-full transition-all duration-300"
                                                style={{ width: `${campaign.progress}%` }}
                                            ></div>
                                        </div>

                                        <div className="mt-4 flex justify-between items-center">
                                            <div className="space-y-1">
                                                <p className="text-sm text-gray-400">
                                                    Raised: <span className="font-semibold text-white">${campaign.raised.toLocaleString()}</span>
                                                </p>
                                                <p className="text-sm text-gray-400">
                                                    Goal: <span className="font-semibold text-white">${campaign.goal.toLocaleString()}</span>
                                                </p>
                                            </div>
                                            <div className="text-right">
                                                <p className="text-sm text-gray-400">
                                                    {campaign.donors} donors
                                                </p>
                                                <p className="text-sm font-semibold text-orange-400">
                                                    {campaign.progress}%
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </Link>

                                <div className="px-6 pb-6">
                                    <Link 
                                        to={`/donation/${campaign.id}`}
                                        className="w-full block text-center bg-orange-500 text-white py-2 px-4 rounded-lg font-semibold hover:bg-orange-600 transition-colors"
                                    >
                                        Donate Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Donation