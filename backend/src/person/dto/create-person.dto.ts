import {IsDateString, IsEmail, IsEnum, IsOptional, IsString, Length} from 'class-validator';
import { Gender } from '../entities/person.entity';

export class CreatePersonDto {
    @IsString()
    @Length(3, 150, {message: "Não pode estar vazio ou com menos de 3 caracteres"})
    name: string;

    @IsEmail({}, {message: "Precisa ser um email"})
    @Length(5, 150, {message: "Não pode estar vazio ou com menos de 5 caracteres"})
    email: string;

    @IsString()
    @Length(8, 20, {message: "Não pode estar vazio ou com menos de 8 caracteres"})
    whatsappContact: string;

    @IsString()
    @Length(8, 20, {message: "Não pode estar vazio ou com menos de 8 caracteres"})
    cellContact: string;

    @IsString()
    @Length(2, 100, {message: "Não pode estar vazio ou com menos de 2 caracteres"})
    profession: string;

    @IsDateString({}, {message: "Precisa ser uma data válida"})
    birthDate: string;

    @IsEnum(Gender, {message: "Precisa ser um dos seguintes valores: MASCULINO, FEMININO ou OUTRO"})
    gender: Gender

    @IsOptional()
    @IsString()
    photoUrl?: string;

    @IsOptional()
    @IsString()
    @Length(2, 150,{message: "Não pode estar vazio ou com menos de 2 caracteres"})
    company?: string;


    // =-=-=-= ENDEREÇO =-=-=-=

    // RUA
    @IsString()
    @Length(10, 150, {message: "Não pode estar vazio ou com menos de 10 caracteres"})
    street: string;

    // NÚMERO
    @IsString()
    @Length(1, 10, {message: "Não pode estar vazio"})
    number: string;

    // BAIRRO
    @IsString()
    @Length(5, 100, {message: "Não pode estar vazio ou com menos de 5 caracteres"}) 
    neighborhood: string;

    // CIDADE
    @IsString()
    @Length(5, 100, {message: "Não pode estar vazio ou com menos de 5 caracteres"})
    city: string;

    // ESTADO (UF)
    @IsString()
    @Length(2, 2, {message: "Não pode estar vazio ou com mais de 2 caracteres"})
    state: string;
    
    // CEP
    @IsString()
    @Length(8, 8, {message: "Não pode estar vazio ou diferente de 8 caracteres"})
    cep: string;


}
