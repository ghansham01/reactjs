import React from 'react'

function Biling() {
    return (
        <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center mb-6">Billing Details</h1>
                <div className="space-y-4">
                    <div className='text-balance'>
                        <p className='flex justify-center'>this page has the the canvering details</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Biling