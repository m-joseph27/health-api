import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from '../service/auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    return this.authService.login(username, password);
  }
}