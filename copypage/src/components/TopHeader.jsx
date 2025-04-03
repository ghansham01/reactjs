import React from 'react'
import { Icons } from './../utils/icons'

function TopHeader() {
    return (
        <div className="bg-gray-900 text-white py-2">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-3 md:mb-0">
                        <span className="flex items-center text-sm">
                            <Icons.Location className="w-4 h-4 mr-2 text-orange-500" />
                            6B, Helvetica street, Jordan
                        </span>
                        <span className="flex items-center text-sm">
                            <Icons.Phone className="w-4 h-4 mr-2 text-orange-500" />
                            +0123-456-987
                        </span>
                    </div>
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center">
                            <span className="text-sm mr-2">Follow Us:</span>
                            <div className="flex space-x-3">
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <Icons.Facebook className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <Icons.Twitter className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <Icons.Youtube className="w-4 h-4" />
                                </a>
                                <a href="#" className="w-8 h-8 rounded-full bg-gray-800 hover:bg-orange-500 flex items-center justify-center transition-colors">
                                    <Icons.Instagram className="w-4 h-4" />
                                </a>
                            </div>
                        </div>
                        <div className="flex items-center cursor-pointer hover:text-orange-500 transition-colors">
                            <span className="text-sm">English</span>
                            <Icons.Chevrondown className="w-4 h-4 ml-1" />
                        </div>
                        <div className="cursor-pointer hover:text-orange-500 transition-colors">
                            <Icons.Search className="w-4 h-4" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TopHeader