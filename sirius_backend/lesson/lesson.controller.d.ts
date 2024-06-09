import { LessonDTO } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';
export declare class LessonController {
    private readonly lessonService;
    constructor(lessonService: LessonService);
    register(dto: LessonDTO): Promise<{
        id: string;
        name: string;
        canceled: boolean;
        startsAt: Date;
        endsAt: Date;
        meetingLink: string;
        groupId: string;
        teacherId: string;
    }>;
    getLessonsByMonth(userId: string, studentId: string, date: string): Promise<{
        id: string;
        name: string;
        canceled: boolean;
        startsAt: Date;
        endsAt: Date;
        meetingLink: string;
        groupId: string;
        teacherId: string;
    }[]>;
    getStats(userId: string, studentId: string): Promise<{
        lessons: {
            teacherName: string;
            id: string;
            name: string;
            canceled: boolean;
            startsAt: Date;
            endsAt: Date;
            meetingLink: string;
            groupId: string;
            teacherId: string;
        }[];
        stats: {};
    }>;
    checkIsAuth(): Promise<boolean>;
}
