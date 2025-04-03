import React from 'react'

const Blog = [
    {
        id: 1,
        date: "21 Jan, 2024",
        author: "Admin",
        title: "Donate for nutrition less poor people",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Amet cupiditate sit ducimus dolor laudantium distinction",
        image: "https://templates.hibootstrap.com/findo/default/assets/img/blog/blog2.jpg",
    },
    {
        id: 2,
        date: "22 Jan, 2024",
        author: "Admin",
        title: "Charity meetup in Berline next year",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Amet cupiditate sit ducimus dolor laudantium distinction",
        image: "https://templates.hibootstrap.com/findo/default/assets/img/blog/blog1.jpg",
    },
    {
        id: 3,
        date: "23 Jan, 2024",
        author: "Admin",
        title: "Donate for the poor people to help them",
        description:
            "Lorem ipsum, dolor sit amet consectetur adipiscing elit. Amet cupiditate sit ducimus dolor laudantium distinction",
        image: "https://templates.hibootstrap.com/findo/default/assets/img/blog/blog3.jpg",
    },
]

function Blogs() {
    return (
        <section className='py-20 px-5 md:px-20 bg-gray-900'>
            <div className='text-center'>
                <p className='text-orange-500 text-sm'>Latest news & blog</p>
                <h2 className='text-3xl font-bold text-white'>Latest charity blog</h2>
                <p className='text-white mt-2'>
                    We exist for non-profits, social enterprises, community groups, activists,lorem politicians and individual citizens that are making.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
                {Blog.map(post =>(
                    <div key={post.id} className="bg-gray-950 rounded-lg overflow-hidden">
                        <div className="overflow-hidden">
                            <img 
                                src={post.image} 
                                alt={post.title} 
                                className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110" 
                            />
                        </div>
                        <div className="p-4">
                            <div className="flex items-center text-sm text-white mb-3">
                                <span className="text-orange-500">📅 {post.date}</span>
                                <span className="mx-2 flex items-center"><span className="text-orange-500">👤</span> By: {post.author}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-3">{post.title}</h3>
                            <p className="text-white mb-4">{post.description}</p>
                            <a href="#" className="text-orange-500 hover:text-orange-600">
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}


export default Blogs
