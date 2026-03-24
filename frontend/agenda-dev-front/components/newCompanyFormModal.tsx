import { Company } from "./companyComponents"
import { useState } from "react"

interface NewCompanyFormModalProps {
    isOpen: boolean
    company: Company | null
    onClose: () => void
}

interface CompanyFormData {
    logoUrl: string;
    fantasyName: string;
    companyName: string;
    email: string;
    cnpj: string;
    accountable: string;
    cellContact: string;
    whatsappContact: string;
    fixedContact: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
}


export default function NewCompanyFormModal({ isOpen, onClose, company }: NewCompanyFormModalProps) {

    // Criando estado para os dados
    const [formData, setFormData] = useState<CompanyFormData>({
        logoUrl: '',
        fantasyName: '',
        companyName: '',
        email: '',
        cnpj: '',
        accountable: '',
        cellContact: '',
        whatsappContact: '',
        fixedContact: '',
        street: '',
        number: '',
        neighborhood: '',
        city: '',
        state: '',
        cep: ''
    });


    // Funçao para atualizar o estado ao preencher o formulario
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }))
    }


    // Funçao geral que envia os dados
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();

        // Requisição POST na API para cadastrar nova Empresa.
        try {
            const response = await fetch("http://localhost:3001/companies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                onClose(); // Fecha o Modal
            } else {
                console.error("Erro ao salvar.");
            }

        } catch (error) {
            console.error("Erro na requisiçao: ", error);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
            <div className="flex flex-col w-full max-w-3xl max-h-[90vh] overflow-y-auto border-2 rounded-2xl border-black shadow-md shadow-blue-200 p-6 bg-blue-950 text-white">

                {/* HEADER */}
                <div className="flex items-center justify-between pb-6 border-b border-blue-900/50 mb-4">
                    <h1 className="text-xl md:text-2xl font-bold">Adicione uma nova Empresa:</h1>
                    <button onClick={onClose} className="cursor-pointer hover:scale-110 transition-transform">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="size-7 text-white hover:text-blue-400">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>
                </div>

                {/* FORMULÁRIO EM GRID */}
                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

                    {/* DADOS PESSOAIS */}
                    <div className="flex flex-col gap-2">
                        <label htmlFor="name">Nome Fantasia: </label>
                        <input onChange={handleChange} name="name" value={formData.fantasyName} type="text" placeholder="Samuel de Abreu Moisés" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" >Razão Social: </label>
                        <input onChange={handleChange} name="email" value={formData.companyName} type="text" placeholder="samuel123@gmail.com" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" >Email: </label>
                        <input onChange={handleChange} name="email" value={formData.email} type="text" placeholder="samuel123@gmail.com" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" >CNPJ: </label>
                        <input onChange={handleChange} name="email" value={formData.cnpj} type="text" placeholder="samuel123@gmail.com" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="email" >Responsável: </label>
                        <input onChange={handleChange} name="email" value={formData.accountable} type="text" placeholder="samuel123@gmail.com" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="contact">Contato (Celular): </label>
                        <input onChange={handleChange} name="cellContact" value={formData.cellContact} type="tel" placeholder="(00) 9 0000-0000" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="contact">Contato (Whatsapp): </label>
                        <input onChange={handleChange} name="whatsappContact" value={formData.whatsappContact} type="tel" placeholder="(00) 9 0000-0000" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="contact">Contato (Fixo): </label>
                        <input onChange={handleChange} name="whatsappContact" value={formData.fixedContact} type="tel" placeholder="(00) 9 0000-0000" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2 md:col-span-2">
                        <label htmlFor="profile_pic" >Logo de Perfil: </label>
                        {/* <input name="photoUrl" onChange={handlePhotoUpload} type="file" accept="image/*" className="w-full p-1 border rounded text-white file:mr-4 file:py-1 file:px-4 file:rounded-full file:border-0 file:text-sm file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100" />
                        {formData.photoUrl && (
                            <p className="text-xs text-blue-300">Foto atual: {formData.photoUrl.split('/').pop()}</p>
                        )} */}
                    </div>
                    {/* DADOS DE ENDEREÇO */}
                    <h2 className="text-2xl md:col-span-2 mt-4 border-b border-blue-800 pb-2">Endereço</h2>

                    <div className="flex flex-col gap-2 md:col-span-1">
                        <label htmlFor="street" >Rua: </label>
                        <input onChange={handleChange} name="street" value={formData.street} type="text" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="number" >Número: </label>
                        <input onChange={handleChange} name="number" value={formData.number} type="text" className="w-full md:max-w-20 p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="neighborhood" >Bairro: </label>
                        <input onChange={handleChange} name="neighborhood" value={formData.neighborhood} type="text" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="city" >Cidade: </label>
                        <input onChange={handleChange} name="city" value={formData.city} type="text" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="state" >Estado(UF): </label>
                        <input onChange={handleChange} name="state" value={formData.state} type="text" className="w-full p-1 border rounded text-white" />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="cep" >CEP: </label>
                        <input onChange={handleChange} name="cep" value={formData.cep} type="text" className="w-full p-1 border rounded text-white" />
                    </div>
                </form>

                {/* BOTÃO DE AÇÃO (OPCIONAL) */}
                <div className="flex justify-end gap-4 mt-4">
                    <button onClick={onClose} className="px-4 py-2 bg-red-600 cursor-pointer rounded-lg hover:bg-red-700 transition-colors">Cancelar</button>
                    <button onClick={handleSubmit} type="submit" className="px-4 py-2 bg-blue-600 rounded-lg cursor-pointer hover:bg-blue-700 transition-colors" >Salvar</button>
                </div>
            </div>
        </div>
    );

}