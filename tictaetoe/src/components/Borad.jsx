import React from 'react'
import Squer from './Squer'

function Borad({ squares, onClick }) {
  return (
    <div className="grid grid-cols-3 gap-3 bg-white p-6 rounded-lg shadow-lg">
      {squares.map((val, i) => (
        <Squer key={i} value={val} onClick={() => onClick(i)} />
      ))}
    </div>
  )
}

export default Borad