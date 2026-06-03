import React from 'react'
import TreeNode from './TreeNode'

const TreeComponent = ({ treeData }) => {

    return (
        <div className='w-1/3' >
            <div>
                {treeData.map((node) => (
                    <TreeNode
                        key={node.id}
                        node={node}
                    />
                ))}
            </div>
        </div>
    )
}

export default TreeComponent