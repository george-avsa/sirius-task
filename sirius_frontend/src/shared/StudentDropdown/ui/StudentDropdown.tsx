import { useDispatch, useSelector } from 'react-redux';
import TriangleIcon from './../assets/triangle.svg';
import LogoutIcon from './../assets/logout.svg';
import { RootState } from 'App/store/store';
import { useNavigate } from 'react-router-dom';
import { AppDispatch } from 'App/store';
import { setActiveUser } from 'Entities/Students/store/students.store';
import { authService } from 'App/api/auth.service';
import { setIsLoadingLessons } from 'Entities/Lesson/store/lesson.store';
import { setIsLoadingStats } from 'Pages/Main/model/stats.store';
import { setFilter } from 'Entities/Filter/store/filter.store';

function StudentDropdown() {

    const students = useSelector((state: RootState) => state.student.students);
    const activeStudent = useSelector((state: RootState) => state.student.activeStudent);

    const navigate = useNavigate();

    const dispatch = useDispatch<AppDispatch>();

    const handleStudent = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation();
        const element = e.currentTarget as HTMLDivElement;
        const id = element.getAttribute('data-id');
        if (id) {
            dispatch(setIsLoadingLessons());
            dispatch(setIsLoadingStats());
            dispatch(setActiveUser(id));
            dispatch(setFilter(''));
        }
    }
            
    const handleLogout = () => {
        navigate('/login', {replace: true});
        authService.logout();
    }

    return (
        <div className="student-dropdown">
            <TriangleIcon className="student-dropdown__triangle" />
            <h6 className="student-dropdown__title">
                Смена пользователя
            </h6>
            <div className="student-dropdown__students">
                {students.map(student => (
                    <div 
                        onClick={handleStudent}
                        className={`student-dropdown__student ${student.id === activeStudent 
                        ? 'student-dropdown__student--active' : ''}`} 
                        key={student.id}
                        data-id={student.id}
                    >
                    <div className="student-dropdown__student-avatar">
                        <img src={`/avatars/${student.avatar}`} alt="" />
                    </div>
                    <div className="student-dropdown__info">
                        <span className="student-dropdown__name">
                            {student.name}
                        </span>
                        {activeStudent === student.id && (
                            <span className="student-dropdown__active-info">
                                Это вы
                            </span>
                        )}
                    </div>
                </div>
                ))}
            </div> 
            <div className="student-dropdown__divider">

            </div>
            <div className="student-dropdown__logout">
                <span className="student-dropdown__logout-text">Выход</span>
                <LogoutIcon onClick={handleLogout} />
            </div>
        </div>
    );
}

export default StudentDropdown;