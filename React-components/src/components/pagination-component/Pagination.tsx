import React from 'react'
import { usePagination } from './usePagination'

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
    const totalPagesCount = Array.from({ length: totalPages })
    console.log(totalPagesCount)
    const btnStyles = ''
    return (
        <div>

            <button
                disabled={currentPage === 1}
                onClick={() => onPageChange(currentPage - 1)} >  Prev</button>
            {totalPagesCount.map((_, index) => (
                <button
                    key={index + 1}
                    onClick={() => onPageChange(index + 1)}
                    style={{
                        fontWeight:
                            currentPage === index + 1
                                ? "bold"
                                : "normal",
                    }}
                >
                    {index + 1}
                </button>
            ))}
            <button
                disabled={currentPage === totalPages}
                onClick={() => onPageChange(currentPage + 1)}>  next</button>
        </div>
    )
}

export default Pagination