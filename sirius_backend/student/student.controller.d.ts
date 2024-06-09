import { StudentService } from './student.service';
export declare class StudentController {
    private readonly studentService;
    constructor(studentService: StudentService);
    findMany(userId: string): Promise<{
        id: string;
        name: string;
        avatar: string;
        userId: string;
        groupId: string;
        surname: string;
    }[]>;
}
