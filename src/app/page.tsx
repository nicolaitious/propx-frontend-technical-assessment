import styles from "./page.module.css";
import DailyUsers from "./24hr/page";
import AllTimeUsers from "./all-time/page";
import { Suspense } from "react";
import { UsersTableSkeleton } from "./ui/skeletons";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Suspense key={'24hrUsersTable'} fallback={<UsersTableSkeleton />}>
          <DailyUsers />
        </Suspense>
        <Suspense key={'allTimeUsersTable'} fallback={<UsersTableSkeleton />}>
          <AllTimeUsers />
        </Suspense>
      </main>
    </div>
  );
}