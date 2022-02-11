import React from 'react'

const Image = (props) => {
  return <img src={props.image} className="hover:animate-bounce" alt={props.name} />
}

export default Image