import React from 'react'
import { Link, useParams } from 'react-router-dom'

const blogs = [
    {
        id: 1,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-details5.jpg',
        date: '21 Jan, 2024',
        author: 'Admin',
        title: 'Treatment help donation for Alia Jesni who is in serious case of cancer',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.

It's a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.

There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.`,

    },
    {
        id: 2,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/event/event-details1.jpg',
        date: '22 Jan, 2024',
        author: 'Admin',
        title: 'Charity meetup in Berlin next year',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    // ... Add other blog posts here
];

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

const comments = [
    {
        id: 1,
        name: 'Marcel Proust',
        date: '04 July, 2024',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment1.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, saepe veniam id quo repellat consectetur architecto iste eius, voluptas ad velit atque. Voluptate quas labore sapiente praesentium, autem ullam esse.'
    },
    {
        id: 2,
        name: 'Jac Jacson',
        date: '05 July, 2024',
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-comment2.jpg',
        content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis, saepe veniam id quo repellat consectetur architecto iste eius, voluptas ad velit atque. Voluptate quas labore sapiente.'
    }
];

function BlogDit() {
    const { id } = useParams();
    const blog = blogs.find(blog => blog.id === Number(id)) || blogs[0];

    if (!blog) {
        return (
            <div className="min-h-screen bg-gray-900 flex items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-2xl font-bold mb-4">Blog post not found</h1>
                    <Link to="/blog" className="text-orange-500 hover:text-orange-400">Back to Blog</Link>
                </div>
            </div>
        );
    }

    return (
        <>
            {/* Hero Section */}
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Blog Details</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span>
                        <Link to="/blog" className="text-gray-300 hover:text-white">Blog</Link>
                        <span>Details</span>
                    </p>
                </div>
            </section>

            <div className="bg-gray-900 py-16">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <div className="bg-black rounded-lg overflow-hidden">
                            <div className="details-img">
                                <img src={blog.image} alt={blog.title} className="w-full h-[400px] object-cover" />
                                <div className="p-8">
                                    <ul className="flex items-center text-gray-400 text-sm space-x-6 mb-4">
                                        <li className="flex items-center">
                                            <i className="icofont-calendar mr-2"></i>
                                            {blog.date}
                                        </li>
                                        <li className="flex items-center">
                                            <i className="icofont-user-alt-3 mr-2"></i>
                                            By - <a href="#" className="text-orange-500 ml-1 hover:text-orange-400">{blog.author}</a>
                                        </li>
                                    </ul>
                                    <h2 className="text-2xl font-bold text-white mb-6">{blog.title}</h2>
                                    <p className="text-gray-300 mb-6">{blog.content}</p>

                                    {/* Additional Image with Text */}
                                    <div className="flex items-center gap-6 my-8">
                                        <div className="w-1/3">
                                            <img src="https://templates.hibootstrap.com/findo/default/assets/img/blog/blog-details5.jpg" alt="Details" className="rounded-lg w-full" />
                                        </div>
                                        <div className="w-2/3">
                                            <p className="text-gray-300">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam repellat quo saepe inventore quisquam voluptatum dignissimos quae quam magnam nesciunt ut recusandae accusantium doloribus, quos dicta? Nobis, provident. Corporis, ipsam.</p>
                                        </div>
                                    </div>

                                    {/* Blockquote */}
                                    <blockquote className="bg-gray-800 p-6 my-8 rounded-lg relative">
                                        <i className="icofont-quote-left text-3xl text-orange-500 absolute top-4 left-4"></i>
                                        <p className="text-gray-300 italic pl-12">
                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do this eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veiam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea codo consequat. Duis aute irure dolor.
                                        </p>
                                    </blockquote>

                                    {/* Two Column Images */}
                                    <div className="grid grid-cols-2 gap-4 my-8">
                                        <img src="https://templates.hibootstrap.com/findo/default/assets/img/blog/blog1.jpg" alt="Details" className="rounded-lg w-full" />
                                        <img src="https://templates.hibootstrap.com/findo/default/assets/img/blog/blog1.jpg" alt="Details" className="rounded-lg w-full" />
                                    </div>

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

                                    {/* Comments Section */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold text-white mb-6">Comments ({comments.length})</h3>
                                        <div className="space-y-8">
                                            {comments.map((comment) => (
                                                <div key={comment.id} className="flex gap-4">
                                                    <img 
                                                        src={comment.image} 
                                                        alt={comment.name} 
                                                        className="w-16 h-16 rounded-full object-cover"
                                                    />
                                                    <div>
                                                        <div className="flex items-center justify-between mb-2">
                                                            <h4 className="text-white font-semibold">{comment.name}</h4>
                                                            <span className="text-gray-400 text-sm">{comment.date}</span>
                                                        </div>
                                                        <p className="text-gray-300 mb-3">{comment.content}</p>
                                                        <a href="#" className="text-orange-500 hover:text-orange-400 text-sm">Reply</a>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Comment Form */}
                                    <div className="mt-12">
                                        <h3 className="text-xl font-bold text-white mb-6">Your comment</h3>
                                        <form className="space-y-6">
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                <div className="relative">
                                                    <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                        <i className="icofont-user-alt-3"></i>
                                                    </label>
                                                    <input 
                                                        type="text" 
                                                        placeholder="Name" 
                                                        className="w-full bg-gray-800 text-white p-3 pl-10 rounded"
                                                    />
                                                </div>
                                                <div className="relative">
                                                    <label className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
                                                        <i className="icofont-ui-email"></i>
                                                    </label>
                                                    <input 
                                                        type="email" 
                                                        placeholder="Email" 
                                                        className="w-full bg-gray-800 text-white p-3 pl-10 rounded"
                                                    />
                                                </div>
                                            </div>
                                            <div className="relative">
                                                <label className="absolute left-3 top-6 text-gray-400">
                                                    <i className="icofont-comment"></i>
                                                </label>
                                                <textarea 
                                                    rows="8" 
                                                    placeholder="Write comment" 
                                                    className="w-full bg-gray-800 text-white p-3 pl-10 rounded"
                                                ></textarea>
                                            </div>
                                            <button 
                                                type="submit" 
                                                className="bg-orange-500 text-white px-8 py-3 rounded font-semibold hover:bg-orange-600 transition-colors"
                                            >
                                                Post A Comment
                                            </button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
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

                        {/* Admin Widget */}
                        <div className="bg-black p-6 rounded-lg text-center">
                            <img 
                                src="assets/img/blog/admin.jpg" 
                                alt="Admin" 
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                            <h4 className="text-white text-xl font-semibold">Tom Henry</h4>
                            <span className="text-gray-400">Admin</span>
                            <ul className="flex justify-center space-x-4 mt-4">
                                {['facebook', 'twitter', 'youtube-play', 'instagram'].map((social) => (
                                    <li key={social}>
                                        <a 
                                            href={`https://www.${social}.com/`} 
                                            target="_blank" 
                                            className="text-gray-400 hover:text-orange-500 transition-colors"
                                        >
                                            <i className={`icofont-${social}`}></i>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Popular Posts */}
                        <div className="bg-black p-6 rounded-lg">
                            <h3 className="text-xl font-bold text-white mb-6">Popular Post</h3>
                            <div className="space-y-6">
                                {popularPosts.map((post) => (
                                    <div key={post.id} className="flex gap-4">
                                        <img 
                                            src={post.image} 
                                            alt="Details" 
                                            className="w-20 h-20 object-cover rounded"
                                        />
                                        <div>
                                            <h4 className="text-white hover:text-orange-500 transition-colors">
                                                <Link to={`/blog-detail/${post.id}`}>{post.title}</Link>
                                            </h4>
                                            <p className="text-gray-400 text-sm">
                                                By - <a href="#" className="text-orange-500 hover:text-orange-600">{post.author}</a>
                                            </p>
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
        </>
    )
}

export default BlogDit