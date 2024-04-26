import React from "react"
import { useState, useEffect } from "react"
import axios from "axios"

const SingleNote = () => {
  const [singleNote, setSingleNote] = useState({})
  const currentPath = window.location.pathname.split("/")[2]
  console.log(currentPath)

  useEffect(() => {
    const fetchSingleNote = async () => {
      try {
        const note = await axios.get(
          `http://localhost:8080/notes/${currentPath}`
        )

        setSingleNote(note.data[0])
        console.log(note)
      } catch (err) {
        if (err)
          console.log(`Error fetching Note ${currentPath}) ${err.message} `)
      }
    }
    fetchSingleNote()
  }, [currentPath])

  console.log(singleNote)

  return (
    <div>
      <h2>Single Note</h2>
      <section>
        {singleNote && (
          <div>
            <h3>Test</h3>
            <h2>{singleNote.title}</h2>
            <p>{singleNote.text}</p>
            <h4>{singleNote.date_edited}</h4>
            <h4>{singleNote.time_edited}</h4>
          </div>
        )}
      </section>
    </div>
  )
}

export default SingleNote