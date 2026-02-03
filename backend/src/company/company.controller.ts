import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CreateCompanyDto } from './dto/create-company.dto';
import { UpdateCompanyDto } from './dto/update-company.dto';

@Controller('companies')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) {}

  // Criar uma nova Empresa
  @Post()
  async create(@Body() createCompanyDto: CreateCompanyDto) {
    return this.companyService.create(createCompanyDto);
  }

  // Buscar por todas as Empresas
  @Get()
  async findAll() {
    return this.companyService.findAll();
  }

  // Buscar pela quantidade de Empresas Cadastradas
  @Get('count')
  async countAll(){
    return this.companyService.countAll();
  }


  // Buscar por uma Empresa Específica pelo ID 
  @Get(':id')
  async findOne(@Param('id') id: string) {
    return this.companyService.findOne(id);
  }

  // Editar Empresa
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateCompanyDto: UpdateCompanyDto) {
    await this.companyService.update(id, updateCompanyDto);
    const updated_data = await this.companyService.findOne(id);
    return {message: "Atualizado com Sucesso!", updated_data};

  }

  // Deletar Empresa
  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.companyService.remove(id);
    return {message: "Empresa Deletada com Sucesso!"}
  }
}
