import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Recent from "./Recent"
import { RiDeleteBin5Line } from "react-icons/ri"

const Notes = () => {
  const [notes, setNotes] = useState([])
  const fetchAllNotes = async () => {
    try {
      const allNotes = await axios.get("http://localhost:8080/notes")
      setNotes(allNotes.data)
    } catch (err) {
      if (err) console.log(`Error fetching notes from server: ${err.message}`)
    }
  }

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/notes/${id}`)
      window.location.reload()
    } catch (err) {
      if (err) console.log(`Error deleting notes from Client: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchAllNotes()
  }, [])

  return (
    <main>
      <Recent className='recent_grid' />

      <section className='notes'>
        <div className='notes_container'>
          {notes.map((note) => {
            return (
              <div className='notes_box' key={note.id}>
                <Link to={`/notes/${note.id}`}>
                  <h2>{note.title}</h2>
                  <p>
                    {note.text.length > 393
                      ? note.text.slice(0, 394) + "..."
                      : note.text}
                  </p>
                  <div className='notes_datetime'>
                    <h4>{note.date_edited.slice(0, 10)}</h4>
                    <h4>{note.time_edited.slice(0, 5)}</h4>
                  </div>
                  <button onClick={() => handleDelete(note.id)} id='delete_btn'>
                    <RiDeleteBin5Line />
                  </button>
                </Link>
                <br />
              </div>
            )
          })}
        </div>
      </section>
    </main>
  )
}

export default Notes
