import { IsEmail, IsIdentityCard, IsOptional, IsString, Length } from "class-validator";
import { Person } from "src/person/entities/person.entity";

export class CreateCompanyDto {

    // NOME FANTASIA
    @IsString()
    @Length(3, 150)
    fantasyName: string;

    // RAZÃO SOCIAL / NOME OFICIAL
    @IsString()
    @Length(3, 150)
    companyName: string;

    //EMAIL
    @IsEmail()
    @Length(5, 150)
    email: string;

    // CNPJ
    @IsString()
    @Length(18)
    cnpj: string;

    // RESPONSÁVEL
    @IsIdentityCard()
    accountable: Person;
    
    // CONTATO WHATSAPP
    @IsString()
    @Length(8, 20)
    whatsappContact: string;

    // CONTATO CELULAR
    @IsString()
    @Length(8, 20)
    cellContact: string;
    
    // CONTATO FIXO
    @IsOptional()
    @IsString()
    @Length(8, 20)
    fixedContact?: string;
    

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
