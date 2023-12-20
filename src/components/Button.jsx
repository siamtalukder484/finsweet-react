import React from 'react'

const Button = ({className, href ,title}) => {
  return (
    <>
        <a href={href} className={className} >{title}</a>
    </>
  )
}

export default Button