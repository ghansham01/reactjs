import React from 'react'

function Squer({value, onClick}){
    return(
        <button
            className="w-16 h-16 flex items-center justify-center text-2xl font-bold text-blue-600 bg-red-100 border-2 border-orange-800 rounded-lg shadow hover:bg-orange-200 transition-transform duration-200 focus:outline-none focus:ring-2 focus:ring-purple-400"
            onClick={onClick}
        >
            {value}
        </button>
    )
}

export default Squer;