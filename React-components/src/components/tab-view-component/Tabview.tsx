import React, { useState } from 'react'
import type { TabViewProps } from '../../models/tabViewModel'

const Tabview = ({ contents }: TabViewProps) => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const titleStyle = 'p-2 border-2 border-[#d7cfcf] cursor-pointer bg-amber-100 w-full text-center hover:bg-amber-200'
    return (
        <div className='text-center w-1/2 mx-auto' >Tabview
            <div className='flex w-full justify-around gap-2 '>
                {contents.map((item, index) => (
                    <div onClick={() => setCurrentIndex(index)}
                        className={titleStyle} key={item.id} >{item.title}
                    </div>
                ))}
            </div>
            <div className={`${titleStyle} mt-2 `} >{contents[currentIndex].content}</div>
        </div>
    )
}

export default Tabview