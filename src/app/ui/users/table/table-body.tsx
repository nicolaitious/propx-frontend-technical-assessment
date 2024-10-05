import Image from "next/image"
import { User } from "@/app/lib/definitions"
import styles from '../../components/table/table.module.scss';

export default function TableBody({
    data,
    offset,
}: {
    data: User[];
    offset: number;
}) {
    return (
        <>
            {data?.map((user, index) => (
                <tr key={user.guid}>
                    <td className={styles.colored}>
                        {offset + index + 1}.
                    </td>
                    <td>
                        <Image
                            src={'/user-img.png'}
                            width={28}
                            height={28}
                            alt={`${user.name}'s profile picture`}
                        />
                    </td>
                    <td className={styles.alignLeft}>
                        <p>{user.name}</p>
                    </td>
                    <td className={styles.colored}>
                        {user.total_games}
                    </td>
                    <td>
                        {user.volume} SOL
                    </td>
                    <td className={styles.colored}>
                        {user.daily_games}
                    </td>
                </tr>
            ))}
        </>
    )
}