import { data24hr, dataAllTime } from "./data.json";

export async function fetch24hrUsersPages(items_per_page: number) {
    try {
        const totalPages = Math.ceil(data24hr.length / items_per_page);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch 24hr users.');
    }
}

export async function fetch24hrUsers(
    currentPage: number,
    items_per_page: number
) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
        const offset = (currentPage - 1) * items_per_page;
        const data = data24hr.sort((a, b) => b.volume - a.volume);
        return data.slice(offset, offset + items_per_page);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch 24hr users.');
    }
}

export async function fetchAllTimeUsersPages(items_per_page: number) {
    try {
        const totalPages = Math.ceil(dataAllTime.length / items_per_page);
        return totalPages;
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all time users.');
    }
}

export async function fetchAllTimeUsers(
    currentPage: number,
    items_per_page: number
) {
    await new Promise((resolve) => setTimeout(resolve, 2500));
    try {
        const offset = (currentPage - 1) * items_per_page;
        const data = dataAllTime.sort((a, b) => b.volume - a.volume);
        return data.slice(offset, offset + items_per_page);
    } catch (error) {
        console.error('Database Error:', error);
        throw new Error('Failed to fetch all time users.');
    }
}

