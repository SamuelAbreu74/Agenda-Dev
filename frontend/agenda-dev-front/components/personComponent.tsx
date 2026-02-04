import Link from "next/link";

interface Person {
    id: string;
    name: string;
    email: string;
    whatsappContact: string;
    cellContact: string;
    street: string;
    number: string;
    neighborhood: string;
    city: string;
    state: string;
    cep: string;
    birthDate: string;
    gender: 'MASCULINO' | 'FEMININO';
    profession: string;
    company: string;
    photoUrl: string | null;
}



export default async function PersonComponent() {

    // Chamada ao endpoint do backend
    const response = await fetch('http://localhost:3001/persons')
    const data = await response.json() 
    const persons = data.all_persons;

    return (
        <div>
            {persons.map((person: Person) => (
                    <div key={person.id} className="flex items-center justify-between px-4 py-3  text-gray-800  hover:bg-gray-100 hover:shadow-blue-950">
                        <div className="flex  items-center gap-4">
                            <img src={person.photoUrl || 'https://via.placeholder.com/60'} alt="foto de perfil" className="mask-circle w-15 h-15 bg-blue-500 rounded-4xl" />
                            <div>
                                <h1>{person.name}</h1>
                                <p className="cursor-default"><i>Idade</i></p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <Link href={`https://wa.me/55${person.whatsappContact}`} className="cursor-pointer flex p-1 min-w-30 gap-2 min-h-8 rounded bg-green-500 hover:bg-green-600 transition-colors"><img className="invert" width="24" height="24" src="https://img.icons8.com/material-outlined/24/whatsapp--v1.png" alt="whatsapp--v1" /> <h1 className="text-white">Whatsapp</h1></Link>
                            <div className="cursor-pointer flex p-1 w-8 gap-2 h-8  rounded-full items-center bg-gray-100 hover:bg-blue-200 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" className="size-6 stroke-gray-700 hover:stroke-blue-700 transition-colors">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                </svg>
                            </div>
                            <div className="cursor-pointer flex p-1 w-8 gap-2 h-8  rounded-full items-center bg-gray-100 hover:bg-red-200 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6 stroke-gray-700 hover:stroke-red-500 transition-colors">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                </svg>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )

}