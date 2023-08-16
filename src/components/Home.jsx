import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='max-w-[800px] m-[100px_auto_40px] text-center'>
      <h2 className='text-3xl mb-8'>Welcom To Mie Aceh👋😀</h2>
      <Link to="/base">
        <button className='py-3 px-8 mt-8 rounded-full border-[2px] font-light cursor-pointer opacity-70'>
          Pesan Mie-mu🚀
        </button>
      </Link>
    </div>
  )
}

export default Home