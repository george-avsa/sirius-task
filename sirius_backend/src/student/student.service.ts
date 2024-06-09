import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
import { StudentsDto } from './dto/getting-students.dto';

@Injectable()
export class StudentService {

  constructor(private prisma: PrismaService, private user: UserService) {

  }

  async findByUserId(userId: string) {
    const students = await this.prisma.student.findMany({
      where: {
        userId
      }
    });

    return students;
  }
}
