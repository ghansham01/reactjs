import React from 'react'
import { Link } from 'react-router-dom'
import BlogDit from './BlogDit'


const blogs = [
    {
        id: 1,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog2.jpg',
        date: '21 Jan, 2024',
        author: 'Admin',
        title: 'Donate for nutrition less poor people',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 2,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog3.jpg',
        date: '22 Jan, 2024',
        author: 'Admin',
        title: 'Charity meetup in Berlin next year',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 3,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog4.jpg',
        date: '23 Jan, 2024',
        author: 'Admin',
        title: 'Donate for the poor people to help them',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 4,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog5.jpg',
        date: '24 Jan, 2024',
        author: 'Admin',
        title: 'Charity projects for over 10 million people',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 5,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog6.jpg',
        date: '25 Jan, 2024',
        author: 'Admin',
        title: 'Save the environment to save your life',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
    {
        id: 6,
        image: 'https://templates.hibootstrap.com/findo/default/assets/img/blog/blog6.jpg',
        date: '26 Jan, 2024',
        author: 'Admin',
        title: 'A world where love is pure and the cure',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    },
]

function Blog() {
    return (
        <>
            {/* Hero Section */}
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Blog</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> Blog
                    </p>
                </div>
            </section>

            {/* Blog Cards Section */}
            <section className="py-16 bg-gray-900">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-black rounded-lg shadow-lg overflow-hidden">
                            <img src={blog.image} alt={blog.title} className="w-full h-48 object-cover" />
                            <div className="p-6">
                                <p className="text-sm text-gray-100">📅 {blog.date} · ✍️ {blog.author}</p>
                                <h3 className="text-lg font-semibold mt-2 text-white"> 
                                    <Link to={`/BlogDit/${blog.id}`}>{blog.title}</Link>
                                </h3>
                                <p className="text-white text-sm mt-2">{blog.description}</p>
                                <a href="#" className="text-orange-500 font-semibold mt-4 inline-block">Read More</a>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination */}
                <div className="container mx-auto flex justify-center mt-8">
                    <button className="px-4 py-2 mx-1 border rounded-lg hover:bg-orange-500 text-white">Prev</button>
                    <button className="px-4 py-2 mx-1 border rounded-lg bg-orange-500 text-white">1</button>
                    <button className="px-4 py-2 mx-1 border rounded-lg hover:bg-orange-500 text-white">2</button>
                    <button className="px-4 py-2 mx-1 border rounded-lg hover:bg-orange-500 text-white">3</button>
                    <button className="px-4 py-2 mx-1 border rounded-lg hover:bg-orange-500 text-white">Next</button>
                </div>
            </section>
        </>
    )
}

export default Blog