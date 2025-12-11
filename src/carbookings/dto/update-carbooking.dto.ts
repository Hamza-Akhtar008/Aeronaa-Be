import { PartialType } from '@nestjs/mapped-types';
import { CreateCarbookingDto } from './create-carbooking.dto';

export class UpdateCarbookingDto extends PartialType(CreateCarbookingDto) {}
