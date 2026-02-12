import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  // Criar Pessoa
  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    const new_person = this.personService.create(createPersonDto);
    return {message: "Criado com Sucesso!", new_person}; 
  }

  // Buscar por todas as Pessoas
  @Get()
  async findAll() {
    const all_persons = await this.personService.findAll();
    return {message: "Pessoas Listadas com Sucesso!", all_persons};
  }

  // Buscar por Aniversariantes do Dia atual
  @Get('celebrants')
  async findBirthCelebrants(){
    const today_celebrants = await this.personService.findCelebrants();
    return today_celebrants
  }

  // Buscar pela quantide total de Pessoas cadastradas
  @Get('count')
  async countAll(){
    return await this.personService.countAll();
  }
  
  // Buscar por uma pessoa específica pelo ID
  @Get(':id')
  async findOne(@Param('id') id: string) {
    const person = await this.personService.findOne(id);
    return {message: "Pessoa Encontrada com Sucesso!", person};
  }

  //  Atualizar Pessoa
  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    await this.personService.update(id, updatePersonDto);
    const updated_data = await this.personService.findOne(id);
    return {message: "Atualizado com Sucesso!", updated_data};
  }

  // Deletar Pessoa
  @Delete(':id')
  remove(@Param('id') id: string) {
    this.personService.remove(id)
    return {message: "Deletado com Sucesso!"};
  }
}
