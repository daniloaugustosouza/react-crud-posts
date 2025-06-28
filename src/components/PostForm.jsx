import React from 'react'

export default function PostForm({title, body, setTitle, setBody, onSubmit,buttonLabel}) {
    return (
        <form onSubmit={onSubmit} className='space-y-4'>
            <div>
                <label className='block text-sm font-medium'>Titulo</label>

                <input type='text' value={title} onChange={(e) => setTitle(e.target.value)}
                    className='w-full border px-3 py-2 rounded' required>
                </input>
            </div>
            <div>
                <label className='block text-sm font-medium'>Texto</label>
                <textarea value={body} onChange={(e) => setBody(e.target.value)}
                    className="w-full border px-3 py-2 rounded" rows="4" required
                />
            </div>

            <button type='submit' className='bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition'>
                {buttonLabel || 'Salvar'}
            </button>
        </form>
    )
}
