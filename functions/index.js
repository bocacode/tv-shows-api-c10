import functions from 'firebase-functions'
import express from 'express'
import cors from 'cors'

const app = express() // creates our express app
app.use(cors())
app.use(express.json())

// ROUTES GO HERE...


// lets us run locally without emulators:
app.listen(3000, () => console.log(`Listening on http://localhost:3000...`))

export const api = functions.https.onRequest(app) // exports our cloud function
