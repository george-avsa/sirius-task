import { Body, Controller, Get, HttpCode, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { LessonDTO } from './dto/create-lesson.dto';
import { LessonService } from './lesson.service';

@Controller('lesson')
export class LessonController {
  constructor(private readonly lessonService: LessonService) {}

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  async register(@Body() dto: LessonDTO) {
    const lesson = this.lessonService.create(dto);
    return lesson;
  }

  @Get('/:studentId/:date')
  @Auth()
  async getLessonsByMonth(@CurrentUser('id') userId:string, @Param('studentId') studentId: string,  @Param('date') date: string) {
    return this.lessonService.getByMonth(userId, studentId, date);
  }

  @Get('/stats/main/:studentId')
  @Auth()
  async getStats(@CurrentUser('id') userId:string, @Param('studentId') studentId: string) {
    return this.lessonService.getStats(userId, studentId);
  }


  @Get('/check')
  @Auth()
  async checkIsAuth() {
    return true;
  }
}
