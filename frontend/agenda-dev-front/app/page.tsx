import CelebrantsComponent from "@/components/celebrantsComponent";
import RegisteredCompanies from "@/components/registeredCompanies"
import RegisteredPersons from "@/components/registeredPersons";

export default function Home() {

  return (
    <div>
      <main className="flex-1 p-6 ml-3 flex flex-col gap-6">
        <header className="mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Olá, Administrador!</h1>
          <p className="text-sm text-gray-600 mt-1"><i>Quinta-feira, 18 de maio</i></p>
        </header>

        <CelebrantsComponent/>

        <div className="grid grid-cols-2 gap-5 min-h-40 max-w-250">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center  hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Aniversários do Mês</h2>
          </div>
          <div className="grid min-h-60 gap-6">
            <RegisteredCompanies/>
            <RegisteredPersons/>
          </div>
        </div>
      </main>
    </div>
  );
}
