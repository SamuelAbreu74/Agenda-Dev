interface NewPersonFormModalProps {
    isOpen: boolean
    onClose: () => void
}

export default function NewPersonFormModal({ isOpen, onClose}: NewPersonFormModalProps) {

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
                <div className="flex flex-col gap-2">
                    <label htmlFor="name">NOME: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="email" >EMAIL: </label>
                    <input type="text" className="max-w-md p-1 border rounded" />
                </div>
                <div className="flex flex-col gap-2">
                    <label htmlFor="contact">CONTATO: </label>
                    <input type="tel" autoComplete="tel" placeholder="85 9 0000 0000" className="max-w-sm p-1 border rounded" />
                </div>
            </div>
        </div>
    )
}