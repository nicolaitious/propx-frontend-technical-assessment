import { fetchAllTimeUsers, fetchAllTimeUsersPages } from '@/app/lib/data';
import AllTimeUsersTable from '../ui/users/all-time-users-table';

export default async function AllTimeUsers() {
    const items_per_page = 7
    const totalPages = await fetchAllTimeUsersPages(items_per_page);
    const users = await fetchAllTimeUsers(1, items_per_page);

    return (
        <AllTimeUsersTable users={users} items_per_page={items_per_page} totalPages={totalPages} />
    );
}