import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
} from '@nestjs/common';
import { BookmarkService } from './bookmanager.service';
import { CreateBookmarkDto } from './dto/createbookmanager.dto';
import { UpdateBookmarkDto } from './dto/updateBookmanager.dto';
import { ParseIdPipe } from './pipes/parseId.pipes';

@Controller('bookmark')
export class BookmarkController {
  constructor(private bookmarkService: BookmarkService) {}

  @Post()
  create(@Body() dto: CreateBookmarkDto) {
    return this.bookmarkService.create(dto);
  }

  @Get()
  findAll() {
    return this.bookmarkService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIdPipe) id: number) {
    return this.bookmarkService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIdPipe) id: number,
    @Body() body: UpdateBookmarkDto,
  ) {
    return this.bookmarkService.update(id, body);
  }

  @Delete(':id')
  delete(@Param('id', ParseIdPipe) id: number) {
    return this.bookmarkService.delete(id);
  }
}
