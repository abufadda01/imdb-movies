"use client"

import { useRouter } from 'next/navigation'
import React, { useState } from 'react'


const SearchBox = () => {

    const [search , setSearch] = useState()
    const router = useRouter()

    const handleSubmit = (e) => {
        e.preventDefault()
        router.push(`/search/${search}`)
    }


  return (
    <form onSubmit={handleSubmit} className='p-4 flex justify-between max-w-6xl mx-auto'>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Search keywords...' className='w-full h-14 rounded-md placeholder-gray-500 outline-none bg-transparent flex-1' />
        <button disabled={search === ""} className='bg-slate-500 px-4 py-1 rounded-lg disabled:text-gray-400 hover:bg-slate-300 text-white transition-all duration-300 cursor-pointer'>Search</button>
    </form>
  )
}

export default SearchBox