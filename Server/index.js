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

// --------------------------------
app.listen(port, () => {
  console.log(`Listening on Port: ${port}`)
})
