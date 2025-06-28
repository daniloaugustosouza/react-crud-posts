import { Routes, Route, Link } from "react-router-dom";
import PostRoutes from "./routes";

export default function App(){
    return(
        <div className="min-h-screen bg-gray-100 text-gray-900">
            <header className="bg-white border-b border-gray-200 py-4 px-6 shadow-sm">
                <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-center tracking-[12px] text-xl font-semibold">Gerenciador de Posts Simulado</h1>
                <Link to="/" className="text-blue-600 hover:underline">Começo</Link>
                </div>
            </header>

            <main className="container mx-auto p-6">
                <PostRoutes />
            </main>
        </div>
    )
}
