import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne } from "typeorm";

export enum Gender{
    MALE = 'MASCULINO',
    FEMALE = 'FEMININO',
    OUTRO = 'OUTRO',
}

@Entity()
export class Person {

    // ID
    @PrimaryGeneratedColumn('uuid')
    id: string;


    // NOME
    @Column({type: 'varchar', length: 150})
    name: string;

    // EMAIL
    @Column({type: 'varchar', length: 150, unique: true})
    email: string;

    // CONTATO WHATSAPP
    @Column({type: 'varchar', length: 20})
    whatsappContact: string;

    // CONTATO CELULAR
    @Column({type: 'varchar', length: 20})
    cellContact: string;

    // =-=-=-= ENDEREÇO =-=-=-=
    
    //  RUA
    @Column({type: 'varchar', length: 150})
    street: string;

    // NÚMERO
    @Column({type: 'varchar', length: 10})
    number: string;

    // BAIRRO
    @Column({type: 'varchar', length: 100})
    neighborhood: string;

    // CIDADE
    @Column({type: 'varchar', length: 100})
    city: string;

    // ESTADO (UF)
    @Column({type: 'varchar', length: 2})
    state: string;
    
    // CEP
    @Column({type: 'varchar', length: 8})
    cep: string;

    // DATA DE NASCIMENTO
    @Column({type: 'date'})
    birthDate: Date;

    // SEXO
    @Column({type: 'enum', enum: Gender})
    gender: Gender;

    // PROFISSÃO
    @Column({type: 'varchar', length: 100})
    profession: string;

    // EMPRESA QUE TRABALHA
    @Column({type: 'varchar', length: 150})
    company: string;

    // FOTO DE PERFIL (URL)
    @Column({type: 'varchar', length: 255, nullable: true})
    photoUrl: string;


}
