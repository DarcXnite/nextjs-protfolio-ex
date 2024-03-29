import Link from 'next/link'
import { useState } from 'react'

export default function Navbar() {
  const [repoNav, setRepoNav] = useState(false)

  return (
    <nav className='bg-vanilla border-gray-200 px-2 sm:px-4 py-2.5 dark:bg-vanilla relative'>
      <div className='flex flex-wrap justify-between items-center mx-auto'>
        <Link href='/' className='flex items-center'>
          <img
            src='/davislogo3.png'
            className='mr-3 h-14 w-16 sm:h-14'
            alt='Logo'
          />
          {/* <span className='self-center text-xl font-semibold whitespace-nowrap dark:text-white'>
            Flowbite
          </span> */}
        </Link>
        <button
          data-collapse-toggle='mobile-menu'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-crimson dark:focus:ring-gray-600'
          aria-controls='mobile-menu'
          aria-expanded='false'
          onClick={() => setRepoNav(!repoNav)}
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clipRule='evenodd'
            ></path>
          </svg>
          <svg
            className='hidden w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto static ${
            repoNav ? null : 'hidden'
          }`}
          id='mobile-menu'
        >
          <ul className='flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium'>
            <li>
              <Link
                href='/'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-crimson md:p-0 dark:text-dkGray md:dark:hover:text-crimson dark:hover:bg-gray-700 dark:hover:text-crimson md:dark:hover:bg-transparent dark:border-gray-700'
                aria-current='page'
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-crimson md:p-0 dark:text-dkGray md:dark:hover:text-crimson dark:hover:bg-gray-700 dark:hover:text-crimson md:dark:hover:bg-transparent dark:border-gray-700'
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-crimson md:p-0 dark:text-dkGray md:dark:hover:text-crimson dark:hover:bg-gray-700 dark:hover:text-crimson md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Skills
              </Link>
            </li>
            <li>
              <a
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-crimson md:p-0 dark:text-dkGray md:dark:hover:text-crimson dark:hover:bg-gray-700 dark:hover:text-crimson md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Projects
              </a>
            </li>
            <li>
              <Link
                href='#'
                className='block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-crimson md:p-0 dark:text-dkGray md:dark:hover:text-crimson dark:hover:bg-gray-700 dark:hover:text-crimson md:dark:hover:bg-transparent dark:border-gray-700'
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
