import { getTimeInterval } from "App/lib/getTimeInterval";
import { RootState } from "App/store/store";
import Button from "Shared/Button/ui/Button";
import Loader from "Shared/Loader/ui/Loader";
import TeacherBadge from "Shared/TeacherBadge/ui/TeacherBadge";
import { monthDictionary } from "Widgets/Calendar/constants/monthDictionary";
import { useSelector } from "react-redux";

function UpcomingLessons() {

    const lessons = useSelector((state: RootState) => state.stats.lessons);

    const isLoading = useSelector((state: RootState) => state.stats.isLoading);

    return (
        <div className="upcoming-lessons">

        {isLoading && <Loader></Loader>}
            <h6 className="upcoming-lessons__title">Ближайшие уроки</h6>
            <div className="upcoming-lessons__list">
                {lessons.map(lesson => (
                    <div className="upcoming-lessons__item" key={lesson.id}>
                        <div className="upcoming-lessons__date">
                            <span className="upcoming-lessons__day">{new Date(lesson.startsAt).getDate()}</span>
                            <span className="upcoming-lessons__month">
                                {monthDictionary[new Date(lesson.startsAt).getMonth()]}
                            </span>
                        </div>
                        <p className="upcoming-lessons__name">{lesson.name}</p>
                        <div className="upcoming-lessons__info">
                            <span className="upcoming-lessons__time">{getTimeInterval(lesson.startsAt, lesson.endsAt)}</span>
                            <TeacherBadge
                                teacherName={lesson.teacherName}
                            ></TeacherBadge>
                        </div>
                        <div className="upcoming-lessons__buttons">
                            <Button additionalClass="upcoming-lessons__lesson-button upcoming-lessons__lesson-button--white">Button</Button>
                            <Button additionalClass="upcoming-lessons__lesson-button">Button</Button>
                        </div>
                    </div>
                ))}
            </div>
            <Button additionalClass="upcoming-lessons__button">Button</Button>
        </div>
    );
}

export default UpcomingLessons;