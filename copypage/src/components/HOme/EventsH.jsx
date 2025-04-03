import React, { PureComponent } from 'react'

const events = [
    {
        date: "06",
        month: "Jan",
        title: "Challenge is right for you",
        time: "10.00am - 11.00am",
        location: "UK",
    },
    {
        date: "07",
        month: "Jan",
        title: "Fundraising is going",
        time: "11.00am - 12.00pm",
        location: "France",
    },
    {
        date: "08",
        month: "Jan",
        title: "Bowling for a cause",
        time: "1.00pm - 1.30pm",
        location: "Spain",
    },
]

export class Events extends PureComponent {
    render() {
        return (
            <section className='bg-gray-900 from-emerald-700 via-green-600 to-teal-500 py-16 px-6 lg:px-20 text-white relative overflow-hidden' 
                >
                <div className='text-center relative z-10'>
                    <p className='text-sm uppercase font-semibold tracking-wider bg-emerald-400/30 inline-block px-6 py-2 rounded-full border border-white/20 shadow-lg'>
                        Our events
                    </p>
                    <h2 className='text-4xl font-bold mt-4 mb-8 drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)]'>
                        Upcoming events near you
                    </h2>
                </div>
                
                <div className='mt-10 flex flex-col lg:flex-row items-stretch gap-10 justify-center'>
                    {/* Highlighted Event */}
                    <div className='bg-gradient-to-br from-gray-900/95 to-gray-800/95 p-6 rounded-2xl w-full lg:w-2/3 relative hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 border border-white/10'>
                        <div className='absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent rounded-2xl'></div>
                        <img className='rounded-xl w-full h-64 object-cover shadow-lg' 
                        src="https://templates.hibootstrap.com/findo/default/assets/img/event/event2.jpg" alt="Main Event" />
                        <div className='absolute top-8 left-8 bg-gradient-to-br from-white to-gray-100 text-gray-900 px-4 py-2 rounded-lg text-center shadow-xl'>
                            <p className='text-2xl font-bold'>10</p>
                            <p className='text-sm font-medium text-emerald-600'>Jan</p>
                        </div>
                        <div className='mt-6 relative'>
                            <h3 className='text-2xl font-bold hover:text-emerald-400 transition-colors'>Relief giving - Providing relief</h3>
                            <p className='text-sm text-gray-300 mt-2 flex items-center gap-4'>
                                <span className='flex items-center bg-white/10 px-3 py-1 rounded-full'>
                                    <i className='far fa-clock mr-2'></i> 3.00pm - 4.00pm
                                </span>
                                <span className='flex items-center bg-white/10 px-3 py-1 rounded-full'>
                                    <i className='fas fa-map-marker-alt mr-2'></i> USA
                                </span>
                            </p>
                        </div>
                    </div>

                    {/* Event list */}
                    <div className="lg:w-1/3 space-y-4">
                        {events.map((event, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-gradient-to-r from-white/15 to-white/5 backdrop-blur-md p-4 rounded-xl hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20 hover:border-white/40 group"
                            >
                                <div className="bg-gradient-to-br from-emerald-500 to-green-600 text-white p-3 rounded-lg text-center w-20 shadow-lg group-hover:scale-105 transition-transform">
                                    <p className="text-xl font-bold">{event.date}</p>
                                    <p className="text-xs font-medium">{event.month}</p>
                                </div>
                                <div className="ml-4">
                                    <h4 className="text-lg font-semibold group-hover:text-emerald-300 transition-colors">{event.title}</h4>
                                    <p className="text-sm text-gray-200 flex items-center gap-3 mt-1">
                                        <span className="flex items-center"><i className='far fa-clock mr-1'></i> {event.time}</span>
                                        <span className="flex items-center"><i className='fas fa-map-marker-alt mr-1'></i> {event.location}</span>
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Enhanced decorative elements */}
                <div className="absolute top-0 left-0 w-full h-full opacity-30 pointer-events-none">
                    <div className="absolute top-10 left-10 w-40 h-40 rounded-full bg-emerald-300 blur-3xl animate-pulse"></div>
                    <div className="absolute bottom-10 right-10 w-40 h-40 rounded-full bg-teal-300 blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
                    <div className="absolute top-1/2 right-1/4 w-32 h-32 rounded-full bg-green-400 blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
                </div>
            </section>
        )
    }
}

export default Events