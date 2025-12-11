import { Injectable } from '@nestjs/common';
import { CreatePropertyDto } from './dto/create-property.dto';
import { UpdatePropertyDto } from './dto/update-property.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Property } from './entities/property.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PropertyService {
  constructor(@InjectRepository(Property)
  private readonly propertyRepository: Repository<Property>) {

  }
  create(createPropertyDto: CreatePropertyDto) {
    return this.propertyRepository.save(createPropertyDto);

  }

  findAll(listingType?:string,location?:string) {
    return this.propertyRepository.find({
      where: {
        listingType,
        city: location
        
      },
      relations: ['user']
    })
  }

  findOne(id: number) {
    return this.propertyRepository.findOne({
      where: {
        id
      }
    })
  }

  findUserBased(id: number) {
    return this.propertyRepository.find({
      where: {
        user: {
          id
        }
      }
    })

  }
  update(id: number, updatePropertyDto: UpdatePropertyDto) {
    return this.propertyRepository.update(id, updatePropertyDto);
  }

  remove(id: number) {
    return this.propertyRepository.delete(id);
  }
}
