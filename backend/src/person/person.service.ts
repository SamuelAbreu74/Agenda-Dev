import { Injectable } from '@nestjs/common';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Person } from './entities/person.entity';

@Injectable()
export class PersonService {
  constructor(
    @InjectRepository(Person)
    private readonly personsRepository: Repository<Person>,
  
  ) {}
  


  async create(dto: CreatePersonDto): Promise<Person> {
    const Person = this.personsRepository.create({
      ...dto,
      birthDate: new Date(dto.birthDate),
    })

    return await this.personsRepository.save(Person);
  }

  async findAll() {
    const result = await this.personsRepository.find()
    return result;
  }

  async findOne(id: string) {
    const result = await this.personsRepository.findOneBy({id: id})
    return result;
  }

  async countAll(){
    const result = await this.personsRepository.find()
    const total_of_persons = result.length
    return total_of_persons;
  }

  async update(id: string, dto: UpdatePersonDto) {
    const result = await this.personsRepository.update(id, dto);
    return result; 
  }

  async remove(id: string) {
    const result = await this.personsRepository.delete({id: id})
    return result;
  }
}
