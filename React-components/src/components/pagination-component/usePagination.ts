import { useState } from "react"


export const usePagination = (data, pageCount = 10) => {
    const [currentPage, setCurrentPage] = useState(1)

    const totalPages = Math.ceil(data.length / pageCount)


    const startIndex = (currentPage - 1) * pageCount;
    const endIndex = startIndex + 10;
    const currentData = data.slice(startIndex, endIndex)
    // const currentData = data.slice(0, 10)

    const gotoPage = (page) => {
        setCurrentPage(page)
    }
    const nextPage = () => {
        setCurrentPage(prev => Math.min(prev + 1, totalPages))
    }
    const prevPage = () => {
        setCurrentPage(prev => Math.max(prev - 1, 1))
    }
    return {
        currentPage,
        totalPages,
        currentData,
        gotoPage,
        nextPage,
        prevPage


    }
}