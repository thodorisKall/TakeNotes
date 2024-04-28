import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"
import { Link } from "react-router-dom"
import { FaEdit } from "react-icons/fa"

const SingleNote = () => {
  const [singleNote, setSingleNote] = useState({})
  const currentPath = window.location.pathname.split("/")[2]

  useEffect(() => {
    const fetchSingleNote = async () => {
      try {
        const note = await axios.get(
          `http://localhost:8080/notes/${currentPath}`
        )

        setSingleNote(note.data[0])
      } catch (err) {
        if (err)
          console.log(`Error fetching Note ${currentPath}) ${err.message} `)
      }
    }
    fetchSingleNote()
  }, [currentPath])

  return (
    <section className='single'>
      {singleNote && (
        <div className='single_container'>
          <h2>{singleNote.title}</h2>
          <p>{singleNote.text}</p>
          <div className='single_datetime'>
            {singleNote.date_edited && (
              <h4>{singleNote.date_edited.substring(0, 10)}</h4>
            )}
            {singleNote.time_edited && (
              <h4>{singleNote.time_edited.substring(0, 5)}</h4>
            )}
          </div>

          <button id='edit_btn'>
            <Link to={`/update/${singleNote.id}`}>
              <FaEdit />
            </Link>
          </button>
        </div>
      )}
    </section>
  )
}

export default SingleNote
