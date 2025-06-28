import { Routes, Route } from "react-router-dom";
import ListPost from "./pages/ListPost";
import OnePost from './pages/OnePost';
import AddPost from "./pages/AddPost";
import DeletePost from "./pages/DeletePost";
import EditPost from "./pages/EditPost";

export default function PostRoutes(){
    return (
        <Routes>
            <Route path="/" element={<ListPost/>}/>
            <Route path="/posts/new" element={<AddPost/>} />
            <Route path="/posts/:id" element={<OnePost/>} />
            <Route path="/posts/:id/edit" element={<EditPost/>} />
            <Route path="/posts/:id/delete" element={<DeletePost/>} />
        </Routes>
    )
}

