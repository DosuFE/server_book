import { PartialType } from '@nestjs/mapped-types';
import { CreateBookmarkDto } from './createbookmanager.dto';

export class UpdateBookmarkDto extends PartialType(CreateBookmarkDto) {}
