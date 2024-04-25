import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const Recent = () => {
  const [notes, setNotes] = useState([])
  const fetchRecentNotes = async () => {
    try {
      const recentNotes = await axios.get("http://localhost:8080/notes/recent")
      setNotes(recentNotes.data)
    } catch (err) {
      if (err)
        console.log(`Error fetching Recent notes from Client: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchRecentNotes()
  }, [])

  return (
    <section>
      <h2>Latest Notes</h2>
      <div>
        {notes.map((note) => {
          return (
            <div key={note.id}>
              <h4>{note.title}</h4>
              <h4>{note.text}</h4>
              <p>----</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Recent
