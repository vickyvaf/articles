import React from 'react'

const Horizontal = (props) => {
  return (
    <div id="horizontal">
      {props.imgs.map((result, i) => {
        return (
          <div key={i} className='image-wrapper image-wrapper-1'>
            <img src={result} className='image image-1' alt='images'/>
          </div>
        )
      })}
    </div>
  )
}

export default Horizontal;