import {IsDateString, IsEmail, IsEnum, IsOptional, IsString, Length} from 'class-validator';
import { Gender } from '../entities/person.entity';

export class CreatePersonDto {
    @IsString()
    @Length(3, 150)
    name: string;

    @IsEmail()
    @Length(5, 150)
    email: string;

    @IsString()
    @Length(8, 20)
    whatsappContact: string;

    @IsString()
    @Length(8, 20)
    cellContact: string;

    @IsString()
    @Length(2, 100)
    profession: string;

    @IsDateString()
    birthDate: string;

    @IsEnum(Gender)
    gender: Gender

    @IsOptional()
    @IsString()
    photoUrl?: string;

    @IsOptional()
    @IsString()
    @Length(2, 150)
    company?: string;


    // =-=-=-= ENDEREÇO =-=-=-=

    // RUA
    @IsString()
    @Length(10, 150)
    street: string;

    // NÚMERO
    @IsString()
    @Length(1, 10)
    number: string;

    // BAIRRO
    @IsString()
    @Length(5, 100)
    neighborhood: string;

    // CIDADE
    @IsString()
    @Length(5, 100)
    city: string;

    // ESTADO (UF)
    @IsString()
    @Length(2)
    state: string;
    
    // CEP
    @IsString()
    @Length(8)
    cep: string;


}
