import { useEffect,useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import axios from "axios";
import PostForm from '../components/PostForm'

export default function EditPost() {
  const {id} = useParams()
  const [title,setTitle] = useState('')
  const [body,setBody] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(res => {
        setTitle(res.data.title)
        setBody(res.data.body)
      })
  }, [id])

  const handleEdit = (e) => {
    e.preventDefault()
    axios.put(`https://jsonplaceholder.typicode.com/posts/${id}`, {title,body})
      .then(() => {
        alert('Editado')
        navigate('/')
      })
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
