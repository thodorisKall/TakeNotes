import React from "react"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

const Add = () => {
  const [newNote, setNewNote] = useState({
    title: "",
    text: "",
  })

  const navigate = useNavigate("/notes")

  const handleChange = (e) => {
    const { name, value } = e.target
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }))
  }

  const handleAdd = async (e) => {
    e.preventDefault()
    try {
      await axios.post("http://localhost:8080/notes", newNote)
      navigate("/notes")
    } catch (err) {
      if (err) console.log(`Error on Creating new Note: ${err.message}`)
    }
  }

  return (
    <section>
      <h2>Add new Note</h2>
      <form>
        <input
          type='text'
          placeholder='title of your Note'
          onChange={handleChange}
          name='title'
        />
        <textarea
          type='text'
          placeholder='type your note here'
          onChange={handleChange}
          name='text'
        />
      </form>
      <button onClick={handleAdd}>Save</button>
    </section>
  )
}

export default Add
