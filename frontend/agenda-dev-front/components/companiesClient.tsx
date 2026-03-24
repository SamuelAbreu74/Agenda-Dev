'use client'
import AddButton from "./addButton";
import CompanyComponent, { Company } from "./companyComponents";
import NewCompanyFormModal from "./newCompanyFormModal";
import { useState } from "react";

export default function CompaniesClient() {

    const [openNewModal, setOpenNewModal] = useState<boolean>(false);
    // const [openEditModal, setOpenEditModal] = useState<boolean>(false);
    const [selectedCompany, setSelectedCompany] = useState<Company | null>(null);


    // const handleEdit = (person: Person) => {
    //     setSelectedPerson(person);
    //     setOpenEditModal(true);
    // };

    // const refreshList = () => {
    // window.location.reload();
    // };

    return (
        <section className="flex flex-col gap-6">
            {/* Div para SearchBar */}
            <div className="max-w-dvw min-w-[175] ">
                <input type="text" placeholder="SeachBar" className="text-black max-w-80p-3  border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
            </div>

            {/* Botão Adicionar */}
            <div className="flex justify-end">
                <div onClick={() => setOpenNewModal(!openNewModal)} >
                    <AddButton />
                </div>
            </div>

            {/* Sessão para listar as Pessoas  */}
            <section className=" shadow-sm border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-blue-200 hover:shadow-md transition">
                {/* Container da Pessoa */}
                <CompanyComponent />
            </section>

            {/* Modal para Criar uma nova Pessoa  */}
            <NewCompanyFormModal isOpen={openNewModal} onClose={() => setOpenNewModal(false)} company={selectedCompany} />

            {/* Modal para Editar uma Pessoa */}
            {/* <EditPersonFormModal isOpen={openEditModal} person={selectedPerson} onClose={() => {
                setOpenEditModal(false);
                setSelectedPerson(null);
            }} onUpdate={refreshList}
            /> */}
        </section>
    )
}