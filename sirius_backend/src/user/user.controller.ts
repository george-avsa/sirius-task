import { Controller, Get } from '@nestjs/common';
import { UserService } from './user.service';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { CurrentUser } from 'src/auth/decorators/user.decorator';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/check')
  @Auth()
  async checkIsAuth(@CurrentUser('id') userId:string) {
    const user = await this.userService.getById(userId);
    return user;
  }
}
