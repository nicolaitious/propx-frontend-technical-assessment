'use client';

import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/outline';
import { generatePagination } from '@/app/lib/utils';
import { Dispatch, SetStateAction } from 'react';
import styles from './pagination.module.scss';

export default function Pagination({ currentPage, setCurrentPage, totalPages }: { currentPage: number, setCurrentPage: Dispatch<SetStateAction<number>>, totalPages: number }) {

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className={styles.pagination}>
      <PaginationArrow
        action="previous"
        onClick={() => setCurrentPage(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />
      <div className={styles.pageNumbers}>

        {allPages.map((page, index) => {

          let position: 'first' | 'last' | 'single' | 'middle' | undefined;

          if (index === 0) position = 'first';
          if (index === allPages.length - 1) position = 'last';
          if (allPages.length === 1) position = 'single';
          if (page === '...') position = 'middle';

          const key = page === '...' ? page + index : page

          return (
            <PaginationNumber
              key={key}
              page={page}
              position={position}
              isActive={currentPage === page}
              onClick={() => setCurrentPage(Number(page))}
            />
          );

        })}
      </div>
      <PaginationArrow
        action="next"
        onClick={() => setCurrentPage(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({
  page,
  onClick,
  isActive,
  position,
}: {
  page: string | number;
  onClick: () => void;
  position?: 'first' | 'last' | 'middle' | 'single';
  isActive: boolean;
}) {
  return isActive || position === 'middle' ? (
    <div>{page}</div>
  ) : (
    <button onClick={onClick}>
      {page}
    </button>
  );
}

function PaginationArrow({
  isDisabled,
  onClick,
  action
}: {
  isDisabled?: boolean;
  onClick: () => void;
  action: 'previous' | 'next',
}) {

  const icon =
    action === 'previous' ? (
      <ArrowLeftIcon />
    ) : (
      <ArrowRightIcon />
    );

  return isDisabled ? (
    <div>{icon}</div>
  ) : (
    <button onClick={onClick}>
      {icon}
    </button>
  );
}
