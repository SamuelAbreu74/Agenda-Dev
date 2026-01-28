export default function Home() {

  return (
    <div>
      <main className="flex-1 p-6 ml-3 flex flex-col gap-6">
        <header className="mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Olá, Administrador!</h1>
          <p className="text-sm text-gray-600 mt-1"><i>Quinta-feira, 18 de maio</i></p>
        </header>


        <section className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
          <h2 className="bg-blue-900 border-b border-gray-200 px-4 py-3 text-sm font-semibold uppercase text-white">
            Aniversariantes de Hoje!
          </h2>
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 1</div>
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 2</div>
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 3</div>
          </div>
        </section>


        <div className="grid grid-cols-2 gap-5 min-h-40 max-w-250">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center  hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Aniversariantes do Mês</h2>
          </div>
          <div className="grid min-h-60 gap-6">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800">Empresas Cadastradas</h2>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6   flex items-center justify-center hover:shadow-md transition-shadow">
              <h2 className="text-lg font-semibold text-gray-800">Pessoas Cadastradas</h2>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
