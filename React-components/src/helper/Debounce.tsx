import React, { useEffect, useState } from 'react'

const Debounce = () => {
    const [ipVal, setIpVal] = useState('')
    const [debounceSearch, setDebounceSearch] = useState('')

    useEffect(() => {
        let timer = setTimeout(() => {
            setDebounceSearch(ipVal)
            console.log('triggered')
        }, 3000)

        return () => {
            clearTimeout(timer)
        }
    }, [ipVal])
    return (
        <div className='m-3'>Debounce
            <input className='bg-green-100 ' value={ipVal} onChange={(e) => setIpVal(e.target.value)} />
            {ipVal}
            <div>Debounced: {debounceSearch}</div>
        </div>
    )
}

export default Debounce