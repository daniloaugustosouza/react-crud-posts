import { useEffect,useState} from "react";
import { useNavigate,useParams,Link } from "react-router-dom";

export default function DeletePost() {
	const {id} = useParams()
	const [post,setPost] = useState(null)
	const navigate = useNavigate()
	
	useEffect(() => {
		const savedPosts = localStorage.getItem('posts')
		if (savedPosts) {
			const encontrado = JSON.parse(savedPosts).find(p => p.id === Number(id))
			if (encontrado) {
				setPost(encontrado)
			}
		}
	}, [id])

	const handleDelete = () =>{
		const savedPosts = localStorage.getItem('posts')
		if (savedPosts) {
			const posts = JSON.parse(savedPosts)
			const atualizados = posts.filter(p => p.id !== Number(id))
			localStorage.setItem('posts', JSON.stringify(atualizados))
		}
		alert('Apagado')
		navigate('/')
	}

	if(!post) return <p>...</p>
	return (
		<div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
			<h2 className="text-2xl font-semibold text-red-600 mb-4">Apagar</h2>
			<p className="text-gray-900 font-medium mb-2">{post.title}</p>
			<p className="text-gray-700 mb-4">{post.body}</p>

			<p className="text-red-500 font-medium mb-6">Sim?</p>
			<div className="flex gap-4">
				<button onClick={handleDelete} className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition">
				Apagar
				</button>
				<Link to={`/posts/${id}`} className="px-4 py-2 border border-gray-300 rounded hover:bg-blue-600 transition">Voltar</Link>
			</div>
		</div>
	)
}
