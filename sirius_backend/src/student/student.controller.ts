import { Controller, Get, Post, Body, Patch, Param, Delete, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @UsePipes(new ValidationPipe())
  @Get('/:userId')
  findMany(@Param('userId') userId: string) {
    return this.studentService.findByUserId(userId);
  }
}
