import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Donate = {
    methods: [
        { id: 1, name: 'PayPal', icon: 'icofont-paypal' },
        { id: 2, name: 'Debit Card', icon: 'icofont-credit-card' },
        { id: 3, name: 'Credit Card', icon: 'icofont-credit-card' },
        { id: 4, name: 'Other', icon: 'icofont-bank' }
    ]
};

const instagramPosts = [
    { id: 1, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
    { id: 2, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
    { id: 3, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
    { id: 4, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
    { id: 5, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
    { id: 6, image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg' },
];

const archives = [
    'January 2024',
    'May 2023',
    'April 2023',
    'June 2023'
];

const categories = [
    { name: 'Education', count: 10 },
    { name: 'Medical', count: 25 },
    { name: 'Food & Water', count: 14 },
    { name: 'National Charity', count: 2 },
    { name: 'Cloth', count: 4 }
];

const popularPosts = [
    {
        id: 1,
        title: 'Donate for nutrition less poor people',
        author: 'Admin',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment2.jpg'
    },
    {
        id: 2,
        title: 'Charity meetup in Berlin next year',
        author: 'Admin',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment2.jpg'
    },
    {
        id: 3,
        title: 'Donate for poor people for food & water',
        author: 'Admin',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment2.jpg'
    },
    {
        id: 4,
        title: 'Little Sanjana joined in a charity to help people',
        author: 'Admin',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment2.jpg'
    }
];

function DontionDit() {
    const { id } = useParams();

    return (
        <>
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Donation Details</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span>
                        <Link to="/blog" className="text-gray-300 hover:text-white">Donation</Link>
                        <span>Details</span>
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-900">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <div className="bg-gray-800 rounded-lg p-6">
                                <img
                                    src="https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg"
                                    alt="Donation Campaign"
                                    className="w-full rounded-lg mb-6"
                                />
                                <div className="text-gray-300">
                                    <ul className="flex items-center text-gray-400 text-sm space-x-6 mb-4">
                                        <li className="flex items-center">
                                            <i className="icofont-calendar mr-2"></i>
                                            January 20, 2024
                                        </li>
                                        <li className="flex items-center">
                                            <i className="icofont-user-alt-3 mr-2"></i>
                                            By - <a href="#" className="text-orange-500 ml-1 hover:text-orange-400">Admin</a>
                                        </li>
                                    </ul>
                                    <h3 className="text-2xl font-bold text-white mb-4">Treatment help donation for Alla Jesni who is in serious case of cancer</h3>
                                    <p className="mb-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                                    {/* Share and Tags */}
                                    <div className="flex flex-wrap justify-between items-center py-6 border-t border-gray-700">
                                        <div className="flex items-center space-x-4">
                                            <span className="text-gray-400">Share:</span>
                                            <div className="flex space-x-3">
                                                {['facebook', 'twitter', 'youtube-play', 'instagram'].map((social) => (
                                                    <a
                                                        key={social}
                                                        href="#"
                                                        target="_blank"
                                                        className="text-gray-400 hover:text-orange-500 transition-colors"
                                                    >
                                                        <i className={`icofont-${social}`}></i>
                                                    </a>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex items-center space-x-3">
                                            <span className="text-gray-400">Tags:</span>
                                            {['Donation', 'Food', 'Help'].map((tag) => (
                                                <a
                                                    key={tag}
                                                    href="#"
                                                    className="text-orange-500 hover:text-orange-400"
                                                >
                                                    #{tag}
                                                </a>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Donation Methods */}
                                    <div className="mt-8">
                                        <h4 className="text-xl font-semibold text-white mb-4">Select payment method</h4>
                                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                            {Donate.methods.map(method => (
                                                <button
                                                    key={method.id}
                                                    className="flex items-center justify-center gap-2 p-3 rounded-lg bg-gray-700 hover:bg-orange-500 transition-colors"
                                                >
                                                    <i className={method.icon}></i>
                                                    <span>{method.name}</span>
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Donation Form */}
                                    <div className="mt-8">
                                        <form className="space-y-4">
                                            <input
                                                type="text"
                                                placeholder="Enter your name"
                                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                            <input
                                                type="email"
                                                placeholder="Enter your email"
                                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                            <input
                                                type="number"
                                                placeholder="Amount"
                                                className="w-full p-3 bg-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                                            />
                                            <button
                                                type="submit"
                                                className="w-full bg-orange-500 text-white py-3 rounded-lg hover:bg-orange-600 transition-colors"
                                            >
                                                Donate Now
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Sidebar */}
                        <div className="lg:col-span-1">

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


                            {/* Popular Posts */}
                            <div className="bg-gray-800 rounded-lg p-6 mb-8">
                                <h3 className="text-xl font-semibold text-white mb-4">Popular Posts</h3>
                                <div className="space-y-4">
                                    {popularPosts.map(post => (
                                        <div key={post.id} className="flex gap-4">
                                            <img src={post.image} alt={post.title} className="w-20 h-20 rounded-lg object-cover" />
                                            <div>
                                                <h4 className="text-white hover:text-orange-500 transition-colors">
                                                    <Link to={`/blog/${post.id}`}>{post.title}</Link>
                                                </h4>
                                                <p className="text-sm text-gray-400">By {post.author}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
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

export default DontionDit