import { useState } from 'react'

function App() {
  const [color, setcolor] = useState("black")
  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}></div>

      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 text-white'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-1 py-2 rounded'>
          <button onClick={() => setcolor("blue")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"blue"}} >blue</button>
          <button onClick={() => setcolor("red")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"red"}} >red</button>
          <button onClick={() => setcolor("Green")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Green"}} >Green</button>
          <button onClick={() => setcolor("yellow")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"Yellow"}} >Yellow</button>
          <button onClick={() => setcolor("dark-blue")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"dark-blue"}} >Dark blue</button>
          <button onClick={() => setcolor("orange")}
          className='outline-none px-4 rounded-full text-white shadow-lg' style={{backgroundColor:"orange"}} >orange</button>
        </div>
      </div>
    </>
  )
}
export default App
