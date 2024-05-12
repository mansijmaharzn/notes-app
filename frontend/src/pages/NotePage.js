import React, {useState, useEffect} from 'react'
import { Link, useParams } from 'react-router-dom';

const NotePage = () => {
  const { id } = useParams();
  let [note, setNote] = useState(null);

  useEffect(() => {
    getNote();
  })

  let getNote = async () => {
    const response = await fetch(`/api/notes/${id}`);
    const data = await response.json();
    setNote(data);
  }
  
  return (
    <div className='note'>
      <div className='note-header'>
        <h1>
          <Link to='/'> &#x2190; </Link>
        </h1>
      </div>
      <textarea defaultValue={note?.body}></textarea>
    </div>
  )
}

export default NotePage