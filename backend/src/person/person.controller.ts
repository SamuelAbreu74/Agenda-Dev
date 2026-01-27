import { Controller, Get, Post, Body, Patch, Param, Delete} from '@nestjs/common';
import { PersonService } from './person.service';
import { CreatePersonDto } from './dto/create-person.dto';
import { UpdatePersonDto } from './dto/update-person.dto';


@Controller('persons')
export class PersonController {
  constructor(private readonly personService: PersonService) {}

  @Post()
  create(@Body() createPersonDto: CreatePersonDto) {
    const new_person = this.personService.create(createPersonDto);
    return {message: "Criado com Sucesso!", new_person}; 
  }

  @Get()
  async findAll() {
    const all_persons = await this.personService.findAll();
    return {message: "Pessoas Listadas com Sucesso!", all_persons};
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    const person = await this.personService.findOne(id);
    return {message: "Pessoa Encontrada com Sucesso!", person};
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePersonDto: UpdatePersonDto) {
    await this.personService.update(id, updatePersonDto);
    const updated_data = await this.personService.findOne(id);
    return {message: "Atualizado com Sucesso!", updated_data};
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    this.personService.remove(id)
    
    return {message: "Deletado com Sucesso!"};
  }
}
