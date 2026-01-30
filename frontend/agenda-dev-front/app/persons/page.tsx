import PersonComponent from "@/components/personComponent"

export default async function Persons() {

    return (
        <div>
            <main className="flex-1 p-6 ml-3 flex flex-col gap-6">
                <header className="mb-2">
                    <h1 className="text-gray-900 text-4xl font-bold">Pessoas</h1>
                    <p className="text-sm text-gray-600 mt-1"><i>Quinta-Feira, 18 de Maio</i></p>
                </header>


                {/* Div para SearchBar */}
                <div className="max-w-dvw min-w-[175] ">
                    <input type="text" placeholder="SeachBar" className="text-black max-w-80p-3  border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"></input>
                </div>

                {/* Sessão para listar as Pessoas  */}
                <section className=" shadow-sm border border-gray-200 rounded-lg bg-white overflow-hidden hover:shadow-blue-200 hover:shadow-md transition">
                    {/* Container da Pessoa */}
                    <PersonComponent/>
                </section>
            </main>
        </div>
    )
}