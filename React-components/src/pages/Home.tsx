import React from 'react'
import { Link } from 'react-router-dom'
import Wizard from '../components/wizard-component/Wizard'

const Home = () => {
    const LINK_STYLE = ' bg-gray-300 p-2 px-4  max-w-3xs  text-2xl text-blue-400 shadow-md shadow-blue-500/50 '
    return (
        <div className='flex m-6' >
            <Link className={LINK_STYLE} to={'/tabview'} >Tab view</Link>
            <Link className={LINK_STYLE} to={'/tree'} >Tree view</Link>
            <Wizard />
            {/* <Debounce />
            <PaginationView /> */}
            {/* <TreeComponent /> */}
        </div>
    )
}

export default Home