import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import type { TreeData } from '../../models/treeViewModel';

const TreeNode = ({ node }) => {

    const [expanded, setExpanded] = useState(false)

    function handleClick(e: Event, item: TreeData) {
        e?.stopPropagation()
        if (item.children?.length > 0)
            setExpanded(!expanded)
    }
    const TITLE_STYLE = 'bg-gray-800 p-2.5 text-[#9b9fa5] cursor-pointer '
    const ICON_STYLE = `transition-transform duration-200 ${expanded ? "rotate-90" : "rotate-0"}`
    return (
        <div className={`${TITLE_STYLE} ${expanded && 'text-[#dfdada]'}  `} onClick={(e) => handleClick(e, node)} >
            <div className='flex items-center' >
                {node.children && < IoIosArrowForward className={ICON_STYLE} />}
                {node.title}
            </div>

            {expanded && node.children?.map(child => (
                <div key={child.id} className='pl-2.5'>
                    <TreeNode
                        // key={child.id}
                        node={child}
                    />
                </div>
            ))}
        </div>
    )
}

export default TreeNode