import React, { useEffect, useReducer } from 'react'
import Card from './Card'
import { usePagination } from '../pagination-component/usePagination'
import Pagination from '../pagination-component/Pagination'

const CardStack = () => {
    const url = 'https://jsonplaceholder.typicode.com/comments'
    const initialState = {
        comments: [],
        loading: false,
        error: null
    }
    function reducer(state, action) {

        switch (action.type) {
            case "FETCH_START":
                return {
                    ...state,
                    loading: true,
                    error: null
                }
            case "FETCH_SUCCESS":
                // console.log(action.comments)
                return {
                    ...state,
                    comments: action.comments,
                    loading: false
                };
            case "FETCH_FAILURE":
                return {
                    loading: false,
                    error: action.payload
                };
            default:
                return state;
        }
    }

    const [data, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        async function fetchComments() {
            dispatch({ type: "FETCH_START" });
            try {
                const res = await fetch(url)
                const datares = await res.json()
                // console.log(datares)

                dispatch({
                    type: "FETCH_SUCCESS",
                    comments: datares
                })
            }
            catch (error) {
                dispatch({
                    type: "FETCH_FAILURE",
                    error: error
                })
            }
        }

        fetchComments()
    }, [])
    const {
        currentPage,
        totalPages,
        currentData,
        gotoPage
    } = usePagination(data.comments, 30)
    // console.log(data?.comments[0])
    // const [data,setData] = 
    return (
        // <div className='flex flex-wrap gap-2' >
        //     {data.loading ? 'loading ...' :
        //         data.comments.map(item => (

        //             <Card key={item.id} data={item} />
        //         ))
        //     }
        // </div>
        <>
            <div className="flex flex-wrap gap-2">
                {currentData.map((item) => (
                    <Card
                        key={item.id}
                        data={item}
                    />
                ))}
            </div>

            <Pagination
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={gotoPage}
            />
        </>
    )
}

export default CardStack