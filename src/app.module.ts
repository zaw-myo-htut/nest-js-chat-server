import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { NinjasModule } from './ninjas/ninjas.module';
import { AppGateway } from './app/app.gateway';

@Module({
  imports: [UsersModule, NinjasModule],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
