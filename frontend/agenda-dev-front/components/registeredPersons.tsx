import { workerData } from "node:worker_threads";

export default async function RegisteredPersons() {
    
    const response = await fetch('http://localhost:3001/persons/count');
    const data = await response.json()
    const number_of_persons = data;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 gap-2 flex flex-col max-w-65 items-start justify-center hover:shadow-md transition-shadow">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Pessoas Cadastradas</h2>
            </div>
            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Zm0 3h.008v.008h-.008v-.008Z" />
                </svg>

                <h1 className="text-black font-bold text-3xl ml-5">{number_of_persons}</h1>
            </div>
        </div>
    )
}