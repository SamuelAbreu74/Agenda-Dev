'use client'
interface NewPersonFormModalProps {
    isOpen: boolean
    onClose: () => void
}

interface CompanyProps {
    id: string;
    companyName: string
}

import { Gender } from "@/types/gender.enum";
import { useEffect, useState } from "react";

export default function NewPersonFormModal({ isOpen, onClose }: NewPersonFormModalProps) {

    
    const [companies, setCompanies] = useState<CompanyProps[]>([]);
    
    // Chamada na rota de Empresas
    useEffect(() => {
        fetch("http://localhost:3001/companies")
        .then((res) => res.json())
        .then((data) => {
            setCompanies(data)
        })

        .catch((error) => {
            console.error("Erro ao carregar empresas: ", error);
        });
    }, []);


    if (!isOpen) return null;

    return (
        <div className="flex flex-col justify-end gap-5 max-w-3xl min-h-fit border-2 rounded-2xl border-black shadow-md shadow-blue-200 p-4 bg-blue-950">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold">Adicione uma nova Pessoa:</h1>
                </div>
                <button onClick={onClose} className="cursor-pointer w-fit h-fit">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-8 hover:stroke-blue-400">
                        <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
            <div className="flex flex-col gap-6 justify-between">
                {/* PARTE DE DADOS DA PESSOA */}
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">Nome: </label>
                    <input type="text" placeholder="Samuel de Abreu Moisés" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" >Email: </label>
                    <input type="text" placeholder="samuel123@gmail.com" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact">Contato (Whatsapp): </label>
                    <input type="tel" autoComplete="tel" placeholder="(00) 9 0000-0000" className="max-w-sm p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact">Contato (Celular): </label>
                    <input type="tel" autoComplete="tel" placeholder="(00) 9 0000-0000" className="max-w-sm p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="birthdate" >Data de Nascimento: </label>
                    <input type="date" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="gender">Gênero:</label>
                    <select name="gender" className="max-w-md p-1 border rounded">
                        {Object.entries(Gender).map(([key, value]) => (
                            <option key={key} value={key} >
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="profession" >Profissão: </label>
                    <input type="text" placeholder="Desenvolvedor de Software" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="company" >Empresa que Trabalha: </label>
                    <select name="company" className="max-w-md p-1 border rounded">
                        {companies.map((company) => (
                            <option key={company.id} value={company.id} >
                                {company.companyName}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="street" >Foto de Perfil: </label>
                    <input type="file" className="max-w-md p-1 border rounded" />
                </div>

                {/* PARTE DE ENDEREÇO */}
                <h2 className="text-2xl">Endereço</h2>
                <div className="flex flex-col gap-2">
                    <label htmlFor="street" >Rua: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="number" >Número: </label>
                    <input type="text" className="max-w-20 p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="neighborhood" >Bairro: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="city" >Cidade: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="state" >Estado(UF): </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="cep" >CEP: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
            </div>
        </div>
    )
}