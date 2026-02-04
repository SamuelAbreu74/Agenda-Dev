export default async function RegisteredCompanies() {

    const response = await fetch('http://localhost:3001/companies')
    const data = await response.json();
    const companies = data.length


    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 gap-2 flex flex-col max-w-fit items-start justify-center hover:shadow-md transition-shadow">
            <div>
                <h2 className="text-lg font-semibold text-gray-800">Empresas Cadastradas</h2>
            </div>
            <div className="flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="black" className="size-9">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 0 0 2.625.372 9.337 9.337 0 0 0 4.121-.952 4.125 4.125 0 0 0-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 0 1 8.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0 1 11.964-3.07M12 6.375a3.375 3.375 0 1 1-6.75 0 3.375 3.375 0 0 1 6.75 0Zm8.25 2.25a2.625 2.625 0 1 1-5.25 0 2.625 2.625 0 0 1 5.25 0Z" />
                </svg>
                <h1 className="text-black font-bold text-3xl ml-5">{companies}</h1>
            </div>
        </div>
    );
}