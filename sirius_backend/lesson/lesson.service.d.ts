import { PrismaService } from 'src/prisma.service';
import { LessonDTO } from './dto/create-lesson.dto';
import { UserService } from 'src/user/user.service';
export declare class LessonService {
    private prisma;
    private userService;
    constructor(prisma: PrismaService, userService: UserService);
    create(dto: LessonDTO): import(".prisma/client").Prisma.Prisma__LessonClient<{
        id: string;
        name: string;
        canceled: boolean;
        startsAt: Date;
        endsAt: Date;
        meetingLink: string;
        groupId: string;
        teacherId: string;
    }, never, import("@prisma/client/runtime/library").DefaultArgs>;
    getByMonth(userId: string, studentId: string, date: string): Promise<{
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
}
