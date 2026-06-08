import React from 'react'
import { Link } from 'react-router-dom'


const Home = () => {

    const LINK_STYLE = ' bg-gray-300 p-2 px-4  max-w-3xs  text-2xl text-blue-400 shadow-md shadow-blue-500/50 '
    return (
        <div className='flex m-6 flex-wrap ' >
            <Link className={LINK_STYLE} to={'/tabview'} >Tab view</Link>
            <Link className={LINK_STYLE} to={'/tree'} >Tree view</Link>
            <Link className={LINK_STYLE} to={'/wizard'} >Wizard</Link>
            <Link className={LINK_STYLE} to={'/cards'} >cards</Link>
            {/* <Wizard /> */}
            {/* <Debounce />
            <PaginationView /> */}
            {/* <TreeComponent /> */}
            {/* <UseMemoComponent /> */}
            {/* <Accordian /> */}
            {/* <CardStack /> */}
        </div>
    )
}

export default Home