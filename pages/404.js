import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

const NotFound = () => {
    const router = useRouter()

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push('/')
        }, 5000)

        return () => clearTimeout(timer)
    }, [])

  return (
    <div className='flex flex-col items-center justify-center mt-60'>
        <h1 className='font-bold text-blue-600 text-9xl'>404</h1>
        <h6 className='text-5xl font-bold text-gray-600'>
            <span className='text-red-500'>Oops!</span> Page not found
        </h6>
        <p className='tetx-gray-500 mt-3'>The page you&apos;re looing for dosen&apos;t exist.</p>
        <Link href="/">
            <a className='bg-blue-100 text-blue-800 mt-5 font-semibold px-6 py-2 text-sm'>Go home</a>
        </Link>
    </div>
  )
}

export default NotFound