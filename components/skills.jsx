import React from 'react'
import Image from 'next/image'

export default function Skills() {
  return (
    <div>
      <h2>Skills</h2>
      <div className='flex flex-wrap items-center justify-center'>
        <Image
          src='/images/stack-logos/html5.png'
          alt='html5'
          width={85}
          height={80}
        />
        <Image
          src='/images/stack-logos/css3.png'
          alt='html5'
          width={95}
          height={90}
        />
        <Image
          src='/images/stack-logos/javascript.png'
          alt='html5'
          width={85}
          height={80}
        />
      </div>
    </div>
  )
}
