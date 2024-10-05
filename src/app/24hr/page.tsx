import { fetch24hrUsers, fetch24hrUsersPages } from '@/app/lib/data';
import DailyUsersTable from '../ui/users/daily-users-table';

export default async function DailyUsers() {
    const items_per_page = 7
    const totalPages = await fetch24hrUsersPages(items_per_page);
    const users = await fetch24hrUsers(1, items_per_page);

    return (
        <DailyUsersTable users={users} items_per_page={items_per_page} totalPages={totalPages} />
    );
}