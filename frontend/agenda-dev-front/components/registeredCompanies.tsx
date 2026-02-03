export default async function RegisteredCompanies() {
    
    const response = await fetch('http://localhost:3001/companies')
    const data = await response.json();
    const companies = data.length
    
    
    return(
        <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800">Empresas Cadastradas: {companies}</h2>
        </div>
    );
}