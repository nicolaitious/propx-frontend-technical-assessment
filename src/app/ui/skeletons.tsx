import styles from './skeletons.module.scss'
import tableStyles from './components/table/table.module.scss'
import { TrophyIcon } from '@heroicons/react/24/solid';

export function UsersMobileTableRowSkeleton() {
  return (
    <div className={`${tableStyles.mobileCard} ${styles.mobileCard}`}>
      <div>
        <span></span>
        <div className={styles.img} />
        <p></p>
      </div>
      <div>
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
  );
}
export function UsersTableRowSkeleton() {
  return (
    <>
      <tr className={styles.tableRow}>
        <td></td>
        <td>
          <div className={styles.img} />
        </td>
        <td>
          <p></p>
        </td>
        <td></td>
        <td></td>
        <td></td>
      </tr >
    </>
  );
}

export function UsersMobileTableRowsSkeleton() {
  return (
    <>
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <UsersMobileTableRowSkeleton />
      <div className={`${styles.shimmer} ${styles.mobileOverlay}`}></div>
    </>
  )
}

export function UsersTableRowsSkeleton() {
  return (
    <>
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <UsersTableRowSkeleton />
      <div className={`${styles.shimmer} ${styles.tbodyOverlay}`}></div>
    </>
  )
}

export function UsersTableSkeleton() {
  return (
    <div className={tableStyles.tableBackground}>
      <div className={`${styles.shimmer} ${styles.overlay}`}></div>
      <div className={tableStyles.table}>
        <div className={styles.title}>
          <TrophyIcon /><p></p>
        </div>
        <div className='mobileOnly'>
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
          <UsersMobileTableRowSkeleton />
        </div>
        <div className='desktopOnly'>
          <table cellSpacing={0} className={tableStyles.table}>
            <thead>
              <tr><th scope="col" style={{ width: '2rem' }}></th><th scope="col" style={{ width: 'calc(28px + 1rem)' }}>User</th><th scope="col"></th><th scope="col">Total Games</th><th scope="col">Volume</th><th scope="col">24h Games</th></tr>
            </thead>
            <tbody>
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
              <UsersTableRowSkeleton />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
