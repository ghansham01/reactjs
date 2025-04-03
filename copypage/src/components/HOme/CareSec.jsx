import React, { PureComponent } from 'react'

const campaigns = [
  {
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

export class CareSec extends PureComponent {
  render() {
    return (
      <section className='py-10 px-6 lg:px-20 bg-gray-900'>
        <div className='text-center py-16 px-4'>
          <p className='text-orange-500 font-medium mb-4 uppercase tracking-wide'>Causes to care</p>
          <h2 className='text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-tight max-w-4xl mx-auto font-["Quicksand"]'>
            Be the reason of someone smiles
          </h2>
          <p className='text-white mt-6 text-base md:text-lg max-w-2xl mx-auto'>We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making.</p>
        </div>

        {/* cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {campaigns.map((campaign, index) => (
            <div key={index} className="bg-gray-900 rounded-lg shadow-lg overflow-hidden group transition-all duration-300 hover:bg-[#2A2A5C]">
              <img src={campaign.image} alt={campaign.title} className="w-full h-48 object-cover" />

              <div className="p-5">
                <span className="text-orange-500 text-sm font-semibold group-hover:text-orange-400">#{campaign.category}</span>

                <h3 className="text-xl font-bold mt-2 text-white group-hover:text-white">{campaign.title}</h3>

                <p className="text-white text-sm mt-2 group-hover:text-gray-300">{campaign.description}</p>

                {/* Progress Bar */}
                <div className="relative w-full bg-gray-200 h-2 rounded-full mt-4">
                  <div
                    className="absolute top-0 left-0 h-2 bg-orange-500 rounded-full"
                    style={{ width: `${campaign.progress}%` }}
                  ></div>
                </div>

                <p className="text-gray-600 text-sm mt-2 group-hover:text-gray-300">
                  Raised: <strong className="group-hover:text-white">${campaign.raised.toLocaleString()}</strong> | 
                  Goal: <strong className="group-hover:text-white">${campaign.goal.toLocaleString()}</strong>
                </p>

                <p className="text-gray-600 text-sm group-hover:text-gray-300">
                  Donated by <strong className="text-orange-500 group-hover:text-orange-400">{campaign.donors} people</strong>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    )
  }
}

export default CareSec