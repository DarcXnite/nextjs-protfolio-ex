import React from 'react'
import Image from 'next/image'

export default function About() {
  return (
    <div className='flex flex-col items-center justify-center fade-in'>
      <Image
        src='/images/profile-pic.png'
        alt='profile-pic'
        width={280}
        height={280}
      />
      <p className='w-96'>
        I am a software engineer with a background in film & video, and
        hospitality.
      </p>
    </div>
  )
}
