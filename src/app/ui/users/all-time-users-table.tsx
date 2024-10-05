'use client'
import Table from '@/app/ui/components/table/table';
import { fetchAllTimeUsers } from '@/app/lib/data';
import { TrophyIcon } from '@heroicons/react/24/solid';
import TableHeader from './table/table-header';
import TableBody from './table/table-body';
import TableMobile from './table/table-mobile';
import { User } from '@/app/lib/definitions';
import styles from './all-time-users-table.module.scss'
import { UsersMobileTableRowsSkeleton, UsersTableRowsSkeleton } from '../skeletons'

const title = () => (
    <>
        <TrophyIcon /><h1>Top Users by <span>All-Time</span> volume</h1>
    </>
)

export default function AllTimeUsersTable({
    users,
    totalPages,
    items_per_page,
}: {
    users: User[];
    totalPages: number;
    items_per_page: number;
}) {

    return (
        <div className={styles.tableWrapper}>
            <Table Title={title} MobileComponent={TableMobile} HeaderComponent={TableHeader} BodyComponent={TableBody}
                MobileTableRowsSkeleton={UsersMobileTableRowsSkeleton} TableRowsSkeleton={UsersTableRowsSkeleton}
                initialData={users} fetchFunction={fetchAllTimeUsers} items_per_page={items_per_page} totalPages={totalPages} />
        </div>
    );
}

