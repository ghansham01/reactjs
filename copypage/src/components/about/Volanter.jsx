import React from 'react'

const Volan = [
  {
    name: "Jenas Handar",
    role: "CEO & Founder",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/team/team1.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    name: "Smithy Alisha",
    role: "Manager",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/team/team2.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
  {
    name: "Johan Mendal",
    role: "Volunteer",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/team/team3.jpg",
    socials: ["facebook", "twitter", "instagram"],
  },
]

function Volanter() {
  return (
    <div className="py-16 text-center bg-gray-900 w-full overflow-x-hidden">
      <div className="container mx-auto px-4">
        <h3 className="text-orange-500 uppercase">Volunteer</h3>
        <h2 className="text-3xl md:text-4xl font-bold mt-2 text-white">Meet our excellent team</h2>
        <p className="text-gray-100 max-w-2xl mx-auto mt-3">
          We exist for non-profits, social enterprises, community groups, activists, and citizens making a change.
        </p>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {Volan.map((volunteer, index) => (
            <div key={index} className="bg-slate-800 rounded-lg shadow-lg p-5 transition-all duration-700 hover:scale-110">
              <img src={volunteer.image} alt={volunteer.name} className="w-full h-60 object-cover rounded-lg" />
              <h3 className="text-xl font-semibold mt-4 text-white">{volunteer.name}</h3>
              <p className="text-orange-500 text-sm font-medium">{volunteer.role}</p>

              {volunteer.socials.length > 0 && (
                <div className="flex justify-center space-x-4 mt-3">
                  {volunteer.socials.map((social, i) => (
                    <a key={i} href="#" className="text-gray-500 hover:text-orange-500">
                      <i className={`fab fa-${social}`}></i>
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Volanter