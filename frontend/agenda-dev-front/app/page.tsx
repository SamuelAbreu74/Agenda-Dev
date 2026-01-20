export default function Home() {

  const navigation = [
    { name: 'Dashboard', href: '#', current: true },
    { name: 'Pessoas', href: '#', current: false },
    { name: 'Empresas', href: '#', current: false },
    { name: 'Aniverários', href: '#', current: false },
  ]


  return (
    <div className="text-black m-1 relative flex bg-indigo-50 min-h-screen  ">
      <aside className="shrink-0 w-64 flex flex-col gap-4 rounded-r-2xl border border-gray-200 p-4 bg-white shadow-sm">
        <div>
          <h1 className="text-lg font-semibold uppercase tracking-wide text-gray-800">Agenda Dev</h1>
        </div>

        <nav className="flex flex-col gap-2" aria-label="Menu principal">
          <a href="#dashboard" className="flex items-center gap-3 rounded-lg bg-blue-800 px-4 py-2.5 text-white font-medium transition-colors hover:bg-blue-700">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z" />
              <path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z" />
            </svg>
            Dashboard
          </a>

          <a href="#pessoas" className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-gray-700 font-medium transition-colors hover:bg-gray-100 border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
            Pessoas
          </a>

          <a href="#empresas" className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-gray-700 font-medium transition-colors hover:bg-gray-100 border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" stroke-linejoin="round" d="M3.75 21h16.5M4.5 3h15M5.25 3v18m13.5-18v18M9 6.75h1.5m-1.5 3h1.5m-1.5 3h1.5m3-6H15m-1.5 3H15m-1.5 3H15M9 21v-3.375c0-.621.504-1.125 1.125-1.125h3.75c.621 0 1.125.504 1.125 1.125V21" />
            </svg>
            Empresas
          </a>

          <a href="#aniversariantes" className="flex items-center gap-3 rounded-lg bg-white px-4 py-2.5 text-gray-700 font-medium transition-colors hover:bg-gray-100 border border-gray-200">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5" aria-hidden="true">
              <path strokeLinecap="round" stroke-linejoin="round" d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z" />
            </svg>
            Aniversariantes
          </a>
        </nav>
      </aside>

     
      <main className="flex-1 p-6 ml-3 flex flex-col gap-6">
        
        <header className="mb-2">
          <h1 className="text-2xl font-bold text-gray-900">Olá, Administrador!</h1>
          <p className="text-sm text-gray-600 italic mt-1">Quinta-feira, 18 de maio</p>
        </header>

       
        <section className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
          <h2 className="bg-gray-50 border-b border-gray-200 px-4 py-3 text-sm font-semibold uppercase text-gray-700">
            Aniversariantes de Hoje!
          </h2>
          <div className="divide-y divide-gray-200">
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 1</div>
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 2</div>
            <div className="px-4 py-3 text-gray-800 hover:bg-gray-50 transition-colors">Pessoa 3</div>
          </div>
        </section>

    
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex flex-col items-center justify-center min-h-[200px] hover:shadow-md transition-shadow">
            <h2 className="text-xl font-semibold text-gray-800 text-center">Aniversariantes do Mês</h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Empresas Cadastradas</h2>
          </div>

          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm p-6 flex items-center justify-center hover:shadow-md transition-shadow">
            <h2 className="text-lg font-semibold text-gray-800">Pessoas Cadastradas</h2>
          </div>
        </div>
      </main>
    </div>
  );
}
