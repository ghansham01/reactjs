import React, { useState } from 'react'

function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1500));
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                phone: '',
                subject: '',
                message: ''
            });
        } catch (error) {
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div>
            {/* Hero Section */}
            <div
                className="relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center"
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg8.jpg')" }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="relative z-10">
                    <h1 className="text-3xl md:text-5xl font-bold">Contact</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <span className="text-gray-300">Home</span> <span className="mx-2">·</span> Contact
                    </p>
                </div>
            </div>

            {/* Contact Information */}
            <div className="container mx-auto py-10 text-center">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-orange-500 font-bold">Location:</h3>
                        <p>6B, Helvetica Street, Jordan</p>
                        <p>6A, North Street, Jordan</p>
                    </div>
                    <div>
                        <h3 className="text-orange-500 font-bold">Phone:</h3>
                        <p>+123-456-789</p>
                        <p>+528-658-956</p>
                    </div>
                    <div>
                        <h3 className="text-orange-500 font-bold">Email:</h3>
                        <p>hello@finda.com</p>
                        <p>info@finda.com</p>
                    </div>
                </div>
            </div>

            {/* Contact Form */}
            <div className="container mx-auto px-4 md:px-16">
                <h2 className="text-center text-2xl font-bold">Let's talk...!</h2>
                <p className="text-center text-gray-500 mb-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                <form onSubmit={handleSubmit} className="bg-white p-6 shadow-lg rounded-md">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Name"
                            className="border p-2 rounded w-full"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="border p-2 rounded w-full"
                            required
                        />
                    </div>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone"
                        className="border p-2 rounded w-full mt-4"
                        required
                    />
                    <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        placeholder="Subject"
                        className="border p-2 rounded w-full mt-4"
                        required
                    />
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Write message"
                        className="border p-2 rounded w-full mt-4 h-32"
                        required
                    ></textarea>
                    <div className="mt-4 flex items-center">
                        <input type="checkbox" id="terms" className="mr-2" />
                        <label htmlFor="terms" className="text-sm text-gray-500">
                            Accept <span className="text-orange-500">Terms & Conditions</span> And <span className="text-orange-500">Privacy Policy</span>
                        </label>
                    </div>
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className={`w-full bg-orange-500 text-white py-2 rounded mt-4 ${
                            isSubmitting ? 'opacity-50' : 'hover:bg-orange-600'
                        }`}
                    >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                    </button>
                </form>

                {submitStatus === 'success' && (
                    <p className="text-green-500 mt-2">Message sent successfully!</p>
                )}
                {submitStatus === 'error' && (
                    <p className="text-red-500 mt-2">Failed to send message. Please try again.</p>
                )}
            </div>

            {/* Google Map Section */}
            <div className="mt-10">
                <iframe
                    className="w-full h-[400px]"
                    src="https://www.google.com/maps/embed?..."
                    allowFullScreen
                    loading="lazy"
                ></iframe>
            </div>
        </div>
    )
}

export default Contact