import { PartialType } from '@nestjs/mapped-types';
import { CreateCarrentalDto } from './create-carrental.dto';

export class UpdateCarrentalDto extends PartialType(CreateCarrentalDto) {}
