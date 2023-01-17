import React from 'react'

function Story({bg}) {
  return (
    <div className="story" style={{backgroundImage: `url(${bg})`}}>
        <img src={bg} alt="" className="design" />
    </div>
  )
}

export default Story