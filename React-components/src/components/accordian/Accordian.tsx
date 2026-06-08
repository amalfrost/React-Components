import React, { useState } from 'react'
import { IoIosArrowDropdownCircle } from "react-icons/io";


const Accordian = () => {
    const [active, setActive] = useState(false)
    const [clickid, setId] = useState(0)
    const data = [{
        id: 1,
        title: "About",
        content: "this is content fo rthe about page"
    },
    {
        id: 2,
        title: "heading",
        content: "this is content fo rthe heading page page"
    },
    {
        id: 3,
        title: "Help",
        content: "this is content fo rthe Help page"
    }]
    function hanldeClick(id) {
        setId(id)
        if (id !== clickid) {
            // setA
            setActive(true)
        }
        else {

            setActive(!active)
        }

        console.log(data[id])
    }
    return (
        <div className='w-3xs' >
            {data.map((item) => (
                <div className='bg-blue-300' key={item.id}>

                    <div className='flex justify-between p-2 cursor-pointer' onClick={() => hanldeClick(item.id)} >{item.title} <span> <IoIosArrowDropdownCircle /></span>

                    </div>
                    {active && item.id === clickid && <div className='px-4' >{item.content}</div>}
                </div>
            ))}

        </div>
    )
}

export default Accordian