import React, { useMemo, useState } from 'react'

const UseMemoComponent = () => {
    const [text, setText] = useState('')
    const [count, setCount] = useState(0)


    function generatePipe(inp) {
        let out = []
        for (let item of inp) {
            // console.log(item, typeof item, isNaN(item))
            if (!isNaN(item)) {
                let i = item
                while (i > 0) {

                    out.push('|')
                    i = i - 1
                }
            }
            else {
                out.push(item)
            }



        }
        console.log(...out)
    }
    // console.log(generatePipe("1a2b3"));

    const arr1 = [1, 2, 6, 2]
    const arr2 = [4, 1, 2, 2]

    function findCommon(arr1, arr2) {
        let count = {}
        let dups = []
        for (let item of arr1) {
            count[item] = (count[item] ?? 0) + 1
        }
        // console.log(count)

        for (let item of arr2) {
            if (count[item]) {
                dups.push(item)
            }
        }
        return (dups)

    }
    console.log(findCommon(arr1, arr2)
    )
    const expensiveCalculation = useMemo(() => {
        console.log("Calculating...");
        let total = 0;

        for (let i = 0; i < 100; i++) {
            total += i;
        }

        return total;

    }, [count])

    function handleClick() {
        setCount(count + 1)
    }
    console.log(expensiveCalculation)
    // const result = expensiveCalculation();
    return (
        <div>
            <input onChange={(e) => setText(e.target.value)} />
            {count}
            <button onClick={handleClick} >+</button>
        </div>
    )
}

export default UseMemoComponent