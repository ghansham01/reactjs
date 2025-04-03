import React from 'react'
import { Link } from 'react-router-dom';

const instagramPosts = [
    { id: 1, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
    { id: 2, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
    { id: 3, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
    { id: 4, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
    { id: 5, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
    { id: 6, image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/instagram5.jpg' },
];

const categories = [
    { name: 'Education', count: 10 },
    { name: 'Medical', count: 25 },
    { name: 'Food & Water', count: 14 },
    { name: 'National Charity', count: 2 },
    { name: 'Cloth', count: 4 }
];

const eventInfo = {
    organizer: 'Charity Society',
    start: '09 July, 2024',
    finish: '10 July, 2024',
    location: '6B, Helvetica street, Jordan',
    phone: '+123-456-789',
    email: 'hello@findo.com'
};

function EventsDit() {
    return (
        <>
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Events Details</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> Events Details
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-black rounded-lg overflow-hidden">
                                <img 
                                    src="https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg" 
                                    alt="Fund collection" 
                                    className="w-full h-auto"
                                />
                                <div className="p-6">
                                    <h2 className="text-2xl font-bold text-white mb-4">
                                        Fund collection for cyclone effected people in Australia, fundraising donkey basketball
                                    </h2>
                                    <p className="text-gray-100 mb-4" >
                                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                                    </p>
                                    <ul className="space-y-2 text-gray-100 mb-4">
                                        <li>• Lorem ipsum is simply dummy text of the printing and typesetting industry</li>
                                        <li>• It is a long established fact that a reader will be distracted by the readable</li>
                                        <li>• Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                                        <li>• There are many variations of passages of Lorem Ipsum available</li>
                                        <li>• The standard chunk of Lorem Ipsum used since the 1500s is reproduced</li>
                                    </ul>
                                    <p className="text-gray-100">
                                        There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look
                                    </p>
                                    <br />
                                    <p className="text-gray-100">
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi error beatae, illum sint dolorem eaque dolore porro, facilis hic a facere aliquid quo, rerum accusantium saepe. Sit rerum eum beatae?
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-8">
                            {/* Event Information */}
                            <div className="bg-black p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-6">Event Information</h3>
                                <ul className="space-y-4">
                                    <li className="flex justify-between text-gray-300">
                                        <span>Organizer:</span>
                                        <span>{eventInfo.organizer}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-300">
                                        <span>Start:</span>
                                        <span>{eventInfo.start}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-300">
                                        <span>Finish:</span>
                                        <span>{eventInfo.finish}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-300">
                                        <span>Location:</span>
                                        <span>{eventInfo.location}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-300">
                                        <span>Phone:</span>
                                        <span>{eventInfo.phone}</span>
                                    </li>
                                    <li className="flex justify-between text-gray-300">
                                        <span>Email:</span>
                                        <span>{eventInfo.email}</span>
                                    </li>
                                </ul>
                            </div>

                            {/* Search Widget */}
                            <div className="bg-black p-6 rounded-lg">
                                <form className="relative">
                                    <input 
                                        type="text" 
                                        placeholder="Search..." 
                                        className="w-full bg-gray-800 text-white p-3 pr-12 rounded"
                                    />
                                    <button 
                                        type="submit" 
                                        className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500 hover:text-orange-600"
                                    >
                                        <i className="icofont-search-1"></i>
                                    </button>
                                </form>
                            </div>

                            {/* Categories */}
                            <div className="bg-black p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-6">Categories</h3>
                                <ul className="space-y-3">
                                    {categories.map((category) => (
                                        <li key={category.name}>
                                            <a 
                                                href="#" 
                                                className="text-gray-300 hover:text-orange-500 transition-colors flex justify-between items-center"
                                            >
                                                <span>{category.name}</span>
                                                <span>({category.count})</span>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Instagram Posts */}
                            <div className="bg-black p-6 rounded-lg">
                                <h3 className="text-xl font-bold text-white mb-6">Instagram post</h3>
                                <div className="grid grid-cols-3 gap-2">
                                    {instagramPosts.map((post) => (
                                        <div key={post.id} className="relative group">
                                            <img 
                                                src={post.image} 
                                                alt="Instagram" 
                                                className="w-full h-24 object-cover rounded"
                                            />
                                            <a 
                                                href="#" 
                                                className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                                            >
                                                <i className="icofont-instagram text-white text-2xl"></i>
                                            </a>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default EventsDit