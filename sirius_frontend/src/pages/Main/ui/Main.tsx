import Button from "Shared/Button/ui/Button";
import InfoWidget from "Shared/InfoWidget/ui/InfoWidget";
import SmallWidget from "Shared/SmallWidget/ui/SmallWidget";
import TeacherBadge from "Shared/TeacherBadge/ui/TeacherBadge";
import HometaskIcon from './../assets/hm-task.svg';
import ReportIcon from './../assets/report.svg';
import { useEffect } from "react";
import { getStatsByStudentId } from "../model/stats.store";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "App/store/store";
import NextLesson from "Widgets/NextLesson/ui/NextLesson";
import LessonsBalance from "Widgets/LessonsBalance/ui/LessonsBalance";
import UpcomingLessons from "Widgets/UpcomingLessons/ui/UpcomingLessons";

function Main() {

    const dispatch = useDispatch<AppDispatch>();

    const activeStudent = useSelector((state: RootState) => state.student.activeStudent);
    
    useEffect(() => {
        if (activeStudent) {
            dispatch(getStatsByStudentId());
        }
    }, [activeStudent]);

    return (
        <div className="main">
            <div className="main__widgets">
                <InfoWidget
                    title="До 31 декабря любой курс со скидкой 20%"
                    description="До конца года у вас есть уникальная возможность воспользоваться нашей новогодней скидкой 20% на любой курс!"
                    image="/widgets/wolf.png"
                    additionalClass="main__sale-widget"
                ></InfoWidget>
                <div className="main__widgets-grid">
                    <NextLesson></NextLesson>
                    <SmallWidget 
                        title="Домашнее задание" 
                        Icon={HometaskIcon} 
                        color='#d8ecff'
                    ></SmallWidget>
                    <SmallWidget 
                        title="Отчеты от учителей" 
                        Icon={ReportIcon} 
                        color='#e8cbff'
                    ></SmallWidget>
                </div>
            </div>
            <div className="main__lessons-info">
                <LessonsBalance></LessonsBalance>
                <UpcomingLessons></UpcomingLessons>
            </div>
        </div>
    );
}

export default Main;