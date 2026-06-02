import React from 'react'
import Pagination from './Pagination';
import { usePagination } from './usePagination';

const PaginationView = () => {
    const users = Array.from(
        { length: 50 },
        (_, i) => ({
            id: i + 1,
            name: `User ${i + 1}`,
        })
    );
    const { currentPage,
        totalPages,
        currentData,
        gotoPage,
        nextPage,
        prevPage } = usePagination(users, 10)

    return (
        <div>
            {currentData.map((user) => (
                <div key={user.id}>
                    {user.name}
                </div>
            ))}
            <Pagination currentPage={currentPage} onPageChange={gotoPage} totalPages={totalPages} />
        </div>
    )
}

export default PaginationView