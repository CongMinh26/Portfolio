import { url } from 'inspector'
import React from 'react'
export const CTA = () => {
  return (
    <div className='cta'>
        <a href={require('../../assets/cv.pdf')} download className='btn'>Download CV</a>
        <a href='#' className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}
