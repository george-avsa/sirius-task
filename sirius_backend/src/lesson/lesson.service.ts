import { BadRequestException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { LessonDTO } from './dto/create-lesson.dto';
import getDateInteval from './lib/getDateInteval';
import { UserService } from 'src/user/user.service';

@Injectable()
export class LessonService {
    constructor(
        private prisma: PrismaService,
        private userService: UserService, 
    ) {
    }

    create(dto: LessonDTO) {
        return this.prisma.lesson.create({
            data: {...dto}
        });
    }

    async getByMonth(userId: string, studentId: string, date: string) {
        const user = await this.userService.getById(userId);

        if (!user) throw new BadRequestException('No such user!');
        
        const student = await this.prisma.student.findUnique({
            where: {
                userId: user.id,
                id: studentId,
            }
        });
                
        if (!student) throw new BadRequestException('No such student!');

        const parsedDate = new Date(date) as Date;
        const [firstDate, lastDate] = getDateInteval(parsedDate);

        const lessons = await this.prisma.lesson.findMany({
            where: {
                groupId: student.groupId,
                startsAt: {
                    gt: firstDate,
                },
                endsAt: {
                    lt: lastDate,
                }
            }
        });

        return lessons;

    }

    async getStats(userId: string, studentId: string) {
        const user = await this.userService.getById(userId);

        if (!user) throw new BadRequestException('No such user!');
        
        const student = await this.prisma.student.findUnique({
            where: {
                userId: user.id,
                id: studentId,
            }
        });
                
        if (!student) throw new BadRequestException('No such student!');

        const date = new Date();
        const nextMonthDate = new Date(date.getFullYear(), date.getMonth()+1, date.getDate());

        const teachers = await this.prisma.teacher.findMany();

        const lessons = await this.prisma.lesson.findMany({
            where: {
                groupId: student.groupId,
                startsAt: {
                    gte: date,
                },
                endsAt: {
                    lt: nextMonthDate,
                },
            },
            orderBy: {
                startsAt: 'asc',
            },
        });

        // супер костыль
        const lessonsWithAuthor = lessons.map(lesson => {
            const teacherObject = teachers.find(teacher => {
                if (teacher.id === lesson.teacherId) {
                    return teacher;
                }
            });
            return {...lesson, teacherName: teacherObject.name};
        })

        const stats = lessons.reduce((acc, lesson) => {
            const newAcc = {...acc};
            if (newAcc[lesson.name]) {
                newAcc[lesson.name] += 1;
            } else {
                newAcc[lesson.name] = 1;
            }
            return newAcc;
        }, {});

        return {lessons: lessonsWithAuthor, stats};

    }


}
