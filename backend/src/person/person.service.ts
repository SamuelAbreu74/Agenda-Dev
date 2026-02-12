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

  ) { }


  // Cria uma nova Pessoa
  async create(dto: CreatePersonDto): Promise<Person> {
    const Person = this.personsRepository.create({
      ...dto,
      birthDate: new Date(dto.birthDate),
    })

    return await this.personsRepository.save(Person);
  }

  // Busca TODAS as Pessoas
  async findAll() {
    const result = await this.personsRepository.find()
    return result;
  }

  // Busca Somente 1 Pessoa
  async findOne(id: string) {
    const result = await this.personsRepository.findOneBy({ id: id })
    return result;
  }

  // Busca a quantidade de Aniversariantes do Dia atual
  async findCelebrants() {

    // Lógica para pegar a data de hoje (formatada em mês e dia)
    const today = new Date();
    const day: number = today.getDate();
    const month: number = today.getMonth() + 1;
    const formatted_today_date: string = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

    // Buscando todos os usuários e Inicializando a lista de aniversariantes
    const all_persons = await this.personsRepository.find()
    const celebrants_list = new Array<Person> 

    // Lógica para buscar os aniversariantes e adicionalos a lista
    for (let i = 0; i < all_persons.length; i++) {

      const birth_date = new Date(all_persons[i].birthDate);

      const celebrants_birthdays = `${String(birth_date.getMonth() + 1).padStart(2, '0')}-${String(birth_date.getDate() + 1).padStart(2, '0')}`;

      // Verificando se a data de aniversário é igual a data de hoje
      if(formatted_today_date === celebrants_birthdays){
        celebrants_list.push(all_persons[i]);
      }else{
        console.log("Nenhum aniversariante encontrado");
      }
    
    }

    // Verifica se existe aniversariantes na lista e retorna para o Controller
    if(celebrants_list){
      return celebrants_list;
    }else{
      return {message: "Não existe nenhum aniversariante no dia de hoje!"}
    }
  }


  //  Conta quantas Pessoas estão Cadastradas
  async countAll() {
    const result = await this.personsRepository.find()
    const total_of_persons = result.length
    return total_of_persons;
  }

  // Edita os dados de 1 Pessoa
  async update(id: string, dto: UpdatePersonDto) {
    const result = await this.personsRepository.update(id, dto);
    return result;
  }

  // Deleta 1 Pessoa
  async remove(id: string) {
    const result = await this.personsRepository.delete({ id: id })
    return result;
  }
}


