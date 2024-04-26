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
    <section className='recent'>
      <h3>Recent Notes</h3>
      <div className='recent_container'>
        {notes.map((note) => {
          return (
            <div className='recent_box' key={note.id}>
              <h4>{note.title}</h4>
              <h4>{note.text}</h4>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Recent
