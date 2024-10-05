import Image from "next/image"
import { User } from "@/app/lib/definitions";
import styles from '../../components/table/table.module.scss';

export default function TableMobile({
    data,
    offset
}: {
    data: User[];
    offset: number;
}) {
    return (
        <>
            {data?.map((user, index) => (
                <div key={user.guid} className={styles.mobileCard}>
                    <div>
                        <span>{offset + index + 1}.</span>
                        <Image
                            src={'/user-img.png'}
                            width={28}
                            height={28}
                            alt={`${user.name}'s profile picture`}
                        />
                        <p>{user.name}</p>
                    </div>
                    <div>
                        <p>
                            <span>Total Games:</span> {user.total_games}
                        </p>
                        <p>
                            <span>Volume:</span> {user.volume} SOL
                        </p>
                        <p>
                            <span>24h Games:</span> {user.daily_games}
                        </p>
                    </div>
                </div>
            ))}
        </>
    )
}