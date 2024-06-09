import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
export declare class StudentService {
    private prisma;
    private user;
    constructor(prisma: PrismaService, user: UserService);
    findByUserId(userId: string): Promise<{
        id: string;
        name: string;
        avatar: string;
        userId: string;
        groupId: string;
        surname: string;
    }[]>;
}
