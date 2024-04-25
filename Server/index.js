const express = require("express")
const app = express()
const cors = require("cors")
const mysql = require("mysql2")

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "h1ga4feP",
  database: "takenotes",
})

app.use(express.json())
app.use(cors())

const port = 8080
// --------------------------------

app.get("/notes", (req, res) => {
  const q = "SELECT * FROM notes"
  pool.query(q, (err, results) => {
    if (err) console.log(err.message)
    return res.json(results)
  })
})

app.get("/notes/recent", (req, res) => {
  const q = "SELECT * FROM notes ORDER BY id DESC LIMIT 4"
  pool.query(q, (err, results) => {
    if (err) console.log(err.message)
    return res.json(results)
  })
})

app.get("/notes/:id", (req, res) => {
  const q = "SELECT * FROM notes WHERE id =?"
  const noteId = req.params.id
  pool.query(q, [noteId], (err, results) => {
    if (err) console.log(`Error Displaying Note: ${err.message}`)
    res.json(results)
  })
})

app.post("/notes", (req, res) => {
  const q =
    "INSERT INTO notes (title,text,date_edited,time_edited) VALUES (?,?,CURDATE(),CURTIME())"
  const { title, text } = req.body
  pool.query(q, [title, text], (err, results) => {
    if (err) console.log(`Error creating new Notes ${err.message}`)
    return res.json(results)
  })
})

app.delete("/notes/:id", (req, res) => {
  const q = "DELETE FROM notes WHERE id= ?"
  const noteId = req.params.id
  pool.query(q, [noteId], (err, results) => {
    if (err) console.log(`Error deleting Notes ${err.message}`)
    console.log(`Note ${noteId} deleted`)
  })
})

// --------------------------------
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
