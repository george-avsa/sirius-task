import TeacherIcon from './../assets/teacher-icon.svg';

function TeacherBadge({teacherName}: {teacherName: string}) {
    return (
        <div className="teacher-badge">
            <TeacherIcon></TeacherIcon>
            <div className='teacher-badge__name'>
                {teacherName}
            </div>
        </div>
    );
}

export default TeacherBadge;