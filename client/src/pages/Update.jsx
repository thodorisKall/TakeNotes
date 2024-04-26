import React, { useEffect } from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Update = () => {
  const [selectedNote, setSelectedNote] = useState({
    title: "",
    text: "",
  })

  const navigate = useNavigate("/notes")
  const noteId = window.location.pathname.split("/")[2]

  const fetchNote = async () => {
    try {
      const note = await axios.get(`http://localhost:8080/notes/${noteId}`)
      setSelectedNote(note.data[0])
    } catch (err) {
      if (err)
        console.log(`Error fetching ${noteId} from Client: ${err.message}`)
    }
  }

  useEffect(() => {
    fetchNote()
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target
    setSelectedNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    try {
      await axios.put(
        `http://localhost:8080/notes/update/${noteId}`,
        selectedNote
      )
      navigate("/notes")
      console.log("done")
    } catch (err) {
      if (err)
        console.log(`Error Updating Note ${noteId} error: ${err.message}`)
    }
  }

  return (
    <section>
      <h2>Update Note</h2>
      <form>
        <input
          type='text'
          placeholder='title of your Note'
          onChange={handleChange}
          value={selectedNote && selectedNote.title}
          name='title'
        />
        <textarea
          type='text'
          placeholder='type your note here'
          onChange={handleChange}
          value={selectedNote && selectedNote.text}
          name='text'
        />
      </form>
      <button onClick={handleUpdate}>Update</button>
    </section>
  )
}

export default Update
