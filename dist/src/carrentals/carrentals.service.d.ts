import { CreateCarrentalDto } from './dto/create-carrental.dto';
import { UpdateCarrentalDto } from './dto/update-carrental.dto';
import { Carrental } from './entities/carrental.entity';
import { Repository } from 'typeorm';
import { Status } from 'src/user/entities/user.entity';
export declare class CarrentalsService {
    private readonly carRentalRepository;
    constructor(carRentalRepository: Repository<Carrental>);
    create(createCarrentalDto: CreateCarrentalDto): Promise<CreateCarrentalDto & Carrental>;
    findAll(location: string, status?: Status): Promise<Carrental[]>;
    findOne(id: number): Promise<Carrental[]>;
    update(id: number, updateCarrentalDto: UpdateCarrentalDto): Promise<import("typeorm").UpdateResult>;
    remove(id: number): Promise<import("typeorm").DeleteResult>;
    findByVendor(id: number): Promise<Carrental[]>;
    getStats(id: number): Promise<number>;
}
