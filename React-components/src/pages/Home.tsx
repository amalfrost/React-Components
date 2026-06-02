import React from 'react'
import { Link } from 'react-router-dom'
import Debounce from '../helper/Debounce'
import PaginationView from '../components/pagination-component/PaginationView'

const Home = () => {
    return (
        <div className='flex m-6' >
            <Link className=' bg-gray-300 p-2 px-4  max-w-3xs  text-2xl text-blue-400 shadow-md shadow-blue-500/50 ' to={'/tabview'} >Tab view</Link>
            <Debounce />
            <PaginationView />
        </div>
    )
}

export default Home