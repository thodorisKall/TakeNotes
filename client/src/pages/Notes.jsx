import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"

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
      <h1>Notes</h1>
      <section>
        <div>
          {notes.map((note) => {
            return (
              <div className='note_box' key={note.id}>
                <h2>{note.title}</h2>
                <p>{note.text}</p>
                <h4>{note.date_edited}</h4>
                <h4>{note.time_edited}</h4>
                <button onClick={() => handleDelete(note.id)}>Delete</button>
                <p>---------</p>
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
