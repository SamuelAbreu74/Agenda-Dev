import Link from "next/link";

interface Celebrant {
    id: string;
    name: string;
    birthDate: string;
    company: string;
    profession: string;
    photoUrl: string;
    whatsappContact: string;
}

export default async function CelebrantsComponent() {
    // Chamada na rota da API (Celebrants)
    const response = await fetch('http://localhost:3001/persons/celebrants', {cache: 'no-store'})
    
    if (!response.ok) {
        throw new Error('Falha ao carregar aniversariantes');
    }

    const data = await response.json();
    const celebrants = data;

    return (
        <section className="border border-gray-200 rounded-lg bg-white shadow-sm overflow-hidden">
            <h2 className="bg-blue-900 border-b border-gray-200 px-4 py-3 text-sm font-semibold uppercase text-white">
                Aniversariantes de Hoje!
            </h2>
            <div className="divide-y divide-gray-200">
                {celebrants.length > 0 ? (
                    celebrants.map((celebrant: Celebrant) => (
                        <div key={celebrant.id} className="flex items-center justify-between px-4 py-3  text-gray-800  hover:bg-gray-100 hover:shadow-blue-950">
                        <div className="flex  items-center gap-4">
                            <img src={celebrant.photoUrl || 'https://via.placeholder.com/60'} alt="foto de perfil" className="mask-circle w-15 h-15 bg-blue-500 rounded-4xl" />
                            <div>
                                <h1>{celebrant.name}</h1>
                                <p className="cursor-default"><i>Idade</i></p>
                            </div>
                        </div>
                        <div className="flex gap-5">
                            <Link target="_blank" href={`https://wa.me/55${celebrant.whatsappContact}`} className="cursor-pointer flex p-1 min-w-30 gap-2 min-h-8 rounded bg-green-500 hover:bg-green-600 transition-colors"><img className="invert" width="24" height="24" src="https://img.icons8.com/material-outlined/24/whatsapp--v1.png" alt="whatsapp--v1" /> <h1 className="text-white">Whatsapp</h1></Link>
                        </div>
                    </div>
                    ))
                ) : (
                    <div className="px-4 py-3 text-gray-500 italic">Nenhum aniversariante hoje.</div>
                )}
            </div>
        </section>
    );
}