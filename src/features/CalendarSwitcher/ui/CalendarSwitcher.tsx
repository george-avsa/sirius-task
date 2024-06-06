import Arrow from './../assets/arrow.svg';

function CalendarSwitcher() {
    return (
        <div className="calendar-switcher">
            <Arrow/>
            <span className='calendar-switcher__month'>
                Март 2024
            </span>
            <Arrow className='calendar-switcher--arrow' />
        </div>
    );
}

export default CalendarSwitcher;