import { Injectable } from '@nestjs/common';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Company } from './entities/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {
  constructor(
    @InjectRepository(Company)
    private readonly companiesRepository: Repository<Company>
  ) { }


  async create(Dto: CreateCompanyDto): Promise<Company> {
    const Company = this.companiesRepository.create({
      ...Dto
    })

    return await this.companiesRepository.save(Company);
  }

  async findAll() {
    const result = await this.companiesRepository.find();
    return result;
  }

  async findOne(id: string) {
    const result = await this.companiesRepository.findOne({
      where: { id: id },
      relations: { accountable: true }
    },
    );
    return result;
  }

  async countAll(){
    const result = await this.companiesRepository.find();
    const total_of_companies = result.length
    return total_of_companies;
  }

  async update(id: string, Dto: UpdateCompanyDto) {
    const result = await this.companiesRepository.update(id, Dto);
    return result;
  }

  async remove(id: string) {
    const result = await this.companiesRepository.delete({id: id})
    return result;
  }
}
