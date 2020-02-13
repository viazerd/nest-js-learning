import { Module } from '@nestjs/common';
import { AngularUniversalModule } from '@nestjs/ng-universal';
import { join } from 'path';
import { HelloController } from './src/hello/hello.controller';
import { DatabaseModule } from './src/database/database.module';
import { userProviders } from './src/user.provider';

@Module({
  imports: [
    AngularUniversalModule.forRoot({
      viewsPath: join(process.cwd(), 'dist/browser'),
      bundle: require('../server/main'),
      liveReload: true
    }),
    DatabaseModule
  ],
  controllers: [HelloController],
  providers: [...userProviders]
})
export class ApplicationModule {}
