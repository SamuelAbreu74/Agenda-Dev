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
  ) {}


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

  async findOne(id: number) {
    return `This action returns a #${id} company`;
  }

  async update(id: number, updateCompanyDto: UpdateCompanyDto) {
    return `This action updates a #${id} company`;
  }

  async remove(id: number) {
    return `This action removes a #${id} company`;
  }
}
