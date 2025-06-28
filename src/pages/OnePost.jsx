import { useParams, Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function OnePost() {
	const {id} = useParams() 		
	const [post,setPost] = useState(null)

	useEffect(() => {
		const savedPosts = localStorage.getItem('posts')
		if (savedPosts) {
			const findpost = JSON.parse(savedPosts).find(p => p.id === Number(id))
			if (findpost) {
				setPost(findpost)
			}
		}
	}, [id])

	if(!post) return <p>.</p>

	return (
		<div className="bg-white p-6 rounded shadow max-w-2xl mx-auto">
			<h2 className="text-2xl font-bold mb-4">{post.title}</h2>
			<p className="text-gray-800">{post.body}</p>

			<div className="flex gap-4 mt-6">
				<Link to="/" className="text-blue-600 hover:underline">Voltar</Link>
				<Link to={`/posts/${post.id}/edit`} className="text-yellow-600 hover:underline">Editar</Link>
				<Link to={`/posts/${post.id}/delete`} className="text-red-600 hover:underline">Deletar</Link>
			</div>
		</div>
	)
}
