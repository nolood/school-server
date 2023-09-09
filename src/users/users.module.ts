import { Module, forwardRef } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { AuthModule } from 'src/auth/auth.module';
import { UsersController } from './users.controller';
import { User } from './users.model';
import { UsersService } from './users.service';
import { Role } from '../roles/roles.model';
import { UserRoles } from '../roles/user-roles.model';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports: [SequelizeModule.forFeature([User, Role, UserRoles]), forwardRef(() => AuthModule)],
  exports: [UsersService],
})
export class UsersModule {}
