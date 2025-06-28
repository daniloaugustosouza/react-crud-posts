import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function ListPost() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const savedPosts = localStorage.getItem('posts')
        if (savedPosts) {
            setPosts(JSON.parse(savedPosts))
            return
        }
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=5').then(res => res.json()).then(data => {
            setPosts(data)
            localStorage.setItem('posts', JSON.stringify(data))
        })
        
    }, []);

    const handleDelete = (id) => {
        const filtered = posts.filter((post) => post.id !== id)
        setPosts(filtered)
        localStorage.setItem('posts', JSON.stringify(filtered))
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Posts</h2>
                <Link to="/posts/new" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                Novo post
                </Link>
            </div>

            <div className="overflow-x-auto shadow rounded border">
                <table className="table-fixed border-separate border-spacing-2 bg-white w-full">
                    <thead>
                        <tr className="bg-gray-100 text-left text-sm uppercase text-gray-600">
                            <th className="p-4 border rounded">Titulo</th>
                            <th className="p-4 border rounded">Contéudo</th>
                            <th className="p-4 border rounded">Funções</th>
                        </tr>
                    </thead>

                    <tbody>
                        {posts.map((post) => (
                            <tr key={post.id}>
                                <td className="p-4 border rounded bg-white shadow-sm">{post.title}</td>
                                <td className="p-4 border rounded bg-white shadow-sm">{post.body}</td>
                                <td className="p-4 border rounded bg-white shadow-sm space-x-2">
                                    <Link to={`/posts/${post.id}`} className="text-blue-600 hover:underline">
                                    Ver
                                    </Link>

                                    <Link to={`/posts/${post.id}/edit`} className="text-yellow-600 hover:underline">
                                    Editar
                                    </Link>
                                    <button onClick={() => handleDelete(post.id)} className="text-red-600 hover:underline">
                                    Deletar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}