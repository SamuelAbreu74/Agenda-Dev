export default function Button() {


    
    return (
        <div className="flex justify-end">
            <button className="flex gap-2 min-w-30 rounded-xl p-1 cursor-pointer bg-blue-600 hover:bg-blue-700"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="white" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
            </svg>
                <h1>Adicionar</h1>
            </button>
        </div>
    )
}