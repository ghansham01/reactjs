import React, { useState } from 'react'
import { Link } from 'react-router-dom'



function DonationForm() {
    const [from, setfrom] = useState("Select Mission")
    const [amount, setAmount] = useState(100)
    // handle the change of the page
    const handleChange = (e) => {
        setfrom(e.target.value)
    }
    // handele the amount change 
    const handleAmountChange = (e) => {
        const value = e.target.value
        if (value === '' || value === '0') {
            setAmount(0)
        } else {
            setAmount(parseInt(value))
        }
    }

    // Format amount with commas for Indian numbering system
    const formatAmount = (num) => {
        return num.toLocaleString('en-IN')
    }

    return (
        <>
            <section className='relative w-full h-[300px] md:h-[400px] flex items-center justify-center text-center text-white bg-cover bg-center'
                style={{ backgroundImage: "url('https://templates.hibootstrap.com/findo/default/assets/img/banner/title-bg1.jpg')" }}
            >
                <div className='absolute inset-0 bg-black bg-opacity-50'></div>
                <div className='relative z-10'>
                    <h1 className='text-3xl md:text-5xl font-bold'>Make a Donation</h1>
                    <p className="mt-2 text-sm md:text-base">
                        <Link to="/" className="text-gray-300 hover:text-white">Home</Link>
                        <span className="mx-2">·</span> Donation Form
                    </p>
                </div>
            </section>

            <section className="py-16 bg-gray-100 dark:bg-gray-900">
                <div className="max-w-3xl mx-auto p-6 bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                    <div className="space-y-6">
                        {/* Donation Form */}
                        <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 space-y-4">
                            <form className="space-y-4">
                                {/* Name */}
                                <input
                                    type="text"
                                    placeholder="Enter your name"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                />
                                {/* Email */}
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                />
                                {/* number section */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                        <img src="https://flagcdn.com/w20/in.png" alt="India" className="w-6" />
                                        <span className="text-gray-400 dark:text-gray-500">+91</span>
                                    </div>
                                    <input
                                        type="tel"
                                        placeholder="Mobile Number (10 digit)"
                                        className="w-full p-4 pl-24 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    />
                                </div>
                                {/* toggle of help */}
                                <select
                                    required
                                    value={from}
                                    onChange={handleChange}
                                    className="w-full p-4 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white"
                                >
                                    <option value="">Select Mission</option>
                                    <option value="11297">Break the Silence</option>
                                    <option value="4275">Save India's Strays</option>
                                    <option value="4274">End Elder Abuse</option>
                                    <option value="11039">Uplift India's Differently-Abled</option>
                                    <option value="4287">Every Child In School</option>
                                    <option value="4272">Save Our Gaumatas</option>
                                    <option value="4273">Meals Of Hope</option>
                                    <option value="5368">Feed Starving Sadhus</option>
                                </select>
                                {/* amount box */}
                                <div className="relative">
                                    <div className="absolute left-4 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                        <span className="text-gray-400 dark:text-gray-500">₹</span>
                                    </div>
                                    <input
                                        type="number"
                                        placeholder="Enter amount"
                                        value={amount}
                                        onChange={handleAmountChange}
                                        min="0"
                                        className="w-full p-4 pl-10 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500"
                                    />
                                </div>
                                {/* chickboxs */}
                                <div className="space-y-3">
                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                                        />
                                        <span className="text-gray-900 dark:text-white">Make my donation anonymous</span>
                                    </label>

                                    <label className="flex items-center gap-2 cursor-pointer">
                                        <input
                                            type="checkbox"
                                            defaultChecked
                                            className="w-5 h-5 text-orange-500 rounded focus:ring-orange-500 bg-gray-50 dark:bg-gray-700 border-gray-200 dark:border-gray-600"
                                        />
                                        <span className="text-gray-900 dark:text-white">I want to receive transaction and donation updates on WhatsApp</span>
                                    </label>
                                </div>
                                {/* A term and candistion */}
                                <p className="text-sm text-gray-500 dark:text-gray-400">
                                    By continuing, you are agreeing to{' '}
                                    <a href="#" className="text-orange-500 hover:underline">Terms of Use</a>
                                    {' '}and{' '}
                                    <a href="#" className="text-orange-500 hover:underline">Privacy Policy</a>
                                </p>
                                {/* amount cantinue buttan */}
                                <div className="flex items-center justify-between bg-gradient-to-r from-orange-500 to-red-500 p-4 rounded-lg text-white">
                                    <div className="text-xl font-bold">
                                        {amount ? `₹ ${formatAmount(amount)} / month` : 'Enter amount'}
                                    </div>
                                    <button
                                        type="submit"
                                        className="bg-white text-orange-500 px-8 py-2 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default DonationForm