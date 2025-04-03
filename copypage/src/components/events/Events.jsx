import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const events = [
  {
    date: "04 Jan",
    title: "Fundraising for MQ",
    time: "2.00pm - 5.00pm",
    location: "Australia",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event1.jpg"
  },
  {
    date: "05 Jan",
    title: "Shout about it with us",
    time: "1.00pm - 4.00pm",
    location: "Canada",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event2.jpg"
  },
  {
    date: "06 Jan",
    title: "Relief giving - Providing relief",
    time: "3.00pm - 4.00pm",
    location: "USA",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event3.jpg"
  },
  {
    date: "07 Jan",
    title: "Volunteer meetup",
    time: "4.00pm - 5.00pm",
    location: "Israel",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event4.jpg"
  },
  {
    date: "08 Jan",
    title: "Cleaning events in Greece",
    time: "4.30pm - 6.00pm",
    location: "Denmark",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event5.jpg"
  },
  {
    date: "09 Jan",
    title: "Event for free clothing",
    time: "3.30pm - 5.30pm",
    location: "Russia",
    image: "https://templates.hibootstrap.com/findo/default/assets/img/event/event6.jpg"
  }
];


function Events() {
  const [page, setPage] = useState(1)
  const itemsPerPage = 6;
  const totalPages = Math.ceil(events.length / itemsPerPage);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setPage(newPage);
    }
  };

  return (
    <>
      <div
        className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
        style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg8.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-3xl md:text-5xl font-bold">Events</h1>
          <p className="mt-2 text-sm md:text-base">
            <span className="text-gray-300">Home</span> <span className="mx-2">·</span> Events
          </p>
        </div>
      </div>
      <div className="bg-gray-900 min-h-screen flex flex-col items-center p-10">
        <div className="grid grid-cols-1 w-5/6 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-full" style={{ height: '100%' }} >
          {events.slice((page - 1) * itemsPerPage, page * itemsPerPage).map((event, index) => (
            <div key={index} className="relative h-64 rounded-2xl overflow-hidden shadow-lg hover:transform hover:scale-105 transition-transform duration-300">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${event.image})`,
                }}
              />
              <div className="absolute inset-0 bg-black bg-opacity-50" ></div>

              <div className="relative h-full p-6 flex flex-col justify-between">
                <div className="absolute top-4 left-4 bg-white text-gray-900 px-4 py-2 rounded-lg">
                  <div className="font-bold">{event.date.split(" ")[0]}</div>
                  <div className="text-sm">{event.date.split(" ")[1]}</div>
                </div>

                <div className="mt-auto">
                  <Link to={`/event-details/${index}`} className='block'>
                    <h3 className="text-xl font-bold mb-3 text-white">
                      {event.title}
                    </h3>
                  </Link>
                  <div className="flex items-center text-gray-100 mb-2">
                    <span className="mr-2">🕒</span>
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center text-gray-100">
                    <span className="mr-2">📍</span>
                    <span>{event.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex gap-2 mt-8">
          <button
            onClick={() => handlePageChange(page - 1)}
            className="px-4 py-2 rounded-lg border border-gray-600 text-white hover:bg-orange-500 transition-colors"
            disabled={page === 1}
          >
            Prev
          </button>
          {[...Array(totalPages)].map((_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded-lg border border-gray-600 text-white transition-colors ${page === i + 1 ? 'bg-orange-500' : 'hover:bg-orange-500'
                }`}
            >
              {i + 1}
            </button>
          ))}
          <button
            onClick={() => handlePageChange(page + 1)}
            className="px-4 py-2 rounded-lg border border-gray-600 text-white hover:bg-orange-500 transition-colors"
            disabled={page === totalPages}>
            Next
          </button>
        </div>
      </div>
    </>
  )
}

export default Events