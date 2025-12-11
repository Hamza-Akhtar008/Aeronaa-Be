import { Inject, Injectable } from '@nestjs/common';
import { CreateCarrentalDto } from './dto/create-carrental.dto';
import { UpdateCarrentalDto } from './dto/update-carrental.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Carrental } from './entities/carrental.entity';
import { Repository } from 'typeorm';
import { Status } from 'src/user/entities/user.entity';

@Injectable()
export class CarrentalsService {
  constructor(@InjectRepository(Carrental)
  private readonly carRentalRepository: Repository<Carrental>) {

  }

  create(createCarrentalDto: CreateCarrentalDto) {
    return this.carRentalRepository.save(createCarrentalDto)
  }

  findAll(location:string,status?:Status) {
     location =location?.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    return this.carRentalRepository.find({
      where:{
        location,
        status
      }

    })
  }

  findOne(id: number) {
    return this.carRentalRepository.find({
      where:{
        id
      }
    })
  }

  update(id: number, updateCarrentalDto: UpdateCarrentalDto) {
    return this.carRentalRepository.update(id,updateCarrentalDto)
  }

  remove(id: number) {
    return this.carRentalRepository.delete(id)
  }

  findByVendor(id:number){
    return this.carRentalRepository.find({
      where:{
        createdBy:{
          id
        }
      }
    })
  }
   async getStats(id:number){
   return this.carRentalRepository.count({
    where:{
      createdBy:{
        id
      }
    }
   })
  }
}
