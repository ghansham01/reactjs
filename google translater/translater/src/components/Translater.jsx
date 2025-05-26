import React, { useState } from 'react'

function Translater() {
    const [inputtext, setinputtext] = useState('')
    const [Translate, setTranslate] = useState('')
  return (
    <>
        <div className='justify-center mx-auto p-5'>
            <h1> text Translaterrr....</h1>
            <textarea className='w-full' value={inputtext} onChange={(e)=> setinputtext(e.target.value)}/>
            <select name="" id="">
                <option value=""></option>
                <option value=""></option>
                <option value=""></option>
            </select>
            <button>
                Translate
            </button>

            <div>
                {Translate}
            </div>
        </div>
    </>
  )
}

export default Translater