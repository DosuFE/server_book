import { Module, ValidationPipe } from '@nestjs/common';
import { BookmarkService } from './bookmanager.service';
import { BookmarkController } from './bookmanager.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Bookmarks } from '../entities/bookmanager.entity';
import { APP_PIPE } from '@nestjs/core';

@Module({
  imports: [TypeOrmModule.forFeature([Bookmarks])],
  providers: [
    BookmarkService,
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        transformOptions: {
          enableImplicitConversion: true,
        },
      }),
    },
  ],
  controllers: [BookmarkController],
})
export class BookmarkModule {}
