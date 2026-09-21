import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='bg-red-600 absolute z-10 p-30 translate-x-1/2 translate-y-1/2 rounded-4xl'>
      <h2 className='text-5xl font-bold text-white'>Not Found</h2>
      <p className='text-3xl'>Could not find requested resource</p>
      <Link href="/">Return Home</Link>
    </div>
  )
}