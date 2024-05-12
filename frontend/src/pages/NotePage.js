import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

const NotePage = ({history}) => {
  const { id } = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  }, [id])

  let updateNote = async () => {
    console.log(note)
    await fetch(`/api/notes/${id}/update`, {
      method: "PUT",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    })
  }

  let getNote = async () => {
    if (id === 'new') return;
    const response = await fetch(`/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
  }

  let deleteNote = async () => {
    await fetch(`/api/notes/${id}/delete`, {
      method: "DELETE",
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  let createNote = async () => {
    await fetch(`/api/notes/create`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(note),
    });
  }
  
  return (
    <div className='note'>
      <div className='note-header'>
        <h1>
          <Link onClick={updateNote} to='/'> &#x2190; </Link>
        </h1>
        { id !== 'new' ? (
          <Link onClick={deleteNote} to='/'>Delete</Link>
        ): (
          <Link onClick={createNote} to='/'>Done</Link>
        )}
      </div>
      <textarea onChange={(e) => {setNote({...note, 'body': e.target.value})}} defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage