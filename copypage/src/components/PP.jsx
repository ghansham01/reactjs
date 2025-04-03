import React from 'react'
import { Link } from 'react-router-dom'

function PP() {
    return (
        <>
            {/* Hero Section */}
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}>
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Privacy Policy</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> Privacy Policy
                    </p>
                </div>
            </section>

            <section className="py-16 px-4 md:px-8 lg:px-16">
                <div className="max-w-4xl mx-auto space-y-10">
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">1 - Agreement of user</h3>
                        <p className="text-gray-700">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas porro amet consequuntur in voluptatum perspiciatis, nostrum deserunt quos accusamus, eos optio recusandae eius facilis voluptatibus expedita numquam eaque praesentium laboriosam.</p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">2 - Access and use of the site</h3>
                        <ul className="space-y-2 text-gray-700">
                            <li>• Lorem Ipsum is simply dummy text of the printing and typesetting industry</li>
                            <li>• It is a long established fact that a reader will be distracted by the readable</li>
                            <li>• Contrary to popular belief, Lorem Ipsum is not simply random text</li>
                            <li>• There are many variations of passages of Lorem Ipsum available</li>
                            <li>• The standard chunk of Lorem Ipsum used since the 1500s is reproduced</li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">3 - Copyright infringement</h3>
                        <p className="text-gray-700">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.</p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">4 - Access and interference</h3>
                        <p className="text-gray-700">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum. But the majority have suffered alteration in some form, by injected humour.</p>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">5 - Limitation of liability</h3>
                        <p className="text-gray-700">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default PP