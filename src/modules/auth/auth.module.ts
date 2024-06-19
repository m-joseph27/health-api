import { Module, forwardRef } from '@nestjs/common';
import { AuthService } from './service/auth.service';
import { AuthController } from './controller/auth.controller';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [
    forwardRef(() => UserModule),
    PassportModule
  ],
  providers: [AuthService, LocalStrategy], 
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}