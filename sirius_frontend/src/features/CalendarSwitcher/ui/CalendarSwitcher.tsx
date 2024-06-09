import { useDispatch, useSelector } from 'react-redux';
import Arrow from './../assets/arrow.svg';
import { AppDispatch, RootState } from 'App/store/store';
import { getFormattedMonth } from '../lib/getFormattedMonth';
import { decrementDate, incrementDate } from 'Entities/Lesson/store/lesson.store';

function CalendarSwitcher() {

    const dispatch = useDispatch<AppDispatch>();

    const date = useSelector((state: RootState) => state.lesson.date);

    return (
        <div className="calendar-switcher">
            <Arrow onClick={() => dispatch(decrementDate())} />
            <span className='calendar-switcher__month'>
                {getFormattedMonth(date)}
            </span>
            <Arrow 
                className='calendar-switcher--arrow'
                onClick={() => dispatch(incrementDate())}
            />
        </div>
    );
}

export default CalendarSwitcher;