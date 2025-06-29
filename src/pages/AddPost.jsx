import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";

export default function AddPost(){
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const navigate = useNavigate()

    const handleAdd = (e)=>{
        e.preventDefault()

        const newPost = {
            id:Date.now(), title, body
        }
        const savedPosts = localStorage.getItem('posts')
        const posts = savedPosts ?JSON.parse(savedPosts): []

        const updatedPosts = [newPost,...posts]
        localStorage.setItem('posts', JSON.stringify(updatedPosts))
        alert('Salvo')
        navigate('/')
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow dark:bg-gray-800 dark:text-gray-100">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6 dark:text-gray-100">Novo post</h2>

            <PostForm
                title={title}
                body={body}
                setTitle={setTitle}
                setBody={setBody}
                onSubmit={handleAdd}
                buttonLabel='Criar'
            />
        </div>
    )
}
