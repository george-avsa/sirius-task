import { getTimeInterval } from 'App/lib/getTimeInterval';
import WalletIcon from './../assets/wallet.svg';

function Lesson({
    isPast,
    startsAt,
    endsAt,
    name,
}:{
    name: string,
    startsAt: string,
    endsAt: string,
    isPast: boolean,
}) {

    return (
        <div className={`lesson ${isPast ? 'lesson--past' : ''}`}>
            <div className="lesson__info">
                <h6 className="lesson__time-interval">{getTimeInterval(startsAt, endsAt)}</h6>
                <p className="lesson__name">{name}</p>
            </div>
            <WalletIcon />
        </div>
    );
}

export default Lesson;