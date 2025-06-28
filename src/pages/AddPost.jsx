import { useState } from "react";
import { useNavigate } from "react-router-dom";
import PostForm from "../components/PostForm";
import axios from 'axios';

export default function AddPost(){
    const [title,setTitle] = useState('')
    const [body,setBody] = useState('')
    const navigate = useNavigate()

    const handleAdd = (e)=>{
        e.preventDefault()

        axios.post('https://jsonplaceholder.typicode.com/posts', title,body).then(res => {
            alert('Salvo')
            navigate('/')
        })
    }

    return (
        <div className="max-w-xl mx-auto bg-white p-6 rounded shadow">
            <h2 className="text-2xl font-semibold text-gray-900 mb-6">Novo post</h2>

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
