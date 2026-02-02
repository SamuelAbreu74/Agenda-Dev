import { Person } from "src/person/entities/person.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Company {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    // NOME FANTASIA
    @Column({type: 'varchar', length: 150})
    fantasyName: string;

    // RAZÃO SOCIAL / NOME OFICIAL
    @Column({type: 'varchar', length: 150})
    companyName: string;

    // EMAIL
    @Column({type: 'varchar', length: 150, unique: true})
    email: string;

    // CNPJ
    @Column({type: 'varchar', length: 18})
    cnpj: string;

    // RESPONSÁVEL
    @Column()
    accountable: Person;

    // CONTATO CELULAR
    @Column({type: 'varchar', length: 20})
    cellContact: string;
    
    // CONTATO WHATSAPP
    @Column({type: 'varchar', length: 20})
    whatsappContact: string;
    // CONTATO FIXO
    @Column({type: 'varchar', length: 20})
    fixedContact: string;
    

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

}   
