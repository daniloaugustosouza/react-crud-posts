import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import PostForm from '../components/PostForm'

export default function EditPost() {
  	const {id} = useParams()
	const [title,setTitle] = useState('')
	const [body,setBody] = useState('')
	const navigate = useNavigate()

	useEffect(() => {
		const savedPosts = localStorage.getItem('posts')
		if (savedPosts) {
			const post = JSON.parse(savedPosts).find(p => p.id === Number(id))
			if (post) {
				setTitle(post.title)
				setBody(post.body)
			}
		}
	}, [id])

	const handleEdit = (e) => {
		e.preventDefault()
		const savedPosts = localStorage.getItem('posts')
		if (savedPosts) {
			const posts = JSON.parse(savedPosts)
			const updatedPosts = posts.map(p => {
				if (p.id === Number(id)) {
					return { ...p, title, body }
				}
				return p
			})
			localStorage.setItem('posts', JSON.stringify(updatedPosts))
		}
		alert('Editado')
		navigate('/')
	}

	return (
		<div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
			<h2 className="text-2xl font-bold mb-4">Editar Post</h2>
			<PostForm
				title={title}
				body={body}
				setTitle={setTitle}
				setBody={setBody}
				onSubmit={handleEdit}
				buttonLabel='Atualizar'
			/>
		</div>
	)
}
