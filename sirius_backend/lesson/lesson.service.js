"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LessonService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma.service");
const getDateInteval_1 = require("./lib/getDateInteval");
const user_service_1 = require("../user/user.service");
let LessonService = class LessonService {
    constructor(prisma, userService) {
        this.prisma = prisma;
        this.userService = userService;
    }
    create(dto) {
        return this.prisma.lesson.create({
            data: { ...dto }
        });
    }
    async getByMonth(userId, studentId, date) {
        const user = await this.userService.getById(userId);
        if (!user)
            throw new common_1.BadRequestException('No such user!');
        const student = await this.prisma.student.findUnique({
            where: {
                userId: user.id,
                id: studentId,
            }
        });
        if (!student)
            throw new common_1.BadRequestException('No such student!');
        const parsedDate = new Date(date);
        const [firstDate, lastDate] = (0, getDateInteval_1.default)(parsedDate);
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
    async getStats(userId, studentId) {
        const user = await this.userService.getById(userId);
        if (!user)
            throw new common_1.BadRequestException('No such user!');
        const student = await this.prisma.student.findUnique({
            where: {
                userId: user.id,
                id: studentId,
            }
        });
        if (!student)
            throw new common_1.BadRequestException('No such student!');
        const date = new Date();
        const nextMonthDate = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate());
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
        const lessonsWithAuthor = lessons.map(lesson => {
            const teacherObject = teachers.find(teacher => {
                if (teacher.id === lesson.teacherId) {
                    return teacher;
                }
            });
            return { ...lesson, teacherName: teacherObject.name };
        });
        const stats = lessons.reduce((acc, lesson) => {
            const newAcc = { ...acc };
            if (newAcc[lesson.name]) {
                newAcc[lesson.name] += 1;
            }
            else {
                newAcc[lesson.name] = 1;
            }
            return newAcc;
        }, {});
        return { lessons: lessonsWithAuthor, stats };
    }
};
exports.LessonService = LessonService;
exports.LessonService = LessonService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService,
        user_service_1.UserService])
], LessonService);
//# sourceMappingURL=lesson.service.js.map