import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
   
    const navigate = useNavigate()

    const handleClick = () => {
        navigate('/form')
    }

  return (
   <>
  <div  className='homepage'>
     <h2>Submit your details click bellow button</h2>
   <button onClick={handleClick}>Click here</button>
   </div>
   </>
  )
}

export default Home