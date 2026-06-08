import React from 'react'

const Card = ({ data }) => {

    let myObj = {
        a: 100,
        b: 200,
        c: 'hellow'
    }
    function multiplyObj(obj) {
        for (let key in obj) {
            if (typeof key === 'number') {
                obj[key] = obj[key] * 2
            }
        }
        return obj
    }

    console.log(multiplyObj(myObj))
    // console.log(data[0])
    return (
        <div className='bg-blue-200 w-[250px] text-center p-2 flex flex-col justify-between items-center ' >
            <h3 className='text-xl ' >{data?.name}</h3>
            <p className='text-sm' >{data?.body}</p>
            <p>{data?.email}</p>
        </div>
    )
}

export default Card