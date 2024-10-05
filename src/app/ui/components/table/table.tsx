import styles from './table.module.scss';
import Pagination from '../pagination/pagination';
import { useEffect, useRef, useState } from 'react';
import React from 'react';

export default function Table<T>({
    Title,
    MobileComponent,
    HeaderComponent,
    BodyComponent,
    MobileTableRowsSkeleton,
    TableRowsSkeleton,
    initialData,
    totalPages,
    items_per_page,
    fetchFunction,
}: {
    Title: React.ComponentType;
    MobileComponent?: React.ComponentType<{ data: T[], offset: number }>;
    HeaderComponent: React.ComponentType;
    BodyComponent: React.ComponentType<{ data: T[], offset: number }>;
    MobileTableRowsSkeleton?: React.ComponentType;
    TableRowsSkeleton?: React.ComponentType;
    initialData: T[];
    totalPages: number;
    items_per_page: number;
    fetchFunction: Function;
}) {
    const [data, setData] = useState<T[]>(initialData)
    const [currentPage, setCurrentPage] = useState<number>(1)
    const [offset, setOffset] = useState<number>(0)
    const firstRender = useRef(true)

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!firstRender.current) {
                    setData([])
                    await fetchFunction(currentPage, items_per_page).then(setData);
                    setOffset((currentPage - 1) * items_per_page)
                }
                firstRender.current = false
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [currentPage])

    return (
        <div className={styles.tableBackground}>
            <div className={styles.title}>
                <Title />
            </div>
            {MobileComponent ? (
                <div className="mobileOnly">
                    {data.length ?
                        <MobileComponent data={data} offset={offset} /> :
                        (MobileTableRowsSkeleton ? <MobileTableRowsSkeleton /> : <Loading />)}
                </div>
            ) : null}
            <div className={`${MobileComponent ? 'desktopOnly' : null}`}>
                <table cellSpacing={0} cellPadding={'3rem'}>
                    <thead>
                        <HeaderComponent />
                    </thead>
                    <tbody>
                        {data.length ?
                            <BodyComponent data={data} offset={offset} /> :
                            (TableRowsSkeleton ? <TableRowsSkeleton /> : <Loading />)}
                    </tbody>
                </table>
            </div>
            <Pagination currentPage={currentPage} setCurrentPage={setCurrentPage} totalPages={totalPages} />
        </div >
    );
}

const Loading = () => (
    <div className={styles.loading}><h2>Loading...</h2></div>
)