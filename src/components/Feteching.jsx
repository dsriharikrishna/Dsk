import React from 'react'

const Feteching = () => {
  return (
    <div>
        <label htmlFor="">Name</label>
        <input type="text" placeholder='Placeholder' onChange={(e)=>console.log(e.target.value)}/>
    </div>
  )
}

export default Feteching
