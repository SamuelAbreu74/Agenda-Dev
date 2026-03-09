'use client'
import AddButton from "./addButton";
import NewPersonFormModal from "./newPersonFormModal";
import { useState } from "react";

export default function PersonsClient() {

    const [open, setOpen] = useState<boolean>(false);

    return (
        <section className="flex flex-col gap-6">
            {/* Div para SearchBar */}
            <div className="max-w-dvw min-w-[175] ">
                <input type="text" placeholder="SeachBar" className="text-black max-w-80p-3  border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
            </div>

            {/* Botão Adicionar */}
            <div className="flex justify-end">
                <div onClick={() => setOpen(!open)} >
                    <AddButton />
                </div>
            </div>
            {/* Modal para criar uma nova Pessoa  */}
            <NewPersonFormModal isOpen={open} onClose={() => setOpen(false)}/>
        </section>
    )
}