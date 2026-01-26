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


}
