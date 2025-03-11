import React from 'react'
import { useParams } from 'react-router'

function User(){
    const {userid}=useParams()
    return(
        <div className='bg-black , text-white,text-3xl
        '>user:{userid}</div>
    )
}

export default User