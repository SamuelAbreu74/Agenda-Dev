export default async function RegisteredPersons() {
    
    const response = await fetch('http://localhost:3001/persons');
    const data = await response.json()
    const number_of_persons = data.all_persons.length;

    return (
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6   flex items-center justify-center hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Pessoas Cadastradas: {number_of_persons}</h2>
        </div>
    )
}