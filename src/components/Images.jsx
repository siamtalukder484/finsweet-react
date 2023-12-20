import React from 'react'

const Images = ({className,source,alt}) => {
  return (
    <>
        <img className={className} src={source} alt={alt} />
    </>
  )
}

export default Images